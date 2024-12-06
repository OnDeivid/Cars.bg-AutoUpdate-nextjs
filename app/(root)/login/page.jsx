import { auth, signIn } from '@/auth'

import { Authenticated } from '@/app/middleware'
import ProviderOption from '@/app/components/ProviderOption'
import { redirect } from 'next/dist/server/api-utils';

export default async function page() {
    const session = await auth();
    await Authenticated()
    
    return (
        <section className="flex pt-20">
            <div className="flex flex-col items-center justify-center mx-auto md:h-full px-4 lg:py-0 mt-0">
                <div className="w-[115%] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  border-custom-input-color">
                    <div className="p-6 space-y-4  md:space-y-6 sm:p-8 ">
                        <h1 className="text-xl font-bold  leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Избери с какво да влезеш
                        </h1>
                        <div className="space-y-4 md:space-y-6">

                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gmail</label>
                            <div>
                                <form className='bg-green-600' action={async () => {
                                    'use server'
                                    await signIn('google', { redirectTo: '/GetStarted' })
                                }}>
                                    <ProviderOption providerName={'Google'} />

                                </form>
                            </div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Facebook</label>

                            <form className='bg-orange-300' action={async () => {
                                'use server'
                                await signIn('facebook', { redirectTo: '/GetStarted' })
                            }}>
                                <ProviderOption providerName={'Facebook'} />
                            </form>

                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">GitHub</label>
                            <form className='bg-green-600' action={async () => {
                                'use server'
                                await signIn('github', { redirectTo: '/GetStarted' })

                            }}>
                                <ProviderOption providerName={'Github'} />
                            </form>

                            {/* <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Gmail</label>
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
