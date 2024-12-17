import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    id: string;
    isAdmin: boolean;
    token: string;
    username: string;
    email: string;
  }
  interface Session {
    user: {
      id: string;
      username: string;
      email: string;
    };
  }
  interface JWT {
    id: string;
    email: string;
    username: string;
    isAdmin: boolean;
    token: string;
    expires: number;
  }
}
