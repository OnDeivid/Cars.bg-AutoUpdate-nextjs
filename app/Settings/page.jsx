'use server'

import { auth, signOut } from '@/auth'
import formValidation from '../utils/formValidation';
import { endpoints } from '../CONST';
import SettingsButtonSubmit from '../components/SettingsButtonSubmit';

export default async function page() {
    const session = await auth()

    async function handleSubmit(formData) {
        'use server';
        const email = formData.get('carsEmail');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');


        const formValue = {
            userEmail: session?.user?.email,
            carsEmail: email,
            password: password,
            confirmPassword: confirmPassword,
        };

        if (formValidation(formValue)) {
            return
        }

        await fetch('https://automation-eosin.vercel.app/pages/api/UserUpdate', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValue),
        });

        await signOut({ redirectTo: endpoints.login });
    }
    return (
        <>
            <div className="mx-4 min-h-screen max-w-screen-xl text-custom-light-gray sm:mx-8 xl:mx-auto">
                <h2 className="relative py-6 text-xl font-semibold text-center"></h2>
                <h1 className='text-3xl text-center text-white py-3'>Промени Потребителското Име или Паролата</h1>
                <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">

                    <div className="relative my-4 w-56 sm:hidden">
                        <input className="peer hidden" type="checkbox" name="select-1" id="select-1" />
                        <label htmlFor="select-1" className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring">Accounts </label>
                        <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
                            <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">Accounts</li>
                            <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">Team</li>
                            <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">Others</li>
                        </ul>
                    </div>

                    <div className="col-span-2 hidden sm:block">
                        <ul>
                            <li className="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold text-blue-700 transition hover:border-l-blue-700 hover:text-blue-700">Акаунт</li>
                        </ul>
                    </div>

                    <div className="col-span-8 overflow-hidden rounded-xl sm:bg-slate-50 py-20 sm:px-8 sm:shadow">


                        <form action={handleSubmit} className="max-w-sm mx-auto">
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-custom-gray">Потребителско Име</label>
                                <input type="username" id="carsEmail" name='carsEmail' className="bg-gray-50 border border-gray-300  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={session?.user?.userDataCars?.carsEmail} required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-custom-gray">Парола</label>
                                <input type="username" id="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-custom-gray">Потвърди Паролата</label>
                                <input type="username" id="confirmPassword" name='confirmPassword' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="flex items-start mb-5">
                                <br />
                            </div>
                            <button type='submit'>

                                <SettingsButtonSubmit />
                            </button>
                        </form>


                    </div>
                </div>
            </div>
        </>
    )
}
