'use server'
import Link from "next/link";
import { auth } from "@/auth";


import { endpoints } from "../CONST";

import UpdateButton from "./UpdateButton";
import MyComponent from "./OnInstallApp";

export default async function Main() {
  const session = await auth();
  const carsEmail = session?.user?.userDataCars?.carsEmail;


  return (
    <section className="text-gray-600  bg-custom-gray h-[100%] w-full body-font">
      <div className="max-w-6xl mb-2 sm:pt-40 md:pt-48 lg:pt-48 xl:pt-48 border-custom-input-color rounded-3xl sm:-mt-11 md:mt-14 lg:-mt-1 xl:-mt-1 border-y-2 w-full bg-red pb-24 mx-auto">
        <h1 className="text-center font-bold text-custom-white mb-2 sm:-mt-14 md:-mt-6 lg:-mt-3 xl:mt-1 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl">
          Премахни скучните повтарящи се действия с нас
        </h1>
        <br />
        {/* <MyComponent /> */}

        <h2 className="text-xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-600 text-center">
          ние ще опростим деня ти
          нека свършим скучните неща вместо теб
        </h2>
        <br></br>

        <div className="ml-0 text-center">
          {/* {carsEmail ? (
            <div className="-mt-10">
              <UpdateButton />
            </div>
          ) : session?.user ? (
            <>
              <Link
                className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
                href={endpoints.guide}>
                <div className="flex text-lg">
                  <span className="justify-center">Ръководство</span>
                </div>
              </Link>
              <Link
                className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition-colors duration-700 ease-in-out transform ml-1 bg-blue-600 px-16 text-md md:mt-0 focus:shadow-outline focus:border focus:border-blue-500 hover:bg-custom-input-color"
                href={endpoints.getStarted}
              >
                <div className="flex text-lg">
                  <span className="justify-center">Започни сега</span>
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link
                className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-white px-7 text-md -mt-11 hover:text-black hover:bg-white focus:shadow-outline"
                href={endpoints.aboutUs}>
                <div className="flex text-lg">
                  <span className="justify-center">Прочети за нас </span>
                </div>
              </Link>
              <Link
                className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition-colors duration-700 ease-in-out transform ml-1 bg-blue-700 px-16 text-md md:mt-0 focus:shadow-outline focus:border focus:border-blue-500 hover:bg-custom-input-color"
                href={endpoints.login}
              >
                <div className="flex text-lg">
                  <span className="justify-center">Влез</span>
                </div>
              </Link>
            </>
          )} */}

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
