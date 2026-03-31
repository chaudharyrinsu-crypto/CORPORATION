import Link from 'next/link'
import React from 'react'
import { LiaAngleDownSolid } from "react-icons/lia";

const SecNavSlideTop = () => {
    return (
        <>
            <div className='lg:py-4 py-0 lg:pt-0 pt-4 flex lg:flex-row flex-col justify-between  border-b border-[#D9D9D8]  text-black'>
                <div className='space-y-2 lg:border-none border-b border-[#D9D9D8] py-4.5 cursor-auto'>
                    <h2 className='text-[16px] font-semibold'>The HubSpot Customer Platform</h2>
                    <p className='text-[14px] lg:text-[12px] font-normal'>All of HubSpot's marketing, sales, and customer service software on one AI-powered platform.</p>
                </div>
                <div className='flex lg:flex-row flex-col gap-0 lg:gap-4 text-[16px] font-semibold lg:py-0 py-3'>
                    <Link className='flex justify-between items-center ' href={``}>
                        <div className='flex items-center gap-3 lg:gap-4 py-3 lg:px-4 lg:border border-transparent rounded-md lg:border-[#D9D9D8] lg:bg-[#f7f7f5] bg-transparent lg:hover:bg-[#eeeeed] duration-300'>
                            <img className='lg:h-6 h-7' src="../../secondlogo.svg" alt="logo" />
                            <span className='lg:text-sm text-[16px]lg:text-sm text-[16px]'>Free HubSpot CRM</span>
                        </div>
                        <span className={`lg:hidden block transition-transform duration-300 -rotate-90 text-[16px] sm:text-xl`}><LiaAngleDownSolid /></span>
                    </Link>
                    <Link className='flex justify-between items-center ' href={``}>
                        <div className='flex items-center gap-3 lg:gap-4 py-3 lg:px-4 lg:border border-transparent rounded-md lg:border-[#D9D9D8] lg:bg-[#f7f7f5] bg-transparent lg:hover:bg-[#eeeeed] duration-300'>
                            <img className='lg:h-6 h-7' src="../../secondlogo.svg" alt="logo" />
                            <span className='lg:text-sm sm:text-[16px]'>Overview of all products</span>
                        </div>
                        <span className={`lg:hidden block transition-transform duration-300 -rotate-90 text-[16px] sm:text-xl`}><LiaAngleDownSolid /></span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SecNavSlideTop
