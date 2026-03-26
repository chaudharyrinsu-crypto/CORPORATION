'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { popularFeatures } from '@/app/data/home/footer';
import { LiaAngleDownSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { GoArrowLeft } from "react-icons/go";

const LeftSide = ({ openMenu, setOpenMenu, toggleArrow }) => {
    return (
        <>
            <div onClick={() => toggleArrow(1)} className={`${openMenu === 1 ? 'items-center border-none' : 'items-start '} flex justify-between border-b border-[#7c7c7c] 2md:border-none 2md:py-0 py-4 2md:px-0 px-5 text-[#eeeded]`}>
                <Link href={`/`} className={`${openMenu === 1 ? 'block' : 'hidden'} flex gap-1 items-center`}>
                    <span className='text-[18px]'><GoArrowLeft /></span>
                    <span className=' border-b-2 border-[#FF4800] text-sm font-bold'>Back</span>
                </Link>
                <h2 className={`${openMenu == 1 ? "text-center text-[18px]" : " text-start"} 2md:pb-5 pb-0 text-[16px] 2md:text-sm font-semibold`}>Popular Features</h2>
                <span className={`2md:hidden block -rotate-90 text-xl`}>{openMenu === 1 ? <RxCross2 /> : <LiaAngleDownSolid />}</span>
            </div>
            <div className={`${openMenu == 1 ? "block" : "hidden"} 2md:flex 2md:flex-row flex-col gap-3 2md:gap-10`}>
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
        </>
    )
}

export default LeftSide
