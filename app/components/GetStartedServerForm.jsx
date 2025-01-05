import { auth, signOut } from '@/auth'
import React from 'react'
import { endpoints, endpointURL } from '../CONST'

export default async function GetStartedServerForm() {
    const session = await auth()

    const handleSubmit = async (formData) => {
        "use server"

        const email = formData.get('carsEmail')
        const password = formData.get('password')
        const confirmPassword = formData.get('confirmPassword')

        const formValue = {
            userEmail: session?.user?.email,
            carsEmail: email,
            password: password,
            confirmPassword: confirmPassword
        }

        await fetch(`${endpointURL}/pages/api/CarsData`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValue),
        })
        await signOut({ redirect: endpoints.login })
    }

    return (
        <div>
            <form action={handleSubmit} className="space-y-4 md:space-y-6">

                <div>
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="username" name="carsEmail" id="carsEmail" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-amber-600 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your Email, Username or Number" required="" />
                </div>

                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-amber-600 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500
   dark:focus:border-blue-500" required="" />
                </div>

                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-amber-600 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500
   dark:focus:border-blue-500" required="" />
                </div>


                <div className="flex items-center justify-between">

                </div>
                <button type="submit" className="w-full dark:border-y-white text-white dark:bg-yellow-600 hover:bg-black transition-all focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 
dark:focus:ring-primary-800">Sign in</button>
                <br>
                </br>

            </form>
        </div>
    )
}
