'use client'
import React from 'react'
import Link from 'next/link';
import { popularFeatures } from '@/app/data/home/footer';
import { LiaAngleDownSolid } from "react-icons/lia";

const LeftSide = () => {
    return (
        <>
            <div className=''>
                <div className='flex justify-between border-b border-[#7c7c7c] 2md:py-0 py-4 2md:px-0 px-5'>
                    <h2 className='2md:pb-5 text-[#eeeded] text-[16px] 2md:text-sm font-semibold'>Popular Features</h2>
                    <span className={`2md:hidden block -rotate-90 text-xl`}><LiaAngleDownSolid /></span>
                </div>
                <div className=' 2md:flex 2md:flex-row flex-col gap-3 2md:gap-10'>
                    <ul className='flex flex-col gap-3 2md:px-0 px-5'>
                        {popularFeatures.firstFeature?.map((item, index) => (
                            <li key={index} className='text-sm 2md:text-[12px] 2md:hover:text-[#eeeded] 2md:hover:underline font-semibold 2md:bg-transparent bg-white p-5 rounded-sm'>
                                <Link className='block' href={``}>{item}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        {popularFeatures.secondFeature?.map((item, index) => (
                            <li key={index} className='text-[12px] hover:text-[#eeeded] hover:underline font-semibold '>
                                <Link href={``}>{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default LeftSide
