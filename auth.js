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

      return token;
    },
    async session({ session, token }) {
      // const response= await fetch('https://your-app.vercel.app/pages/api/UserLogin', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({userEmail:session.user.email}),
      // });

      //   const userDataCars = await response.json();
        // session.user.userDataCars=userDataCars||{itsNOTaddingNow:'we sad!'}
        console.log(userDataCars)
      
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