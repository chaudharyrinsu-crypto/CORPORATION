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

const NavBar = () => {
    const [showInput, setShowInput] = useState(false)
    return (
        <>
            <nav className='font-hubot py-4 tracking-wide'>
                <div className='max-w-[1100px] mx-auto'>
                    <div className='flex gap-8 items-center bg-[#FCFCFA] py-1'>
                        <div className='relative w-full'>
                            <span className='absolute left-4 top-1/2 -translate-y-1/2'><TfiSearch /></span>
                            <input className='w-full outline-none bg-white border pr-4 pl-10 py-2 text-sm font-normal' type="text" name="" id="" placeholder='Search Hopspot' />
                        </div>
                        <span className='text-2xl'><RxCross1 /></span>
                    </div>
                    <div className='text-[12px] font-semibold flex justify-between items-center'>
                        <ul className='flex gap-8 justify-between items-center'>
                            <li className='flex gap-1.5 justify-between items-center'>
                                <span><MdOutlineSettingsVoice /></span>
                                <span>English</span>
                                <span><LiaAngleDownSolid /></span>
                            </li>
                            <li className='flex gap-1.5 justify-between items-center'>
                                <span><LuContrast /></span>
                                <span>High Contrast</span>
                            </li>
                            <li>
                                <Link className='flex gap-1.5 justify-between items-center' href={``}>
                                    <span><TiMessages /></span>
                                    <span>Customer Support</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='flex gap-1.5 justify-between items-center' href={``}>
                                    <span><IoPersonOutline /></span>
                                    <span>Contact Sales</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className='flex gap-8 justify-between items-center'>
                            <li className='text-sm'><TfiSearch /></li>
                            <li>
                                <Link href={``}>Log in</Link>
                            </li>
                            <li className='flex gap-1.5 justify-between items-center'>
                                <span>About</span>
                                <span><LiaAngleDownSolid /></span>
                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center font-semibold pt-8'>
                        <ul className='flex gap-8 justify-between items-center'>
                            <li><img className='h-7' src="/logo.svg" alt="" /></li>
                            <li className='flex gap-1.5 justify-between items-center'>
                                <span>Products</span>
                                <span><LiaAngleDownSolid /></span>
                            </li>
                            <li className='flex gap-1.5 justify-between items-center'>
                                <span>Pricing</span>
                                <span><LiaAngleDownSolid /></span>
                            </li>
                            <li className='flex gap-1.5 justify-between items-center'>
                                <span>Resources</span>
                                <span><LiaAngleDownSolid /></span>
                            </li>
                        </ul>
                        <div className='flex gap-5 text-sm'>
                            <Link className='bg-[#FF4800] hover:bg-[#C93700] duration-500 text-white px-4.5 py-2.5 rounded-md' href={``}>Get a demo</Link>
                            <Link className='border-2 hover:bg-[#FCECE6] hover:border-[#C93700] border-[#FF4800] hover:text-[#C93700] text-[#FF4800] px-4.5 py-2.5 rounded-md duration-500 ' href={``}>Start 14-day free trial</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
