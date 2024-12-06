'use server'
import { endpoints } from '@/app/CONST';
import { CarsAuthenticated } from '@/app/middleware';
import { auth, signIn, signOut } from '@/auth';


export default async function page() {
  let session = await auth();

  await CarsAuthenticated();
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

    await fetch('http://localhost:3000/pages/api/CarsData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValue),
    });

    await signOut({ redirectTo: endpoints.login });
  }

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-16 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow dark:border sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <br />
            <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Въведи паролата и името с което влизаш в cars.bg
            </h1>

            <form action={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="text"
                  name="carsEmail"
                  id="carsEmail"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-custom-white dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Email, Username or Number"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-custom-white dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-custom-white dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />

              </div>
              <br />

              <button
                type="submit"
                className="w-full dark:border-y-white text-gray dark:bg-custom-white hover:bg-custom-input-color transition-all focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
