import { auth, signIn, signOut } from '@/auth'
import Image from 'next/image'
import { permanentRedirect, redirect } from 'next/navigation'
import React from 'react'


export default async function page() {
    const session = await auth()
    return (
        <section className="dark:bg-black">
            <div className="flex flex-col items-center justify-center px-6 py-0 mx-auto md:h-screen lg:py-0 mt-14">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Flowbite
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-black dark:border-gray-100">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Избери с какво да влезеш
                        </h1>
                        <div className="space-y-4 md:space-y-6">

                            <div>
                                <label htmlFor="gmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gmail</label>
                                <button id="gmail" className="flex justify-between bg-slate-50 h-full p-2 w-full">
                                    <div >
                                        <p className='text-xl text-gray-700 font-bold mt-1 ml-14'>Влез с Google</p>
                                    </div>
                                    <Image src='https://cdn-icons-png.flaticon.com/128/5968/5968534.png' height={35} width={35} alt='options' />
                                </button>
                            </div>

                            <form action={async () => {
                                'use server'

                                await signOut({ redirectTo: '/' })
                                redirect('/home')
                            }}>
                                <label htmlFor="gmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Facebook</label>
                                <button id="gmail" className="flex justify-between bg-slate-50 h-full p-2 w-full">

                                    <div>
                                        <p className='text-xl text-gray-700 font-bold mt-1 ml-14'>Влез с Facebook</p>
                                    </div>
                                    <Image src='https://cdn-icons-png.flaticon.com/128/15047/15047435.png' height={35} width={35} alt='options' />
                                </button>
                            </form>

                            <form action={async () => {
                                'use server'
                                await signIn('github', { redirectTo: '/' })


                            }}>
                                <label htmlFor="gmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">GitHub</label>
                                <button id="gmail" className="flex justify-between bg-slate-50 h-full p-2 w-full">
                                    <div >
                                        <p className='text-xl text-gray-700 font-bold mt-1 ml-14'>Влез с GitHub</p>
                                    </div>
                                    <Image src='https://cdn-icons-png.flaticon.com/128/2111/2111432.png' height={35} width={35} alt='options' />

                                </button>
                            </form>

                            {/* <div>
                                <label htmlFor="gmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Gmail</label>
                                <button id="gmail" className="flex justify-around bg-orange-400 h-full p-4 w-full">

                                    <div className='justify-evenly'>
                                        <p className='text-2xl text-white font-bold  mt-1'>Влез с Google</p>
                                    </div>
                                    <Image src='https://w7.pngwing.com/pngs/712/520/png-transparent-google-mail-gmail-logo-icon-thumbnail.png' height={45} width={45} alt='options' />
                                </button>
                            </div> */}

                            {/* <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div> */}
                            <br></br>

                            {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                            </p> */}
                            <br></br>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
