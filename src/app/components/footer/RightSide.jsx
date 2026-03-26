'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { popularFeatures } from '@/app/data/home/footer';
import { LiaAngleDownSolid } from "react-icons/lia";
import { GoArrowLeft } from "react-icons/go";

const RightSide = ({openMenu,setOpenMenu,toggleArrow}) => {
    // const [openMenu, setOpenMenu] = useState(null)
    // const toggleArrow = (index) => {
    //     setOpenMenu(openMenu === index ? null : index)
    // }
    return (
        <>
            <div className='flex 2md:flex-row flex-col  2md:justify-start justify-between gap-5 lg:gap-15'>
                <div className=''>
                    <div onClick={() => toggleArrow(1)} className={`${openMenu === 1 ? 'items-center border-none' : 'items-start '} flex justify-between border-b border-[#7c7c7c] 2md:py-0 py-4 2md:px-0 px-5 text-[#eeeded]`}>
                        <Link href={`/`} className={`${openMenu === 1 ? 'block' : 'hidden'} flex gap-1 items-center`}>
                            <span className='text-[18px]'><GoArrowLeft /></span>
                            <span className=' border-b-2 border-[#FF4800] text-sm font-bold'>Back</span>
                        </Link>
                        <h2 className='2md:pb-5  text-[#eeeded] text-sm font-semibold'>Free Tools</h2>
                        <span className={`2md:hidden block -rotate-90 text-xl `}><LiaAngleDownSolid /></span>
                    </div>

                    <ul className='hidden 2md:flex flex-col gap-3'>
                        {popularFeatures.freeTools?.map((item, index) => (
                            <li key={index} className='text-[12px] hover:text-[#eeeded] hover:underline font-semibold '>
                                <Link className='block' href={``}>{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=''>
                    <div className='flex justify-between border-b border-[#7c7c7c] 2md:pb-0 pb-4 2md:px-0 px-5'>
                        <h2 className='2md:pb-5  text-[#eeeded] text-sm font-semibold'>Company</h2>
                        <span className={`2md:hidden block -rotate-90 text-xl`}><LiaAngleDownSolid /></span>
                    </div>

                    <ul className='hidden 2md:flex flex-col gap-3'>
                        {popularFeatures.company?.map((item, index) => (
                            <li key={index} className='text-[12px] hover:text-[#eeeded] hover:underline font-semibold '>
                                <Link href={``}>{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='lg:space-y-25 2md:space-y-20 space-y-5 2md:pl-1'>
                    <div>
                        <div className='flex justify-between border-b border-[#7c7c7c] 2md:pb-0 pb-4 2md:px-0 px-5'>
                            <h2 className='2md:pb-5 text-[#eeeded] text-sm font-semibold'>Customers</h2>
                            <span className={`2md:hidden block -rotate-90 text-xl`}><LiaAngleDownSolid /></span>
                        </div>

                        <ul className='hidden 2md:flex flex-col gap-3'>
                            {popularFeatures.customer?.map((item, index) => (
                                <li key={index} className='text-[12px] hover:text-[#eeeded] hover:underline font-semibold '>
                                    <Link className='block' href={``}>{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className=''>
                        <div className='flex justify-between border-b border-[#7c7c7c] 2md:pb-0 pb-4 2md:px-0 px-5'>
                            <h2 className='2md:pb-5 
                             text-[#eeeded] text-sm font-semibold'>Partners</h2>
                            <span className={`2md:hidden block -rotate-90 text-xl`}><LiaAngleDownSolid /></span>
                        </div>

                        <ul className='hidden 2md:flex flex-col gap-3'>
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
