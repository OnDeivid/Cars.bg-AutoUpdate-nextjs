import { auth, signOut } from '@/auth'
import formValidation from '../utils/formValidation';
import SettingsButtonSubmit from '../components/SettingsButtonSubmit';
import { CarsAuthenticated, Unauthenticated } from '../middleware';
import FormInputsValue from '../components/FormInputsValue';
import { redirect } from 'next/navigation';
import { endpointURL } from '../CONST';

export default async function page() {

    const session = await auth()
    await Unauthenticated()
    await CarsAuthenticated()

    async function handleSubmit(formData) {
        'use server';
        const email = formData.get('carsEmail');
        const phoneNumber = formData.get('phoneNumber')
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');

        const formValue = {
            userEmail: session?.user?.email,
            carsEmail: email,
            phoneNumber,
            password: password,
            confirmPassword: confirmPassword,
        };

        if (formValidation(formValue)) {
            return
        }

        const response = await fetch(`${endpointURL}/pages/api/UserUpdate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValue),
        });

        redirect('/')

        // <FormInputsValue userEmail_B={session?.user?.email} carsEmail_B={session?.user?.userCarsData?.carsEmail} />
    }
    return (
        <>
            <div className="mx-4 min-h-screen max-w-screen-xl text-custom-light-gray sm:mx-8 xl:mx-auto">
                <h2 className="relative py-6 text-xl font-semibold text-center"></h2>
                <h1 className='text-3xl text-center -mt-4 text-white py-3 sm:text-xl md:text-4xl lg:text-4xl mb-4 xl:text-4xl'>Промени Потребителското Име или Паролата</h1>

                <div className="col-span-8 overflow-hidden rounded-xl mx-auto bg-white py-20 sm:px-8 sm:shadow    sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[40%] ">


                    <form action={handleSubmit} className="max-w-sm mx-auto">
                        {/* <div className="mb-5">
                            
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Потребителско Име</label>
                            <input type="username" id="carsEmail" name='carsEmail' className="bg-gray-50 border border-gray-300  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:text-white" defaultValue={session?.user?.userDataCars?.carsEmail} required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Парола</label>
                            <input type="password" id="password" name='password' className="bg-gray-50 border border-gray-300  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:text-white" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Потвърди Паролата</label>
                            <input type="password" id="confirmPassword" name='confirmPassword' className="bg-gray-50 border border-gray-300  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:text-white" required />
                        </div>
                        <div className="flex items-start mb-5">
                            <br />
                        </div> */}

                        <FormInputsValue userEmail_B={session?.user?.email} phoneNumber_B={session?.user?.userDataCars.phoneNumber} carsEmail_B={session?.user?.userDataCars?.carsEmail} />
                        {/* user_phoneNumber={session?.user?.userDataCars.phoneNumber} */}

                        <SettingsButtonSubmit />

                    </form>


                </div>
            </div>
        </>
    )
}
