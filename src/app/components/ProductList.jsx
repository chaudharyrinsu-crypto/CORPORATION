import React from 'react'
import { products } from '../data/products'
import { GoCheck } from "react-icons/go";
import Link from 'next/link';
import { HiArrowRight } from "react-icons/hi2";

const ProductList = () => {
    return (
        <>
            <div className='flex flex-col gap-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 '>
                    {products.map((item, i) => (
                        <Link href={`/products/${item.id}`} key={i} className='bg-white border border-[#D9D9D8] rounded-2xl p-7 group hover:bg-[#eeeeed] duration-300'>
                            <div className='flex gap-2 border-b border-dashed border-[#D9D9D8] pb-4'>
                                <img className='h-6' src={item.logo} alt="logo" />
                                <h3 className='font-semibold'>{item.heading}</h3>
                            </div>
                            <div className='border-b border-dashed border-[#D9D9D8] py-4'>
                                {item.features?.map((feature, index) => (
                                    <div key={index} className=''>
                                        <div className='flex gap-2 tracking-wide'>
                                            <span className='text-[18px] text-[#FF4800]'><GoCheck /></span>
                                            <p className='text-sm'>{feature}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='flex items-center gap-2 font-medium pt-4'>
                                <span className='text-sm'>Learn more</span>
                                <span className='group-hover:translate-x-1.5 duration-300 font-normal'><HiArrowRight /></span>
                            </div>
                        </Link>
                    ))}
                </div>
                <Link href={``} className='bg-white border border-[#D9D9D8] rounded-2xl p-7 group hover:bg-[#eeeeed] duration-300'>
                    <div className='border-b border-dashed border-[#D9D9D8] pb-4'>
                        <h3 className='font-semibold'>Small Business bundle</h3>
                    </div>
                    <div className='border-b border-dashed border-[#D9D9D8] py-4'>
                        <div className=''>
                            <div className='flex gap-2 tracking-wide'>
                                <span className='text-[18px] text-[#FF4800]'><GoCheck /></span>
                                <p className='text-sm'>The starter edition of each product, at on low price.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 font-medium pt-4'>
                        <span className='text-sm'>Learn more</span>
                        <span className='group-hover:translate-x-1.5 duration-300 font-normal'><HiArrowRight /></span>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductList
