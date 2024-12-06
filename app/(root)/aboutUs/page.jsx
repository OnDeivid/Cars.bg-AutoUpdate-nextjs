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
                                    About Us
                                </h2>

                                <p>
                                    At AutoMation, we are passionate about simplifying complex processes through innovative automation solutions. Our goal is to help businesses and individuals achieve more with less effort by leveraging technology to handle repetitive and time-consuming tasks.
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
                                className="font-heading mb-4 bg-custom-white px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                                Why choose us?
                            </h2>
                            <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-custom-white sm:text-4xl">
                                We know tech, we know finance. We are fintech experts.
                            </p>
                            <p className="mt-4 max-w-2xl text-lg text-custom-light-gray lg:mx-auto">
                                We know how to handle taxation for all the
                                countried we operate in. We care for our customers and help them manage cashflows.
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
                                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-custom-light-gray">Powerful API</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-custom-white">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                                        blanditiis ratione.
                                    </dd>
                                </div>
                                <div className="relative">
                                    <dt>
                                        <div
                                            className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                                        </div>
                                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-custom-light-gray">Easy to integrate
                                            SDK
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-custom-white"> Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                                        blanditiis ratione.
                                    </dd>
                                </div>
                                <div className="relative">
                                    <dt>
                                        <div
                                            className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />

                                        </div>
                                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-custom-light-gray">Low Transaction Cost
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-custom-white"> Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                                        blanditiis ratione.
                                    </dd>
                                </div>
                                <div className="relative">
                                    <dt>
                                        <div
                                            className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />

                                        </div>
                                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-custom-light-gray">Powerful Dashboard
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-custom-white"> Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                                        blanditiis ratione.
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
