'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiArrowDownSLine } from "react-icons/ri";
import { MdOutlineSettingsVoice } from "react-icons/md";
import { LiaAngleDownSolid } from "react-icons/lia";
import { LuContrast } from "react-icons/lu";
import { TiMessages } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import { TfiSearch } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
const Nav = () => {
    const [clickBar, setClickBar] = useState(null)
    return (
        <>
            <nav className='font-hubot tracking-wide font-normal lg:font-semibold pt-3 pb-2 border-b border-[#D9D9D8] text-[#1f1f1f]'>
                <div className='max-w-[1100px] mx-auto lg:px-0 px-5'>
                    <div className='flex justify-between w-full py-4 lg:hidden'>
                        <Link href={`/`}><img className='h-7' src="/secondlogo.svg" alt="" /></Link>
                        <span onClick={() => setClickBar(!clickBar)} className={`text-4xl cursor-pointer ${clickBar ? 'rotate-90' : ''} duration-500 lg:hidden block`}>{clickBar ? <RxCross2 /> : <FiMenu />}</span>
                    </div>
                    <ul className='flex lg:flex-row flex-col justify-between items-center lg:w-auto w-full'>
                        <li className='flex lg:gap-1.5 justify-between items-center cursor-pointer lg:w-auto w-full'>
                            <span className='lg:block hidden'><MdOutlineSettingsVoice /></span>
                            <span className='hover:underline text-[12px] text-[#2e2e2e]'>English</span>
                            <span className='lg:rotate-0 -rotate-90 text-[#797979]'><RiArrowDownSLine /></span>
                        </li>
                        <li className='relative flex gap-8 justify-between items-center cursor-pointer lg:w-auto w-full text-sm'>
                            <div className='w-[450px]'>
                                <span className='absolute left-4 top-1/2 -translate-y-1/2'><TfiSearch /></span>
                                <input className='w-full outline-none bg-white border border-[#848484] pr-4 pl-10 py-2 rounded-md text-[16px] font-normal' type="text" name="" id="" placeholder='Search all help and learing resources' />
                            </div>
                            <Link href={``}>Go to my account</Link>
                            <div className='flex gap-4'>
                                <Link className='bg-[#FF4800] hover:bg-[#C93700] duration-500 text-white px-4.5 py-2 rounded-md lg:w-auto w-1/2' href={``}>Get a demo</Link>
                                <Link className='border-2 hover:bg-[#FCECE6] hover:border-[#C93700] border-[#FF4800] hover:text-[#C93700] text-[#FF4800] px-4.5 py-2 rounded-md lg:w-auto w-1/2 duration-500 ' href={``}>Start 14-day free trial</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className='text-[#2e2e2e] lg:px-0 px-5 font-normal lg:font-semibold font-hubot tracking-wide bg-[#FCFCFA] py-8 '>
                <div className='max-w-[1100px] mx-auto '>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <Link href={`/`}><img className='h-7' src="/logo.svg" alt="" /></Link>
                            <span className='text-2xl'>Help Center</span>
                        </div>
                        <ul className='flex lg:flex-row flex-col gap-8 justify-between items-center lg:w-auto w-full'>
                            <li className='flex lg:gap-1.5 justify-between items-center cursor-pointer lg:w-auto w-full'>
                                <span className='hover:underline'>Software</span>
                                <span className='lg:rotate-0 -rotate-90 text-[#797979]'><RiArrowDownSLine /></span>
                            </li>
                            <li className='flex lg:gap-1.5 justify-between items-center cursor-pointer lg:w-auto w-full'>
                                <span className='hover:underline lg:order-2 order-1'>Pricing</span>
                            </li>
                            <li className='lg:w-auto w-full'>
                                <Link className='flex lg:gap-1.5 justify-between items-center ' href={``}>
                                    <span className='hover:underline'>Resources </span>
                                    <span className='lg:rotate-0 -rotate-90 text-[#797979]'><RiArrowDownSLine /></span>
                                </Link>
                            </li>
                            <li className='lg:w-auto w-full'>
                                <Link className='flex lg:gap-1.5 justify-between items-center' href={``}>
                                    <span className='hover:underline'>Partners </span>
                                    <span className='lg:rotate-0 -rotate-90 text-[#797979]'><RiArrowDownSLine /></span>
                                </Link>
                            </li>
                            <li className='lg:w-auto w-full'>
                                <Link className='flex lg:gap-1.5 justify-between items-center' href={``}>
                                    <span className='hover:underline'>About </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
