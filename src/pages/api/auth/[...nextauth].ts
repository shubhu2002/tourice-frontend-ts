import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";

import type { LoginResProps } from "~/types";
import { apiInstance } from "~/utils";

const LoginResponseSchema = z.object({
  status: z.boolean(),
  id: z.string(),
  email: z.string(),
  username: z.string(),
  isAdmin: z.boolean(),
  token: z.string(),
});

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        try {
          const { data } = await apiInstance.post<LoginResProps>(
            "/auth/login",
            credentials,
          );
          const validatedData = LoginResponseSchema.parse(data);

          if (validatedData.status) {
            return validatedData;
          } else {
            return null;
          }
        } catch (error: unknown) {
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.username = user.username;
        token.isAdmin = user.isAdmin;
        token.token = user.token;
        token.expires = Date.now() + 2 * 24 * 60 * 60 * 1000;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = {
        id: token.id as string,
        username: token.username as string,
        email: token.email!,
      };
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 3 * 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.NEXT_PUBLIC_JWT_SECRET,
    maxAge: 2 * 24 * 60 * 60, // 2 days
  },
};
export default NextAuth(authOptions);
