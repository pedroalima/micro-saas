import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { prisma } from "../database";
 
export const { 
  auth,
  handlers: { GET, POST },
  signIn,
  signOut
  } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  pages: {
    signIn: "/auth",
    signOut: "/auth",
    error: "/auth",
    verifyRequest: "/auth",
    newUser: "/app"
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
})