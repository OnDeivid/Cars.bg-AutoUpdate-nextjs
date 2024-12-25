//  import NextAuth from "next-auth"
//  import GitHub from "next-auth/providers/github"
//  import Google from "next-auth/providers/google"
//  import Facebook from 'next-auth/providers/facebook'


import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  session: { strategy: 'jwt' },
    callbacks: {
      async jwt({ token, user }) {

        try{
        if (user) {
          const userDataCars = await prisma.carsData.findUnique({
            where: { userEmail: user.email },
            select: {
              userId: true,
              userEmail: true,
              carsEmail: true,
            },
          });

          token.userDataCars = userDataCars || {};
        }
      }catch(err)
      {
        console.log(err)
      }
        return token;
      },
      async session({ session, token }) {
        session.user.userDataCars = token.userDataCars || {};
        return session;
      },
    }
})
export const maxDuration = 60

//  export const { handlers, signIn, signOut, auth } = NextAuth({
//    adapter: PrismaAdapter(prisma),
//    providers: [
    
//       GitHub({
//         clientId: process.env.AUTH_GITHUB_ID,
//         clientSecret: process.env.AUTH_GITHUB_SECRET,
//       }),
//       Google({
//         clientId: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       }),
//       Facebook({
//         clientId: process.env.AUTH_FACEBOOK_ID,
//         clientSecret: process.env.AUTH_FACEBOOK_SECRET
//       })
//    ],
//     session: { strategy: 'jwt' },
//     callbacks: {
//       async jwt({ token, user }) {

//         if (user) {
//           const userDataCars = await prisma.carsData.findUnique({
//             where: { userEmail: user.email },
//             select: {
//               userId: true,
//               userEmail: true,
//               carsEmail: true,
//             },
//           });

//           token.userDataCars = userDataCars || {};
//         }

//         return token;
//       },
//       async session({ session, token }) {
//         session.user.userDataCars = token.userDataCars || {};
//         return session;
//       },
//     }

//  })