import { auth } from "@/auth";
import Link from "next/link";


export default async function Main() {
  const session = await auth();
  console.log(session)
  return (
    <section className="text-gray-6200 body-font">
      <div className="max-w-2xl pt-52 pb-24 mx-auto">
        <h1 className="text-center font-bold text-white mb-6 text-4xl">
          Премахни скучните повтарящи се действия с нас
        </h1>
        <br></br>
        <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
          ние ще опростим деня ти
          <br />
          нека свършим скучните неща вместо теб
        </h2>
        <br></br>

        <div className="ml-6 text-center">
          <a
            className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline" href="/">
            <div className="flex text-lg">
              <span className="justify-center">Прочети за нас </span>
            </div>
          </a>
          
          {session?.user ? (null) :
            (<Link className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-1 bg-gradient-to-r from-blue-500 to-blue-800 px-16 text-md md:mt-0 focus:shadow-outline" href={'/login'} >
              <div className="flex text-lg" href='/login'>
                <span className="justify-center">Влез</span>
              </div>
            </Link>)
          }
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto">
        <div className="h-full w-full bg-white">
          {/* <Pricing /> */}
        </div>
      </div>

    </section>
  );
}
