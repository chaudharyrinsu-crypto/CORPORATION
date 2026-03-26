'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { popularFeatures } from '@/app/data/home/footer';
import { LiaAngleDownSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { GoArrowLeft } from "react-icons/go";

const RightSide = ({ openMenu, setOpenMenu, toggleArrow }) => {
    return (
        <>
            <div className='flex 2md:flex-row flex-col  2md:justify-start justify-between gap-5 lg:gap-15 2md:py-3'>
                <div className=''>
                    <div onClick={() => toggleArrow(2)} className={`${openMenu === 2 ? 'items-center border-none' : 'items-start '} flex justify-between border-b border-[#7c7c7c] 2md:border-none 2md:pb-0 pb-4 2md:px-0 px-5 text-[#eeeded]`}>
                        <Link href={`/`} className={`${openMenu === 2 ? 'block' : 'hidden'} flex gap-1 items-center`}>
                            <span className='text-[18px]'><GoArrowLeft /></span>
                            <span className=' border-b-2 border-[#FF4800] text-sm font-bold'>Back</span>
                        </Link>
                        <h2 className={`${openMenu == 2 ? "text-center text-[18px]" : " text-start"} 2md:pb-5 pb-0 text-[16px] 2md:text-sm font-semibold`}>Free Tools</h2>
                        <span className={`2md:hidden block -rotate-90 text-xl`}>{openMenu === 2 ? <RxCross2 /> : <LiaAngleDownSolid />}</span>
                    </div>
                    <div className={`${openMenu == 2 ? "block border-b border-[#7c7c7c] " : "hidden  "} 2md:flex-row flex-col gap-3 2md:gap-10 2md:flex`}>
                        <ul className='flex flex-col gap-4 2md:px-0 px-5'>
                            {popularFeatures.freeTools?.map((item, index) => (
                                <li key={index} className='text-sm 2md:text-[12px] 2md:hover:text-[#eeeded] 2md:hover:underline font-semibold 2md:bg-transparent bg-white 2md:p-0 p-5 rounded-sm'>
                                    <Link className='block' href={``}>{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <div onClick={() => toggleArrow(3)} className={`${openMenu === 3 ? 'items-center border-none' : 'items-start '} flex justify-between 2md:border-none border-b border-[#7c7c7c] 2md:pb-0 pb-4 2md:px-0 px-5 text-[#eeeded]`}>
                        <Link href={`/`} className={`${openMenu === 3 ? 'block' : 'hidden'} flex gap-1 items-center`}>
                            <span className='text-[18px]'><GoArrowLeft /></span>
                            <span className=' border-b-2 border-[#FF4800] text-sm font-bold'>Back</span>
                        </Link>
                        <h2 className={`${openMenu == 3 ? "text-center text-[18px]" : " text-start"} 2md:pb-5 pb-0 text-[16px] 2md:text-sm font-semibold`}>Company</h2>
                        <span className={`2md:hidden block -rotate-90 text-xl`}>{openMenu === 3 ? <RxCross2 /> : <LiaAngleDownSolid />}</span>
                    </div>
                    <div className={`${openMenu == 3 ? "block border-b border-[#7c7c7c] " : "hidden  "} 2md:flex-row flex-col gap-3 2md:gap-10 2md:flex`}>
                        <ul className='flex flex-col gap-4 2md:px-0 px-5'>
                            {popularFeatures.company?.map((item, index) => (
                                <li key={index} className='text-sm 2md:text-[12px] 2md:hover:text-[#eeeded] 2md:hover:underline font-semibold 2md:bg-transparent bg-white 2md:p-0 p-5 rounded-sm'>
                                    <Link href={``}>{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='lg:space-y-25 2md:space-y-20 space-y-5 2md:pl-1'>
                    <div>
                        <div onClick={() => toggleArrow(4)} className={`${openMenu === 4 ? 'items-center border-none' : 'items-start '} flex justify-between 2md:border-none border-b border-[#7c7c7c] 2md:pb-0 pb-4 2md:px-0 px-5 text-[#eeeded]`}>
                            <Link href={`/`} className={`${openMenu === 4 ? 'block' : 'hidden'} flex gap-1 items-center`}>
                                <span className='text-[18px]'><GoArrowLeft /></span>
                                <span className=' border-b-2 border-[#FF4800] text-sm font-bold'>Back</span>
                            </Link>
                            <h2 className={`${openMenu == 4 ? "text-center text-[18px]" : " text-start"} 2md:pb-5 pb-0 text-[16px] 2md:text-sm font-semibold`}>Customers</h2>
                            <span className={`2md:hidden block -rotate-90 text-xl`}>{openMenu === 4 ? <RxCross2 /> : <LiaAngleDownSolid />}</span>
                        </div>
                        <div className={`${openMenu == 4 ? "block border-b border-[#7c7c7c] " : "hidden  "} 2md:flex-row flex-col gap-3 2md:gap-10 2md:flex`}>
                            <ul className='flex flex-col gap-4 2md:px-0 px-5'>
                                {popularFeatures.customer?.map((item, index) => (
                                    <li key={index} className='text-sm 2md:text-[12px] 2md:hover:text-[#eeeded] 2md:hover:underline font-semibold 2md:bg-transparent bg-white 2md:p-0 p-5 rounded-sm'>
                                        <Link className='block' href={``}>{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className=''>
                        <div onClick={() => toggleArrow(5)} className={`${openMenu === 5 ? 'items-center border-none' : 'items-start '} flex justify-between 2md:border-none border-b border-[#7c7c7c] 2md:pb-0 pb-4 2md:px-0 px-5 text-[#eeeded]`}>
                            <Link href={`/`} className={`${openMenu === 5 ? 'block' : 'hidden'} flex gap-1 items-center`}>
                                <span className='text-[18px]'><GoArrowLeft /></span>
                                <span className=' border-b-2 border-[#FF4800] text-sm font-bold'>Back</span>
                            </Link>
                            <h2 className={`${openMenu == 5 ? "text-center text-[18px]" : " text-start"} 2md:pb-5 pb-0 text-[16px] 2md:text-sm font-semibold`}>Partners</h2>
                            <span className={`2md:hidden block -rotate-90 text-xl`}>{openMenu === 5 ? <RxCross2 /> : <LiaAngleDownSolid />}</span>
                        </div>
                        <div className={`${openMenu == 5 ? "block border-b border-[#7c7c7c] " : "hidden  "} 2md:flex-row flex-col gap-3 2md:gap-10 2md:flex`}>
                            <ul className='flex flex-col gap-4 2md:px-0 px-5'>
                                {popularFeatures.partner?.map((item, index) => (
                                    <li key={index} className='text-sm 2md:text-[12px] 2md:hover:text-[#eeeded] 2md:hover:underline font-semibold 2md:bg-transparent bg-white 2md:p-0 p-5 rounded-sm'>
                                        <Link className='block' href={``}>{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightSide
