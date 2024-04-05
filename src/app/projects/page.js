'use client';
import axios from "axios";
import Image from 'next/image'

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.headers.common['Accept'] = 'application/json';

async function csrfCookieInitiate() {
    await axios.get('http://xorai_api.dev/sanctum/csrf-cookie').then(async response => {
        console.log(response);
        await axios.post('http://xorai_api.dev/api/store-site-data', {
            'data': 'test'
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    });

}


export default function Page() {

    return (
        <div className="isolate py-12">

            <div className="mx-auto max-w-2xl text-center p-5">
                <p className="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">Our Recent Projects</p>
            </div>

            <div className="mx-auto mt-5 max-w-4xl sm:mt-5 grid grid-cols-3 gap-3">
                <div className="bg-white shadow-md rounded-md flex flex-col justify-between">
                    <div className="m-2 flex justify-center items-center">
                        <Image
                            src="/assets/owl_mcq_logo.png"
                            width={500}
                            height={500}
                            className="w-1/2"
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="mt-2 p-2 ">
                        <div className="flex justify-between items-center">
                            <h5 className="text-black text-lg font-bold">OWL MCQ</h5>
                            <a target="_blank" href="https://oiirabot.com" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                                <span class="sr-only">Icon description</span>
                            </a>
                        </div>
                        <p className="text-gray-700">Online MCQ Test Portal</p>
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
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                                <span class="sr-only">Icon description</span>
                            </a>
                        </div>
                        <p className="text-gray-700">Ecommerce Website</p>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-md flex flex-col justify-between">
                    <div className="m-2 flex justify-center items-center p-5">
                        <Image
                            src="/assets/bionest_logo.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="mt-2 p-2 ">
                        <div className="flex justify-between items-center">
                            <h5 className="text-black text-lg font-bold">BIONEST IIT-GUWAHATI</h5>
                            <a target="_blank" href="https://www.iitg.ac.in/bionest/kickstart" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                                <span class="sr-only">Icon description</span>
                            </a>
                        </div>
                        <p className="text-gray-700">Startup Conclave Website</p>
                    </div>
                </div>
            </div>
        </div>);
}