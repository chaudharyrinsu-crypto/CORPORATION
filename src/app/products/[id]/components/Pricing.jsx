
'use client'
import Link from 'next/link';
import React from 'react'
import { GoCheck } from "react-icons/go";

const Pricing = ({ product }) => {
    return (
        <>
            <section className='bg-[#F8F5EE] font-hubot sm:py-20 py-15 lg:py-20 lg:px-0 px-8'>
                <div className=' lg:max-w-[1100px] mx-auto'>
                    <div className='text-center space-y-4 sm:space-y-5 px-5'>
                        <h2 className='lg:text-[40px] text-[32px] font-semibold leading-10 sm:leading-12'>Grow Without Limits: {product.name} <span className='2md:block inline'>Pricing</span></h2>
                        <p>Marketing software that scales with you.</p>
                    </div>
                    <div className='sm:grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 py-5 sm:justify-between flex flex-col items-center justify-center gap-6 lg:gap-4 lg:px-0 2md:px-50 md:px-20 sm:px-10 px-15'>
                        {product?.pricing?.map((item, index) => (
                            <div key={index} className='bg-white pt-6 px-6 sm:pb-25 pb-10 rounded-xl border border-[#D9D9D8] '>
                                <div className='pb-5'>
                                    <img src={item.image} alt="iconimage" />
                                    <h2 className='font-semibold text-xl lg:text-2xl'>{item.title}</h2>
                                    <span className='text-sm'>{item.statrswith}</span>
                                    <h3 className='font-semibold text-[18px]'>{item.month}</h3>
                                </div>
                                <div>
                                    {item.details?.map((details, index) => (
                                        <div key={index} className='flex gap-2 py-1'>
                                            <span className='text-[18px]'><GoCheck /></span>
                                            <p className='text-sm'>{details}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className='flex sm:flex-row flex-col items-center justify-center gap-4 sm:gap-3 w-full font-semibold py-3'>
                            <Link className='bg-[#FF4800] hover:bg-[#C93700] px-9 py-4.5 rounded-md sm:w-auto w-full block duration-300 text-white' href={``}>Demo premium editions</Link>
                            <Link className='border-2 border-[#FF4800] text-[#FF4800] bg-white hover:bg-[#FCECE6]  px-9 py-4.5 rounded-md sm:w-auto w-full block duration-300' href={``}>Start 14-day free trial</Link>
                        </div>
                        <p className='text-sm text-center'>*Discount available for new customers only. Offer has no set end date and can be discontinued at any time. For more detailed information on product packaging and the limits that apply, please see our <Link className='underline font-semibold' href={``}>pricing page</Link>. Price shown in USD and subject to applicable tax.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing
