'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiArrowDownSLine } from "react-icons/ri";
import { MdOutlineSettingsVoice } from "react-icons/md";
import { TfiSearch } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
import SecondNav from './SecondNav';
import { language } from '@/app/data/AllData';

const Nav = () => {
    const [clickBar, setClickBar] = useState(null)
    const [showLanguage, setShowLanguage] = useState(false)
    const [hoverLanguage, setHoverLanguage] = useState(null)

    return (
        <>
            <nav className='font-hubot tracking-wide font-semibold text-[#1f1f1f] '>
                <div className='lg:pt-3 lg:pb-2 border-b border-[#D9D9D8]'>
                    <div className='max-w-[1100px] mx-auto flex flex-col'>
                        <div className='flex justify-between items-center w-full border-b border-[#D9D9D8] lg:hidden lg:py-0 py-2.5 px-3'>
                            <div className='relative flex gap-4 items-center'>
                                <Link href={`/`}><img className='h-8' src="/secondlogo.svg" alt="" /></Link>
                                <div className='w-[500px] relative'>
                                    <span className='absolute left-4 top-1/2 -translate-y-1/2'><TfiSearch /></span>
                                    <input className='w-full outline-none bg-white border border-[#848484] pr-4 pl-10 py-2 rounded-md  font-normal' type="text" name="" id="" placeholder='Search all help and learing resources' />
                                </div>
                            </div>
                            <span onClick={() => setClickBar(!clickBar)} className={`text-3xl cursor-pointer ${clickBar ? 'rotate-90' : ''} duration-500 lg:hidden block`}>{clickBar ? <RxCross2 /> : <FiMenu />}</span>
                        </div>
                        <ul className='order-2 lg:order-1 flex lg:flex-row flex-col justify-between items-center lg:w-auto w-full lg:px-0 px-3'>
                            <li onMouseEnter={() => setShowLanguage(!false)}  className='lg:flex hidden lg:gap-1.5 justify-between items-center cursor-pointer lg:px-0 px-5 relative'>
                                <span className='lg:block hidden'><MdOutlineSettingsVoice /></span>
                                <span className='text-[12px] text-[#2e2e2e] '>English</span>
                                <span className='lg:rotate-0 -rotate-90 text-[#797979]'><RiArrowDownSLine /></span>
                                <ul onMouseLeave={()=>setShowLanguage(false)} className={`${showLanguage ? 'block' : 'hidden'} absolute text-[12px] top-6 py-3 items-center justify-center bg-white border border-[#D9D9D8] rounded-sm`}>
                                    <li className='flex flex-col'>
                                        {language.map((language, index) => (
                                            <Link className='py-1  px-5 hover:bg-[#eeeeee]' key={index} href={``}>{language}</Link>
                                        ))}
                                    </li>
                                </ul>
                            </li>
                            <li className='relative flex gap-8 justify-between items-center cursor-pointer lg:w-auto w-full text-sm'>
                                <div className='w-[450px] lg:block hidden'>
                                    <span className='absolute left-4 top-1/2 -translate-y-1/2'><TfiSearch /></span>
                                    <input className='w-full outline-none bg-white border border-[#848484] pr-4 pl-10 py-2 rounded-md text-[16px] font-normal' type="text" name="" id="" placeholder='Search all help and learing resources' />
                                </div>
                                <Link className='hidden lg:block' href={`/login`}>Go to my account</Link>
                                <div className='hidden lg:flex lg:flex-row flex-col gap-4 lg:w-auto w-full'>
                                    <Link className='bg-[#FF4800] hover:bg-[#C93700] duration-500 text-white px-4.5 py-2 rounded-md lg:w-auto' href={``}>Get a demo</Link>
                                    <Link className='border-2 hover:bg-[#FCECE6] hover:border-[#C93700] border-[#FF4800] hover:text-[#C93700] text-[#FF4800] px-4.5 py-2 rounded-md lg:w-auto  duration-500 ' href={``}>Start 14-day free trial</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* second  */}
                <SecondNav />
            </nav>

        </>
    )
}

export default Nav
