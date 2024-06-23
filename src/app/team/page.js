'use client';
import Image from 'next/image'



export default function Page() {

    return (
        <div className="isolate py-12 flex flex-col items-center justify-between">

            <div className="mx-auto max-w-2xl text-center p-5">
                <p className="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">Board of Directors</p>
            </div>
            <div className="mx-auto mt-5 max-w-4xl sm:mt-5 grid grid:cols-1 sm:grid-cols-3 gap-3 p-5 sm:p-0">
                <div className="bg-white shadow-md rounded-md flex flex-col justify-between">
                    <div className="m-2 flex justify-center items-center">
                        <Image
                            src="/assets/udipta.jpg"
                            width={500}
                            height={500}
                            className="w-full"
                            alt="Picture of the CEO"
                        />
                    </div>
                    <div className="mt-2 p-2 ">
                        <div className="flex justify-between items-center">
                            <h5 className="text-black text-lg font-bold">Udipta Gogoi</h5>
                            <a target="_blank" href="https://oiirabot.com" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor"   strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                                <span class="sr-only"></span>
                            </a>
                        </div>
                        <p className="text-gray-700">Co-Founder</p>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-md flex flex-col justify-between">
                    <div className="m-2 flex justify-center items-center p-5">
                        <Image
                            src="/assets/oiirabot_logo.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="mt-2 p-2 ">
                        <div className="flex justify-between items-center">
                            <h5 className="text-black text-lg font-bold">OIIRABOT</h5>
                            <a target="_blank" href="https://oiirabot.com" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor"   strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                                <span class="sr-only">Icon description</span>
                            </a>
                        </div>
                        <p className="text-gray-700">Ecommerce Website</p>
                    </div>
                </div>
            </div>
        </div>);
}