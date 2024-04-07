'use client';
import Image from 'next/image'



export default function Page() {

    return (
        <div className="isolate py-12 flex flex-col items-center justify-between">

            <div className="mx-auto max-w-2xl text-center p-5">
                <p className="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">About Us</p>
            </div>
            <div className="p-5 mb-32 lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
                <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 text-justify">
                    At <b className='text-white'>Xorai TechLab</b>, our mission is simple yet ambitious: to develop innovative and reliable software solutions that solve real-world problems, drive growth, and create value for our clients and society at large. We leverage the latest in technology, coupled with rigorous research and a customer-centric approach, to deliver products and services that stand the test of time.
                </p>
            </div>
        </div>);
}