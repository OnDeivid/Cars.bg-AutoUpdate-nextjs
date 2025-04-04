'use server'
import FormInputsValue from '@/app/components/FormInputsValue';
import GetStartedLoginButton from '@/app/components/GetStartedLoginButton';
import formValidation from '@/app/utils/formValidation';

import { endpointURL } from '@/app/CONST';
import { CarsEmailAuthenticated, Unauthenticated } from '@/app/middleware';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function page() {

  await Unauthenticated()
  await CarsEmailAuthenticated()
  let session = await auth();

  async function handleSubmit(formData) {
    'use server';

    const email = formData.get('carsEmail');
    const password = formData.get('password');
    const phoneNumber = formData.get('phoneNumber')
    const confirmPassword = formData.get('confirmPassword');

    const formValue = {
      userEmail: session?.user?.email,
      carsEmail: email,
      phoneNumber,
      password: password,
      confirmPassword: confirmPassword,
    };

    if (formValidation(formValue)) {
      console.log('validation Error')
      return

    } else {
      const response = await fetch(`${endpointURL}/pages/api/CarsData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValue),
      });
      // await signOut({ redirectTo: endpoints.login });
      redirect('/')
    }
  }

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-16 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow dark:border sm:max-w-md mt-0 xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6  sm:p-8 ">

            <p className='text-red-600 text-center'>
              <span className='text-xl'>Предупреждение!!!</span>
              <br />
              Моля, имайте предвид, че ако Името или Паролата, с които влизате в cars.bg, се различават от тези, които ще въведете тук, автомобилите няма да бъдат актуализирани
            </p>

            <form action={handleSubmit} className="space-y-4 md:space-y-6">

              <FormInputsValue />

              <GetStartedLoginButton />

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
