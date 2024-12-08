import React from 'react'

export default function page() {
    return (
        <div>

            <div id="about" className="relative bg-white overflow-hidden mt-16">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100"></polygon>
                        </svg>

                        <div className="pt-1"></div>

                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl ">
                                    За Нас
                                </h2>

                                <p>
                                    В AutoMation, ние сме страстни към опростяването на сложни процеси чрез иновативни решения за автоматизация. Нашата цел е да помогнем на бизнеса и индивидуалните потребители да постигнат повече с по-малко усилия, като използват технологиите за справяне с повторяеми и отнемащи време задачи.
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
            <section className="">
                <div className="py-12 bg-custom-gray">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="lg:text-center">
                            <h2
                                className="font-heading mb-4 text-center bg-custom-white px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                                .............
                            </h2>
                            <p className="font-heading text-center mt-2 text-3xl leading-8 font-semibold tracking-tight text-custom-white sm:text-4xl">
                                Как работи?
                            </p>
                        </div>

                        <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <dt>
                                        <div
                                            className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                                        </div>
                                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-custom-light-gray">Автоматично влизане</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-custom-white">
                                        Автоматизацията използва паролите и имейлите, предоставени от потребителите
                                    </dd>
                                </div>
                                <div className="relative">
                                    <dt>
                                        <div
                                            className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                                        </div>
                                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-custom-light-gray">Извършване на действия</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-custom-white">
                                    След като се логне, автоматизацията може да изпълнява специфични действия на сайта като актуализиране на съдържание.
                                    </dd>
                                </div>
                                <div className="relative">
                                    <dt>
                                        <div
                                            className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />

                                        </div>
                                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-custom-light-gray">Пълно информирано съгласие
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-custom-white">Всички действия, които автоматизацията изпълнява, се основават на предварително получено съгласие от потребителите. Те трябва да бъдат наясно с процеса и какво точно включва автоматизацията, като дават своето изрично съгласие преди да бъде използвана.
                                    </dd>
                                </div>
                            </dl>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
