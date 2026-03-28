'use client'
import React, { useState } from 'react'
import { hubBot } from '../data/home/hubBot'
import { LuSend } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { TiMessages } from "react-icons/ti";

const HubBot = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [hideDescription, setHideDescription] = useState(false)
    return (
        <div className='fixed right-2 left-2 xs:left-auto xs:right-4 bottom-8  z-[100] '>
            <div className='xs:max-w-[420px] max-w-[400px] font-hubot relative'>
                <div className={`${openMenu?'hidden':'block'} bg-white rounded-xl overflow-hidden`}>
                    <div className='bg-[#1F1F1F] w-full text-white flex items-center justify-between p-4'>
                        <div className='flex items-center gap-3'>
                            <div className='relative'>
                                <img className='h-10' src={hubBot.logo} alt="logo" />
                                <span className='absolute right-0 bottom-1 h-3 w-3 border-2 border-white bg-green-400 rounded-full'></span>
                            </div>
                            <h2 className='font-semibold'>{hubBot.title}</h2>
                        </div>
                        <span onClick={() => setOpenMenu(!openMenu)} className='text-3xl cursor-pointer'><RxCross2 /></span>
                    </div>
                    <div className='flex gap-2 py-4 pl-4 pr-8 lg:h-auto h-[100px] lg:overflow-hidden overflow-y-scroll'>
                        <img className='h-8' src={hubBot.logo} alt="logo" />
                        <div className='flex flex-col gap-2'>
                            <p className='bg-[#eeeeed] px-4 py-3 rounded-xl text-sm'>{hubBot.firstdescription}</p>
                            <p className='bg-[#eeeeed] px-4 py-3 rounded-xl text-sm'>{hubBot.seconddescription}</p>
                            <div className='grid grid-cols-2 gap-2 '>
                                {hubBot.features?.map((feature, index) => (
                                    <span key={index} className='border rounded-[10px] text-[12px] px-4 py-2'>{feature}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={`${hideDescription?'opacity-0':'opacity-100'} text-[12px] leading-6 pr-4 pl-8 py-4  bg-[#eeeeed] flex justify-between`}>
                        <p>HubSpot uses the information you provide to us to contact you about our relevant content, products, and services. Check out our privacy policy here.</p>
                        <span onClick={()=>setHideDescription(!false)} className='text-[18px] cursor-pointer'><RxCross2 /></span>
                    </div>
                    <div className='px-4 py-4'>
                        <div className='relative'>
                            <input className='border border-[#848484] text-[#848484] outline-none px-5 py-2 w-full rounded-4xl text-sm' type="text" name="" id="" placeholder='Ask me anything...' />
                            <span className='text-[#7f7f7c]  absolute right-4 top-1/2 -translate-y-1/2'><LuSend /></span>
                        </div>
                    </div>
                    <p className='text-[12px] text-center pb-2'>AI-generated content may be inaccurate.</p>
                </div>
                <div className='px-4 py-10 text-center'>
                    <span onClick={()=>setOpenMenu(!openMenu)} className='text-3xl p-3.5 absolute right-4 bottom-0 bg-[#1F1F1F] text-white rounded-full'>{openMenu ? < TiMessages/> : <RxCross2 />}</span>
                </div>
            </div>
        </div>
    )
}

export default HubBot
