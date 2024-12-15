import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const res = await fetch("http://localhost:8080/api/v1/auth/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();
        console.log("user at", data);
        if (res.ok && data.status) {
          return {
            id: data.data._id,
            email: data.data.email,
            username: data.data.username,
            isAdmin: data.isAdmin,
            token: data.token,
          };
        }
        return null;
      },
    }),
  ],
  //   secret: process.env.NEXTAUTH_SECRET,
  //   session: {
  //     strategy: "jwt",
  //   },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.username = user.username;
        token.isAdmin = user.isAdmin;
        token.accessToken = user.token;
        token.expires = Date.now() + 2 * 24 * 60 * 60 * 1000;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = {
        id: token.id,
        email: token.email,
        username: token.username,
        isAdmin: token.isAdmin,
      };
      session.accessToken = token.accessToken;
      session.expires = token.expires;
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 3 * 24 * 60 * 60,
  },
//   jwt: {
//     secret: process.env.JWT_SECRET,
//     maxAge: 2 * 24 * 60 * 60, // 2 days
//   },
});
