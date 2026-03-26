'use client'
import React from 'react'
import Link from 'next/link';
import { popularFeatures } from '@/app/data/home/footer';

const RightSide = () => {
    return (
        <>
            <div className='flex gap-5 lg:gap-15'>
                <div className=''>
                    <h2 className='pb-5 text-[#eeeded] text-sm font-semibold'>Free Tools</h2>
                    <ul className='flex flex-col gap-3'>
                        {popularFeatures.freeTools?.map((item, index) => (
                            <li key={index} className='text-[12px] hover:text-[#eeeded] hover:underline font-semibold '>
                                <Link className='block' href={``}>{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=''>
                    <h2 className='pb-5 text-[#eeeded] text-sm font-semibold'>Company</h2>
                    <ul className='flex flex-col gap-3'>
                        {popularFeatures.company?.map((item, index) => (
                            <li key={index} className='text-[12px] hover:text-[#eeeded] hover:underline font-semibold '>
                                <Link href={``}>{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='space-y-25 pl-1'>
                    <div>
                        <h2 className='pb-5 text-[#eeeded] text-sm font-semibold'>Customers</h2>
                        <ul className='flex flex-col gap-3'>
                            {popularFeatures.customer?.map((item, index) => (
                                <li key={index} className='text-[12px] hover:text-[#eeeded] hover:underline font-semibold '>
                                    <Link className='block' href={``}>{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className=''>
                        <h2 className='pb-5 text-[#eeeded] text-sm font-semibold'>Partners</h2>
                        <ul className='flex flex-col gap-3'>
                            {popularFeatures.partner?.map((item, index) => (
                                <li key={index} className='text-[12px] hover:text-[#eeeded] hover:underline font-semibold '>
                                    <Link className='block' href={``}>{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightSide
