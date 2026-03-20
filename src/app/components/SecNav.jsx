'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { LiaAngleDownSolid } from "react-icons/lia";
import { TfiSearch } from "react-icons/tfi";
import SecNavSlideTop from './SecNavSlideTop';
import SecNavProductList from './SecNavProductList';

const SecNav = () => {
    const [openMenu, setOpenMenu] = useState(null)
    const toggleArrow = (index) => {
        setOpenMenu(openMenu === index ? null : index)
    }
    return (
        <>
            <div className='flex lg:flex-row flex-col lg:order-2 order-1 justify-between items-center lg:text-[16px] text-sm lg:py-4 py-1 relative font-hubot'>
                <ul className='flex lg:flex-row flex-col gap-6 lg:gap-10 justify-between items-center w-full lg:w-auto'>
                    <li className='lg:flex justify-between w-full hidden'>
                        <Link href={`/`}><img className='h-7' src="/logo.svg" alt="" /></Link>
                    </li>
                    <li className='lg:hidden block w-full relative'>
                        <div className='w-full'>
                            <span className='absolute left-4 top-1/2 -translate-y-1/2'><TfiSearch /></span>
                            <input className='w-full outline-none bg-white border border-[#848484] pr-4 pl-10 py-2.5 rounded-md text-sm font-normal' type="text" name="" id="" placeholder='Search Hopspot' />
                        </div>
                    </li>
                    <li className='flex lg:flex-row flex-col justify-between gap-8 w-full lg:py-0 py-5'>
                        <div onClick={() => toggleArrow(1)} className='flex lg:gap-1.5 justify-between items-center cursor-pointer'>
                            <span className='hover:underline'>Products</span>
                            <span className={`${openMenu === 1 ? 'lg:rotate-180' : 'lg:rotate-0'} transition-transform duration-300 -rotate-90 lg:text-sm text-xl`}><LiaAngleDownSolid /></span>
                            <div className='absolute left-1/2 -translate-x-1/2 top-full w-full z-30'>
                                <div className='lg:border-t border-t-0 border-[#D9D9D8] bg-white rounded-b-sm max-w-7xl mx-auto px-4'>
                                    <SecNavSlideTop />
                                    <SecNavProductList />
                                </div>
                            </div>
                            {/* {openMenu === 1 && (
                               
                            )} */}
                        </div>
                        <div onClick={() => toggleArrow(2)} className='flex lg:gap-1.5 justify-between items-center'>
                            <span className='hover:underline'>Solutions</span>
                            <span className={`${openMenu === 2 ? 'lg:rotate-180' : 'lg:rotate-0'} transition-transform duration-300 lg:rotate-0 -rotate-90 lg:text-sm text-xl`}><LiaAngleDownSolid /></span>
                        </div>
                        <div onClick={() => toggleArrow(3)} className='flex lg:gap-1.5 justify-between items-center'>
                            <span className='hover:underline'>Pricing</span>
                            <span className={`${openMenu === 3 ? 'lg:rotate-180' : 'lg:rotate-0'} transition-transform duration-300 lg:rotate-0 -rotate-90 lg:text-sm text-xl`}><LiaAngleDownSolid /></span>
                        </div>
                        <div onClick={() => toggleArrow(4)} className='flex lg:gap-1.5 justify-between items-center'>
                            <span className='hover:underline'>Resources</span>
                            <span className={`${openMenu === 4 ? 'lg:rotate-180' : 'lg:rotate-0'} transition-transform duration-300 lg:rotate-0 -rotate-90 lg:text-sm text-xl`}><LiaAngleDownSolid /></span>
                        </div>
                        <div onClick={() => toggleArrow(5)} className='flex lg:gap-1.5 justify-between items-center lg:hidden'>
                            <span className='hover:underline'>About</span>
                            <span className={`${openMenu === 5 ? 'lg:rotate-180' : 'lg:rotate-0'} transition-transform duration-300 lg:rotate-0 -rotate-90 lg:text-sm text-xl`}><LiaAngleDownSolid /></span>
                        </div>
                    </li>

                </ul>
                <div className='lg:w-auto w-full text-[12px] font-bold lg:border-none border-t border-[#D9D9D8] lg:py-0 py-4 flex flex-col gap-4 text-center'>
                    <div className='flex gap-5'>
                        <Link className='bg-[#FF4800] hover:bg-[#C93700] duration-500 text-white px-4 flex items-center py-1.5 rounded-md lg:w-auto w-1/2' href={``}>Get a demo</Link>
                        <Link className='border hover:bg-[#FCECE6] hover:border-[#C93700] border-[#FF4800] hover:text-[#C93700] text-[#FF4800]  flex items-center px-4 py-2.5 rounded-md lg:w-auto w-1/2 duration-500 ' href={``}>Get started free</Link>
                    </div>
                    <div className='lg:hidden block border-t border-b border-[#D9D9D8] py-4'>
                        <Link className=' bg-[#1f1f1f]  text-white  px-4 py-2.5 rounded-md block w-full duration-500 ' href={``}>Log in</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecNav
