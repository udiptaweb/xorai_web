'use client';
import Image from 'next/image'



export default function Page() {

    return (
        <div className="isolate py-12 flex flex-col items-center justify-between">

            <div className="mx-auto max-w-2xl text-center p-5">
                <p className="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">About Us</p>
            </div>
            <div className="p-5 mb-32 lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
                <p className="mt-6 text-lg text-slate-500 dark:text-slate-300 text-justify">
                    <b className='text-white'>Xorai Tech Lab</b> stands as a beacon where innovation converges with reliability, poised at the intersection of tomorrow's possibilities. Born from a vision to revolutionize the digital sphere, we transcend the conventional notion of a mere software development entity. We are the trailblazers, the architects of tomorrow's landscapes, and the steadfast visionaries determined to redefine the limits of technological potential.
                    <p className="mt-6 text-lg text-slate-500 dark:text-slate-300 text-justify">

                        In our essence lies the embodiment of our name, <b className='text-white'>Xorai</b>, a fusion of traditional wisdom and futuristic foresight. This moniker encapsulates our dedication to crafting solutions that not only push the boundaries of innovation but also stand as pillars of sustainability and forward-looking design.
                    </p>
                    <p className="mt-6 text-lg text-slate-500 dark:text-slate-300 text-justify">

                        At <b className='text-white'>Xorai Tech Lab</b>, we do not merely write code; we orchestrate symphonies of innovation. Each line of code we craft is imbued with the spirit of progress, the determination to pioneer new frontiers, and the unwavering commitment to excellence. Our journey is not just about building software; it's about sculpting a future where technology serves as a catalyst for positive change.
                    </p>
                    <p className="mt-6 text-lg text-slate-500 dark:text-slate-300 text-justify">

                        With every project we undertake, we strive to leave an indelible mark on the digital landscape, propelling industries forward and empowering businesses to thrive in an ever-evolving world. Our ethos is rooted in collaboration, creativity, and the relentless pursuit of perfection, ensuring that each solution we deliver is not just a product but a testament to our unwavering dedication to excellence.
                    </p>
                    <p className="mt-6 text-lg text-slate-500 dark:text-slate-300 text-justify">
                        Welcome to <b className='text-white'>Xorai Tech Lab</b>, where innovation transcends boundaries, and the future is forged with every line of code we write.
                    </p>
                </p>
            </div>
        </div>);
}