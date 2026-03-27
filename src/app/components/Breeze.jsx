'use client'
import Link from 'next/link'
import React from 'react'
import { LiaAngleDownSolid } from "react-icons/lia";
import { breeze } from '../data/breeze';

const Breeze = () => {
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 py-4'>
                {breeze.map((items, index) => (
                    <div key={index} className='group hover:bg-[#eeeeed] duration-300 lg:p-3 rounded-xl'>
                        <Link className='flex gap-3 items-center justify-between' href={``}>
                            <div className='flex gap-3 lg:items-start items-center'>
                                <img className='h-6' src={items.logo} alt="logo" />
                                <div className='flex flex-col gap-1'>
                                    <h3 className='font-semibold text-[16px]'>{items.title}</h3>
                                    <span className='font-normal text-sm lg:text-[12px] block'>{items.description}</span>
                                    <span className='lg:block hidden text-[12px] font-semibold underline decoration-2 underline-offset-4 duration-300 group-hover:underline-offset-2'>Free and premium plans</span>
                                </div>
                            </div>
                            <span className={`lg:hidden block transition-transform duration-300 -rotate-90 text-[16px] sm:text-xl`}><LiaAngleDownSolid /></span>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Breeze
