import Image from 'next/image'
import React from 'react'

export default function ProviderOption({ providerName }) {

    const images = {
        Facebook: 'https://cdn-icons-png.freepik.com/256/733/733547.png?ga=GA1.1.2000314948.1731956606&semt=ais_hybrid',
        Github: 'https://cdn-icons-png.flaticon.com/128/2111/2111432.png',
        Google: 'https://cdn-icons-png.freepik.com/256/281/281764.png?ga=GA1.1.2000314948.1731956606'
    }

    return (
        <button id="facebook" className="flex duration-700 justify-between bg-slate-50 h-full p-2 w-full hover:bg-custom-input-color active:bg-violet-95000 focus:outline-none focus:ring focus:bg-slate-400 focus:ring-orange-400">
            <div>
                <p className='text-xl text-gray-700 ml-[3dvw] font-bold mt-1 '>Влез с {providerName}</p>
            </div>
            <Image src={images[providerName]} height={35} width={35} alt='options' />
        </button>
    )
}
