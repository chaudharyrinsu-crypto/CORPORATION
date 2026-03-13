import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <>
            <section className='font-hubot'>
                <div className='h-[520px] relative'>
                    <img className='h-full w-full object-cover sm:block hidden' src="/homeHero.webp" alt="hero" />
                    <div className='w-full h-full absolute top-0 left-0 sm:bg-black/40 bg-[#042729] z-10'></div>
                    <div className='absolute w-full z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:px-0 px-8'>
                        <div className='flex flex-col align-center justify-center gap-5 text-center text-white w-full'>
                            <span className='text-sm uppercase font-medium'>HubSpot Customer Platform</span>
                            <h1 className='text-5xl sm:text-7xl leading-[50px] sm:leading-[80px]'>Where go-to-market
                                <span className='inline-block'>teams go to</span>
                                <span className='pl-4 relative after:[""] after:absolute after:bg-[#FF4800] after:h-2.5 after:w-2.5 after:rounded-full after:bottom-5'>grow
                                    {/* <ul className='absolute top-0 left-0'>
                                        <li className='inline-block relative after:"" after:absolute after:bg-[#FF4800] after:h-2.5 after:w-2.5 after:rounded-full after:bottom-3'>grow</li>
                                        <li className='inline-block relative after:"" after:absolute after:bg-[#FF4800] after:h-2.5 after:w-2.5 after:rounded-full after:bottom-3'>scale</li>
                                        <li className='inline-block relative after:"" after:absolute after:bg-[#FF4800] after:h-2.5 after:w-2.5 after:rounded-full after:bottom-3'>close</li>
                                        <li className='inline-block relative after:"" after:absolute after:bg-[#FF4800] after:h-2.5 after:w-2.5 after:rounded-full after:bottom-3'>retain</li>
                                    </ul> */}
                                </span>
                            </h1>
                            <p className='leading-[30px] font-medium'>Unite marketing, sales, and customer service on one AI-powered
                                <span className='inline sm:block'>customer platform that delivers results fast.</span>
                            </p>
                            <div className='flex sm:flex-row flex-col items-center justify-center gap-4 sm:gap-3 w-full pt-5 font-semibold'>
                                <Link className='bg-[#FF4800] hover:bg-[#C93700] px-10 py-5 rounded-md sm:w-auto w-full block duration-300' href={``}>Get a demo</Link>
                                <Link className='border border-[#FF4800] text-[#FF4800] bg-white hover:bg-[#FCECE6]  px-10 py-5 rounded-md sm:w-auto w-full block duration-300' href={``}>Get started free</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
