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
import { HiMiniBars2 } from "react-icons/hi2";

const NavBar = () => {
    const [showInput, setShowInput] = useState(false)
    const [clickBar, setClickBar] = useState(null)
    return (
        <>
            <nav className='font-hubot tracking-wide font-normal lg:font-semibold'>
                <div className='max-w-[1100px] mx-auto flex flex-col lg:px-0 px-5'>
                    <div className='relative w-full order-2 lg:order-1'>
                        <div className={`py-4 text-sm lg:text-[12px] flex justify-between items-center ${showInput ? "opacity-0" : "opacity-100 relative z-20"} duration-500`}>
                            <ul className='flex lg:flex-row flex-col gap-8 justify-between items-center'>
                                <li className='flex lg:gap-1.5 justify-between items-center cursor-pointer'>
                                    <span className='lg:block hidden'><MdOutlineSettingsVoice /></span>
                                    <span className='hover:underline'>English</span>
                                    <span className='lg:rotate-0 -rotate-90'><LiaAngleDownSolid /></span>
                                </li>
                                <li className='flex lg:gap-1.5 justify-between items-center cursor-pointer'>
                                    <span><LuContrast /></span>
                                    <span className='hover:underline'>High Contrast</span>
                                </li>
                                <li>
                                    <Link className='flex lg:gap-1.5 justify-between items-center' href={``}>
                                        <span><TiMessages /></span>
                                        <span className='hover:underline'>Customer Support</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className='flex lg:gap-1.5 justify-between items-center' href={``}>
                                        <span><IoPersonOutline /></span>
                                        <span className='hover:underline'>Contact Sales</span>
                                    </Link>
                                </li>
                            </ul>
                            <ul className='flex gap-8 justify-between items-center'>
                                <li onClick={() => setShowInput(!false)} className='text-sm cursor-pointer'><TfiSearch /></li>
                                <li>
                                    <Link className='hover:underline' href={``}>Log in</Link>
                                </li>
                                <li className='flex lg:gap-1.5 justify-between items-center cursor-pointer'>
                                    <span className='hover:underline'>About</span>
                                    <span><LiaAngleDownSolid /></span>
                                </li>
                            </ul>
                        </div>
                        <div className={`flex gap-8 items-center bg-[#FCFCFA] py-1 absolute z-10 top-0 ${showInput ? 'w-full opacity-100' : 'z-10 w-0 opacity-0'} duration-500 transition-all ease-in-out`}>
                            <div className='w-full'>
                                <span className='absolute left-4 top-1/2 -translate-y-1/2'><TfiSearch /></span>
                                <input className='w-full outline-none bg-white border pr-4 pl-10 py-2.5 rounded-md text-sm font-normal' type="text" name="" id="" placeholder='Search Hopspot' />
                            </div>
                            <span onClick={() => setShowInput(false)} className={`text-2xl cursor-pointer ${showInput ? "w-0" : "w-full"} duration-500 transition-all ease-in-out`}><RxCross1 /></span>
                        </div>
                    </div>

                    <div className='flex lg:flex-row flex-col lg:order-2 order-1 justify-between items-center lg:text-[16px] text-sm pt-4 pb-4'>
                        <ul className='flex lg:flex-row flex-col gap-10 justify-between items-center w-full lg:w-auto'>
                            <li className='flex justify-between w-full'>
                                <Link href={`/`}><img className='h-7' src="/logo.svg" alt="" /></Link>
                                <span onClick={() => setClickBar(!clickBar)} className={`text-4xl cursor-pointer ${clickBar ? 'rotate-90' : ''} duration-500 lg:hidden block`}>{clickBar ? <RxCross2 /> : <HiMiniBars2 />}</span>
                            </li>
                            <li className='flex lg:flex-row flex-col justify-between gap-8 w-full'>
                                <div className='flex lg:gap-1.5 justify-between items-center'>
                                    <span className='hover:underline'>Products</span>
                                    <span className='lg:rotate-0 -rotate-90'><LiaAngleDownSolid /></span>
                                </div>
                                <div className='flex lg:gap-1.5 justify-between items-center'>
                                    <span className='hover:underline'>Solutions</span>
                                    <span className='lg:rotate-0 -rotate-90'><LiaAngleDownSolid /></span>
                                </div>
                                <div className='flex lg:gap-1.5 justify-between items-center'>
                                    <span className='hover:underline'>Pricing</span>
                                    <span className='lg:rotate-0 -rotate-90'><LiaAngleDownSolid /></span>
                                </div>
                                <div className='flex lg:gap-1.5 justify-between items-center'>
                                    <span className='hover:underline'>Resources</span>
                                    <span className='lg:rotate-0 -rotate-90'><LiaAngleDownSolid /></span>
                                </div>
                            </li>

                        </ul>
                        <div className='flex lg:w-auto w-full text-center gap-5 text-sm lg:border-none border-t border-b border-[#D9D9D8] lg:py-0 py-4'>
                            <Link className='bg-[#FF4800] hover:bg-[#C93700] duration-500 text-white px-4.5 py-2.5 rounded-md lg:w-auto w-1/2' href={``}>Get a demo</Link>
                            <Link className='border-2 hover:bg-[#FCECE6] hover:border-[#C93700] border-[#FF4800] hover:text-[#C93700] text-[#FF4800] px-4.5 py-2.5 rounded-md lg:w-auto w-1/2 duration-500 ' href={``}>Start 14-day free trial</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
