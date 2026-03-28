import React from 'react'
import { hubBot } from '../data/home/hubBot'
import { LuSend } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const HubBot = () => {
    return (
        <>
            <div className='max-w-[400px]'>
                <div className='bg-[#1F1F1F] text-white flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <div className='relative'>
                            <img className='h-10' src={hubBot.logo} alt="logo" />
                            <span className='absolute right-0 bottom-1 h-3 w-3 border-2 border-white bg-green-400 rounded-full'></span>
                        </div>
                        <h2 className='font-semibold'>{hubBot.title}</h2>
                    </div>
                    <span className='text-3xl'><RxCross2 /></span>
                </div>
                <div className='flex'>
                    <img className='h-8' src={hubBot.logo} alt="logo" />
                    <div>
                        <p>{hubBot.firstdescription}</p>
                        <p>{hubBot.seconddescription}</p>
                        <div className='grid grid-cols-2'>
                            {hubBot.features?.map((feature, index) => (
                                <span key={index}>{feature}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <input type="text" name="" id="" placeholder='Ask me anything...' />
                    <span><LuSend /></span>
                </div>
                <p>AI-generated content may be inaccurate.</p>

            </div>
        </>
    )
}

export default HubBot
