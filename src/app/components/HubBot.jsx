import React from 'react'
import { hubBot } from '../data/home/hubBot'
import { LuSend } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const HubBot = () => {
    return (
        <div className=''>
            <div className='max-w-[400px] font-hubot'>
                <div className='bg-[#1F1F1F] text-white flex items-center justify-between p-4'>
                    <div className='flex items-center gap-3'>
                        <div className='relative'>
                            <img className='h-10' src={hubBot.logo} alt="logo" />
                            <span className='absolute right-0 bottom-1 h-3 w-3 border-2 border-white bg-green-400 rounded-full'></span>
                        </div>
                        <h2 className='font-semibold'>{hubBot.title}</h2>
                    </div>
                    <span className='text-3xl'><RxCross2 /></span>
                </div>
                <div className='flex gap-2 py-4 pl-4 pr-8'>
                    <img className='h-8' src={hubBot.logo} alt="logo" />
                    <div className='flex flex-col gap-3'>
                        <p className='bg-[#eeeeed] px-4 py-3 rounded-xl'>{hubBot.firstdescription}</p>
                        <p className='bg-[#eeeeed] px-4 py-3 rounded-xl'>{hubBot.seconddescription}</p>
                        <div className='grid grid-cols-2 gap-2'>
                            {hubBot.features?.map((feature, index) => (
                                <span key={index} className='border rounded-[10px] text-sm px-4 py-2'>{feature}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <p>HubSpot uses the information you provide to us to contact you about our relevant content, products, and services. Check out our privacy policy here.</p>
                </div>
                <div>
                    <input type="text" name="" id="" placeholder='Ask me anything...' />
                    <span><LuSend /></span>
                </div>
                <p>AI-generated content may be inaccurate.</p>

            </div>
        </div>
    )
}

export default HubBot
