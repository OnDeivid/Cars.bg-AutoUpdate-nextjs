//  import NextAuth from "next-auth"
//  import GitHub from "next-auth/providers/github"
//  import Google from "next-auth/providers/google"
//  import Facebook from 'next-auth/providers/facebook'

import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prismas";

async function fetchData(userEmail)
{
  const data= await prisma.carsData.findFirst({
    where: { userEmail: userEmail },
    select: {
        userId: true,
    },
});
return data || {}
}
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter:PrismaAdapter(prisma),
  providers: [GitHub],
  session: { strategy: 'jwt' },
  callbacks: {

    async session({ session, token }) {
      session.user.userCarsData = await fetchData(session.user.email);
      return session;
    },
  }
})

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