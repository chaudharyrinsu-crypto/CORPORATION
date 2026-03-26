'use client'
import React from 'react'
import Link from 'next/link';
import { popularFeatures } from '@/app/data/home/footer';

const RightSide = () => {
  return (
    <>
      <div className='grid grid-cols-3'>
                            <div className='border-r border-[#bab9b9]'>
                                <h2 className='pb-4 text-[#eeeded] text-sm font-semibold'>Free Tools</h2>
                                <div className='grid grid-cols-2'>
                                    <ul className='flex flex-col gap-3'>
                                        {popularFeatures.freeTools?.map((item, index) => (
                                            <li key={index} className='text-[12px] hover:text-[#eeeded] hover:underline font-semibold '>
                                                <Link className='block' href={``}>{item}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='border-r border-[#bab9b9]'>
                                <h2 className='pb-4 text-[#eeeded] text-sm font-semibold'>Company</h2>
                                <div className='grid grid-cols-2'>
                                    <ul className='flex flex-col gap-3'>
                                        {popularFeatures.company?.map((item, index) => (
                                            <li key={index} className='text-[12px] hover:text-[#eeeded] hover:underline font-semibold '>
                                                <Link href={``}>{item}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='border-r border-[#bab9b9]'>
                                <div>
                                    <h2 className='pb-4 text-[#eeeded] text-sm font-semibold'>Customers</h2>
                                    <div className='grid grid-cols-2'>
                                        <ul className='flex flex-col gap-3'>
                                            {popularFeatures.customer?.map((item, index) => (
                                                <li key={index} className='text-[12px] hover:text-[#eeeded] hover:underline font-semibold '>
                                                    <Link className='block' href={``}>{item}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className='border-r border-[#bab9b9]'>
                                    <h2 className='pb-4 text-[#eeeded] text-sm font-semibold'>Partners</h2>
                                    <div className='grid grid-cols-2'>
                                        <ul className='flex flex-col gap-3'>
                                            {popularFeatures.partner?.map((item, index) => (
                                                <li key={index} className='text-[12px] hover:text-[#eeeded] hover:underline font-semibold '>
                                                    <Link className='block' href={``}>{item}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
    </>
  )
}

export default RightSide
