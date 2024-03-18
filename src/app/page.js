'use client'
import { useState } from 'react';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div class="bg-black text-white sticky top-0 z-50">
      <nav className="w-full">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <div className="flex flex-shrink-0 items-center">
                {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"> */}
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About Us</a>
                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">

            <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
          </div>
        </div>
      </nav>
      </div>
      <main className="flex flex-col items-center justify-between">
        <div className="relative min-h-96 flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <span className="flex items-baseline gap-x-1 "> <h1 className="text-5xl sm:text-9xl tracking-wide"> Xorai </h1> <span className="tracking-wider">TechLab</span> </span>
        </div>
        <div className="p-5 mb-32 lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
          <p className="indent-5 mt-6 text-lg text-slate-600 dark:text-slate-400 text-justify">
            Welcome to Xorai TechLab, where innovation meets reliability at the crossroads of the future. Established with a vision to transform the digital landscape, we are more than just a software development company. We are pioneers, innovators, and relentless dreamers committed to pushing the boundaries of what is possible with technology. Our name, Xorai, symbolizes the harmonious blend of traditional wisdom and futuristic vision, embodying our commitment to creating solutions that are not only cutting-edge but also sustainable and forward-thinking.
          </p>
          <p className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">Our Mission</p>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 text-justify">
            At Xorai TechLab, our mission is simple yet ambitious: to develop innovative and reliable software solutions that solve real-world problems, drive growth, and create value for our clients and society at large. We leverage the latest in technology, coupled with rigorous research and a customer-centric approach, to deliver products and services that stand the test of time.
          </p>
          <p className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">Our Vision</p>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 text-justify">
            We envision a world where technology is seamlessly integrated into every aspect of life, enhancing human capabilities and solving complex challenges with ease and efficiency. Our goal is to be at the forefront of this technological revolution, leading the charge with groundbreaking software solutions that are not only innovative but also ethical and sustainable.
          </p>
        </div>
      </main>
    </div>
  );
}
