'use client'
import React from 'react'
import Link from 'next/link';

const LeftSide = () => {
    return (
        <>
            <div className='border-r border-[#bab9b9]'>
                <h2 className='pb-4 text-[#eeeded] text-sm font-semibold'>Popular Features</h2>
                <div className='grid grid-cols-2 '>
                    <ul className='flex flex-col gap-3'>
                        {popularFeatures.firstFeature?.map((item, index) => (
                            <li key={index} className='text-[12px] hover:text-[#eeeded] hover:underline font-semibold '>
                                <Link className='block' href={``}>{item}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        {popularFeatures.secondFeature?.map((item, index) => (
                            <li key={index} className='text-[12px] hover:text-[#eeeded] hover:underline font-semibold '>
                                <Link href={``}>{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default LeftSide
