import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
 
export const { 
  auth, 
  handlers, 
  signIn, 
  signOut 
  } = NextAuth({
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
})