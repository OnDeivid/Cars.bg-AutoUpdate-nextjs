import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Facebook from 'next-auth/providers/facebook'

import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prismas"


export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
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
      clientId: process.env.AUTH_FACEBOOK_ID,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET
    })
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {

      if (user) {
        const userDataCars = await prisma.carsData.findUnique({
          where: { userEmail: user.email },
        });

        // Add the data to the JWT
        token.userDataCars = userDataCars || {};
      }

      return token;
    },
    async session({ session, token }) {
      // Add the JWT data to the session object
      session.user.userDataCars = token.userDataCars || {};
      return session;
    },
  }

})