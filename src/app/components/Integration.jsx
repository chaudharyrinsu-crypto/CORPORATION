'use client'
import Link from 'next/link'
import React from 'react'
import { logos } from '../data/home/integrationLogos'

const Integration = () => {
    return (
        <>
            <section className='bg-[#FCFCFA] py-15 font-hubot lg:px-0 px-5'>
                <div className='lg:max-w-[1100px] mx-auto  bg-white border border-[#D9D9D8] h-auto 2md:h-[250px] rounded-2xl flex 2md:flex-row flex-col justify-between overflow-hidden'>
                    <div className='flex flex-col justify-center 2md:order-1 order-2 gap-5 w-1/2 lg:pr-0 pr-10 pl-20'>
                        <h3 className='text-2xl font-semibold leading-7.5'>Works with the tools you already use. 2,000+ integrations.</h3>
                        <Link className='underline decoration-2 decoration-[#FF4800] underline-offset-5 hover:underline-offset-2 duration-300 font-semibold' href={``}>See all app integrations</Link>
                    </div>
                    <div className='overflow-hidden bg-white 2md:h-auto 2md:order-2 order-1 h-[250px] w-full 2md:w-1/2 relative'>
                        <div className='space-y-15 2md:absolute  overflow-hidden -top-2 -left-10  rotate-[15deg] '>
                            <div className='grid grid-cols-5 gap-10 '>
                                {logos.first?.map((logo, index) => (
                                    <img className='h-[80px]' key={index} src={logo} alt="logo" />
                                ))}
                            </div>
                            <div className='grid grid-cols-5 gap-10'>
                                {logos.second?.map((logo, index) => (
                                    <img className='h-[80px]' key={index} src={logo} alt="logo" />
                                ))}
                            </div>
                            <div className='grid grid-cols-5 gap-10'>
                                {logos.first?.map((logo, index) => (
                                    <img className='h-[80px]' key={index} src={logo} alt="logo" />
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Integration
