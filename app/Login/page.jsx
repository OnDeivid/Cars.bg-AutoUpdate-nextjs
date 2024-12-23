import { signIn, signOut } from "@/auth"
import ProviderOption from "../components/ProviderOption"



export default async function page() {
    
    return (
        <section className="flex pt-20">
            <div className="flex flex-col items-center justify-center mx-auto md:h-full px-4 lg:py-0 mt-0">
                <div className="w-[115%] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  border-custom-input-color">
                    <div className="p-6 space-y-4  md:space-y-6 sm:p-8 ">
                        <h1 className="text-xl font-bold  leading-tight text-center tracking-tight text-custom-white md:text-2xl dark:text-white">
                            Избери с какво да влезеш
                        </h1>
                        <div className="space-y-4 md:space-y-6">

                            <label className="block mb-2 text-sm font-medium text-custom-white dark:text-white">Gmail</label>
                            <div>
                                <form className='bg-green-600' action={async () => {
                                    'use server'
                                    await signIn('google', { redirectTo: '/GetStarted' })
                                }}>
                                    <ProviderOption providerName={'Google'} />

                                </form>
                            </div>
                            <label className="block mb-2 text-sm font-medium text-custom-white dark:text-white">Facebook</label>

                            <form className='bg-orange-300' action={async () => {
                                'use server'
                                await signIn('facebook', { redirectTo: '/GetStarted' })
                            }}>
                                <ProviderOption providerName={'Facebook'} />
                            </form>

                            <label className="block mb-2 text-sm font-medium text-custom-white dark:text-white">GitHub</label>
                            <form className='bg-green-600' action={async () => {
                                'use server'
                                await signIn('github', { redirectTo: '/' })

                            }}>
                                {/* <ProviderOption providerName={'Github'} /> */}
                                <button type="submit">click here to log in with github</button>
                            </form>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
