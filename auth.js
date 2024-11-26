import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Facebook from 'next-auth/providers/facebook'

import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prismas"


export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Facebook({
      clientId:process.env.AUTH_FACEBOOK_ID,
      clientSecret:process.env.AUTH_FACEBOOK_SECRET
    })
  ],

})