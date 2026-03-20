'use client'
import Link from 'next/link'
import React from 'react'
import { products } from '../data/products';
import { LiaAngleDownSolid } from "react-icons/lia";

const SecNavProductList = () => {
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 py-4'>
                {products.map((items, index) => (
                    <div key={index} className='group hover:bg-[#eeeeed] duration-300 lg:p-3 rounded-xl'>
                        <Link className='flex gap-3 items-center justify-between' href={``}>
                            <div className='flex gap-3 lg:items-start items-center'>
                                <img className='h-6' src={items.logo} alt="logo" />
                                <div className='flex flex-col gap-1'>
                                    <h2 className='font-semibold text-[16px]'>{items.name}</h2>
                                    <span className='font-normal text-sm lg:text-[12px] block'>{items.category}</span>
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

export default SecNavProductList
