'use client'
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-black text-white sticky top-0 z-50">
      <nav className="w-full">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg> */}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <div className="flex flex-shrink-0 items-center">
                {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"> */}
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} href="/">
                    Home
                  </Link>
                  <Link className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/about' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} href="/about">
                    About Us
                  </Link>
                  <Link className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/projects' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} href="/projects">
                    Projects
                  </Link>
                  <Link className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/team' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} href="/team">
                    Team
                  </Link>
                  <Link className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/contact' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} href="/contact">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">

            <Link className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} href="/">
              Home
            </Link>
            <Link className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/about' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} href="/about">
              About Us
            </Link>
            <Link className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/projects' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} href="/projects">
              Projects
            </Link>
            <Link className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/team' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} href="/team">
              Team
            </Link>
            <Link className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/contact' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} href="/contact">
              Contact
            </Link>          </div>
        </div>
      </nav>
    </div>
  );
}