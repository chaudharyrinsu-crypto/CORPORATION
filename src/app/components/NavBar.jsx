'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlineSettingsVoice } from "react-icons/md";
import { LiaAngleDownSolid } from "react-icons/lia";
import { LuContrast } from "react-icons/lu";
import { TiMessages } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import { TfiSearch } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
import SecNav from './SecNav';

const NavBar = () => {
    const [showInput, setShowInput] = useState(false)
    const [clickBar, setClickBar] = useState(null)
    return (
        <>
            <nav className='font-hubot font-normal lg:font-semibold'>
                <div className={` max-w-[1100px] mx-auto lg:px-0 px-5`}>
                    <div className='flex justify-between w-full py-4 lg:hidden'>
                        <Link href={`/`}><img className='h-7' src="/logo.svg" alt="" /></Link>
                        <span onClick={() => setClickBar(!clickBar)} className={`text-4xl cursor-pointer ${clickBar ? 'rotate-90' : ''} duration-500 lg:hidden block`}>{clickBar ? <RxCross2 /> : <FiMenu />}</span>
                    </div>
                    <div className={`${clickBar ? 'flex' : 'hidden'} lg:flex flex-col`}>
                        <div className='relative lg:w-auto w-full order-2 lg:order-1'>
                            <div className={`py-4 text-sm lg:text-[12px] flex justify-between items-center ${showInput ? "opacity-0" : "opacity-100 relative z-20"} duration-500 lg:w-auto w-full`}>
                                <ul className='flex lg:flex-row flex-col gap-8 justify-between items-center lg:w-auto w-full'>
                                    <li className='flex lg:gap-1.5 justify-between items-center cursor-pointer lg:w-auto w-full'>
                                        <span className='lg:block hidden'><MdOutlineSettingsVoice /></span>
                                        <span className='hover:underline'>English</span>
                                        <span className='lg:rotate-0 -rotate-90 lg:text-sm text-xl'><LiaAngleDownSolid /></span>
                                    </li>
                                    <li className='flex lg:gap-1.5 justify-between items-center cursor-pointer lg:w-auto w-full'>
                                        <span className='lg:order-1 order-2'><LuContrast /></span>
                                        <span className='hover:underline lg:order-2 order-1'>High Contrast</span>

                                    </li>
                                    <li className='lg:w-auto w-full'>
                                        <Link target='_blank' className='flex lg:gap-1.5 justify-between items-center ' href={`/customersupport`}>
                                            <span className='lg:block hidden'><TiMessages /></span>
                                            <span className='hover:underline'>Customer Support</span>
                                            <span className='lg:rotate-0 -rotate-90 lg:text-sm text-xl'><LiaAngleDownSolid /></span>
                                        </Link>
                                    </li>
                                    <li className='lg:w-auto w-full'>
                                        <Link className='flex lg:gap-1.5 justify-between items-center' href={``}>
                                            <span className='lg:block hidden'><IoPersonOutline /></span>
                                            <span className='hover:underline'>Contact Sales</span>
                                            <span className='lg:rotate-0 -rotate-90 lg:text-sm text-xl'><LiaAngleDownSolid /></span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className='lg:flex gap-8 justify-between items-center hidden'>
                                    <li onClick={() => setShowInput(!false)} className='text-sm cursor-pointer'><TfiSearch /></li>
                                    <li>
                                        <Link className='hover:underline' href={``}>Log in</Link>
                                    </li>
                                    <li className='flex lg:gap-1.5 justify-between items-center cursor-pointer'>
                                        <span className='hover:underline'>About</span>
                                        <span className='lg:rotate-0 -rotate-90 lg:text-sm text-xl'><LiaAngleDownSolid /></span>
                                    </li>
                                </ul>
                            </div>
                            <div className={`flex gap-8 items-center bg-[#FCFCFA] py-1 absolute z-10 top-0 ${showInput ? 'w-full opacity-100' : 'z-10 w-0 opacity-0'} duration-500 transition-all ease-in-out`}>
                                <div className='w-full'>
                                    <span className='absolute left-4 top-1/2 -translate-y-1/2'><TfiSearch /></span>
                                    <input className='w-full outline-none bg-white border border-[#848484] pr-4 pl-10 py-2.5 rounded-md text-sm font-normal' type="text" name="" id="" placeholder='Search Hopspot' />
                                </div>
                                <span onClick={() => setShowInput(false)} className={`text-2xl cursor-pointer ${showInput ? "w-0" : "w-full"} duration-500 transition-all ease-in-out`}><RxCross1 /></span>
                            </div>
                        </div>
                        <SecNav />
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavBar
