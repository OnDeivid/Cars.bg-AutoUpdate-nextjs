import Image from 'next/image';
import React from 'react';

export default function Page() {
    return (
        <div className="w-[90%] z-7 mt-14 mx-auto relative" id="default-carousel" data-carousel="slide">
            <h1 className="text-custom-white pb-12 text-center text-2xl sm:text-3xl md:text-6xl">
                Как да се регистрирам
            </h1>

            {[
                {
                    step: "Първа стъпка:",
                    description: 'да влезете в профила си кликнете "Влез"',
                    image: '/1.png',
                },
                {
                    step: "Втора стъпка:",
                    description: "Изберете с какво да влезете",
                    image: '/2.png',
                },
                {
                    step: "Трета стъпка:",
                    description:
                        'Оверете се че Името което ще запишете и Паролата която ще запишете съответства на паролата и името с което влизате в cars.bg"',
                    image: '/3.png',
                },
                {
                    step: "Четвърта стъпка:",
                    description: "Влезте отново със същата опция която избрахте първият път",
                    image: '/4.png',
                },
                {
                    step: "Пета стъпка:",
                    description: 'Кликнете върху "Актуализиране"',
                    image: '/5.png',
                },
            ].map((item, index) => (
                <div
                    key={index}
                    className="relative rounded-lg mt-8"
                >
                    <p className="text-center px-4 pb-10 text-lg sm:text-xl md:text-2xl text-custom-white">
                        <span className="font-bold">{item.step} </span>
                        {item.description}
                    </p>
                    <div className="relative w-full mx-auto">
                        <Image
                            src={item.image}
                            className="w-full h-[auto] object-cover rounded-md"
                            alt={`Step ${index + 1}`}
                        />
                    </div>
                    <div className="bg-white w-full h-1 mx-auto mt-4 p-6"></div>
                </div>
            ))}
        </div>
    );
}
