'use client'
import React from 'react';
import useForm from '../hooks/useForm';


export default function FormInputsValue({ userEmail_B, carsEmail_B }) {
    const { formValue, onChangeValue } = useForm({ carsEmail: carsEmail_B ? carsEmail_B : '', password: '', confirmPassword: '' });
    const errors = {};

    function useFormValidation(formData) {
        if (!formData?.carsEmail || formData?.carsEmail.trim() === "") {
            errors.carsEmail = "Потребителското име е задължително.";
        }
        if (!formData.password || formData.password.length < 8) {
            errors.password = "Паролата трябва да е поне 8 символа.";
        } else if (!/[A-Za-z]/.test(formData.password)) {
            errors.password = "Паролата трябва да съдържа поне една буква.";
        } else if (!/[0-9]/.test(formData.password)) {
            errors.password = "Паролата трябва да съдържа поне една цифра.";
        }


        if (formData.confirmPassword !== formData.password) {
            errors.confirmPassword = "Паролите не съвпадат.";
        }

        return errors;
    }

    useFormValidation(formValue);
    return (
        <>
            {userEmail_B ? <h3 className='relative text-gray-800 -top-10'>Email: <span className='text-black font-medium'>{userEmail_B}</span></h3> : null}

            <div>
                <label
                    htmlFor="carsEmail"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                >
                    Името с което влизаш в cars.bg
                </label>
                <input
                    onChange={onChangeValue}
                    type="text"
                    name="carsEmail"
                    id="carsEmail"

                    className={!userEmail_B ? "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-custom-white dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" :
                        "bg-gray-50 border border-gray-300  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:text-white"
                    }
                    placeholder="Your Cars.bg Username"
                    value={formValue.carsEmail}

                    required
                />
                <p className="text-red-600 text-center pt-1 text-sm">{errors.carsEmail}</p>
            </div>

            <div>
                <label
                    htmlFor="password"
                    className={`block mb-2 text-sm font-medium text-gray-900 ${carsEmail_B ? 'dark:text-gray-900' : 'dark:text-white'}`}
                >
                    Паролата с която влизаш в cars.bg
                </label>
                <input
                    onChange={onChangeValue}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className={!userEmail_B ? "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-custom-white dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" :
                        "bg-gray-50 border border-gray-300  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:text-white"
                    }
                    value={formValue.password}
                    required
                />
                <p className='text-red-600 text-center pt-1 text-sm'>{errors.password}</p>
            </div>

            <div>
                <label
                    htmlFor="confirmPassword"
                    className={`block mb-2 text-sm font-medium text-gray-900 ${carsEmail_B ? 'dark:text-gray-900' : 'dark:text-white'}`}
                >
                    Потвърди паролата с която влизаш в cars.bg
                </label>
                <input
                    onChange={onChangeValue}
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="••••••••"
                    className={!userEmail_B ? "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-custom-white dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" :
                        "bg-gray-50 border border-gray-300  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:text-white"
                    }
                    value={formValue.confirmPassword}
                    required
                />
                <p className="text-red-600 text-center pt-1 text-sm">{errors.confirmPassword}</p>
            </div>
        </>
    );
}
