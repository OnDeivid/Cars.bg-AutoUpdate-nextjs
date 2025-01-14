'use client'
import React from 'react';
import useForm from '../hooks/useForm';


export default function FormInputsValue({ userEmail_B, phoneNumber_B, carsEmail_B }) {
    const { formValue, onChangeValue } = useForm({ carsEmail: carsEmail_B ? carsEmail_B : '', password: '', confirmPassword: '', phoneNumber: phoneNumber_B ? phoneNumber_B : '0' });
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

        if (!formData.phoneNumber || formData.phoneNumber.trim() === "") {
            errors.phoneNumber = "Телефонният номер е задължителен.";
        } else if (!/^(\+359|0)(87|88|89|98|99)[0-9]{7}$/.test(formData.phoneNumber)) {
            errors.phoneNumber = "Моля, въведете валиден български телефонен номер.";
        }

        return errors;
    }

    useFormValidation(formValue)
    console.log(errors)

    return (
        <>
            {userEmail_B ? <h3 className='relative text-gray-800 -top-10'>Email: <span className='text-black font-medium'>{userEmail_B}</span></h3> : null}

            {/* CarsEmail */}
            <div>
                <label
                    htmlFor="carsEmail"
                    className={`block mb-2 text-sm font-medium ${carsEmail_B ? 'text-gray-900' : 'text-white'} ${carsEmail_B ? '' : 'dark:text-gray-200'}`}
                >
                    Името с което влизаш в cars.bg
                </label>
                <input
                    onChange={onChangeValue}
                    type="text"
                    name="carsEmail"
                    id="carsEmail"

                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-custom-white dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"

                    placeholder="Потребителско Име в Cars.bg"
                    value={formValue.carsEmail}

                    required
                />
                <p className="text-red-600 text-center pt-1 text-sm">{errors.carsEmail}</p>
            </div>

            {/* phoneNumber */}
            <div>
                <label
                    htmlFor="phoneNumber"
                    className={`block mb-2 text-sm font-medium text-gray-200 ${phoneNumber_B ? 'dark:text-gray-900' : 'dark:text-white'}`}
                >
                    Телефонен Номер
                </label>
                <input
                    onChange={onChangeValue}
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"

                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-custom-white dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"

                    placeholder="Телефонен Номер"
                    value={formValue.phoneNumber}

                    required
                />
                <p className="text-red-600 text-center pt-1 text-sm">{errors.phoneNumber}</p>
            </div>

            {/* password */}
            <div>
                <label
                    htmlFor="password"
                    className={`block mb-2 text-sm font-medium text-gray-200 ${carsEmail_B ? 'dark:text-gray-900' : 'dark:text-white'}`}
                >
                    Паролата с която влизаш в cars.bg
                </label>
                <input
                    onChange={onChangeValue}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-custom-white dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"

                    value={formValue.password}
                    required
                />
                <p className='text-red-600 text-center pt-1 text-sm'>{errors.password}</p>
            </div>

            {/* confirmPassword */}
            <div>
                <label
                    htmlFor="confirmPassword"
                    className={`block mb-2 text-sm font-medium text-gray-200 ${carsEmail_B ? 'dark:text-gray-900' : 'dark:text-white'}`}
                >
                    Потвърди паролата
                </label>
                <input
                    onChange={onChangeValue}
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-custom-white dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"

                    value={formValue.confirmPassword}
                    required
                />
                <p className="text-red-600 text-center pt-1 text-sm">{errors.confirmPassword}</p>
            </div>
        </>
    );
}
