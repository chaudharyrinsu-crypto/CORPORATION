import React from 'react'
import { products } from '../data/products'
import { GoCheck } from "react-icons/go";
import Link from 'next/link';
import { GoArrowRight } from "react-icons/go";

const ProductList = () => {
    return (
        <>
            <div className='grid grid-cols-2 gap-6'>
                {products.map((item, i) => (
                    <Link href={`/products/${item.id}`} key={i} className='border border-[#D9D9D8] rounded-2xl p-7 group'>
                        <div className='flex gap-2 border-b border-dashed border-[#D9D9D8] pb-4'>
                            <img className='h-6' src={item.logo} alt="logo" />
                            <h3 className='font-semibold'>{item.heading}</h3>
                        </div>
                        <div className='border-b border-dashed border-[#D9D9D8]'>
                            {item.features?.map((feature, index) => (
                                <div key={index} className='rounded-2xl'>
                                    <div className='flex gap-2 tracking-wide py-1  '>
                                        <span className='text-[18px] text-[#FF4800]'><GoCheck /></span>
                                        <p className='text-sm'>{feature}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex items-center gap-2 font-medium'>
                            <span className='text-sm'>Learn more</span>
                            <span className='group-hover:translate-x-1 duration-300'><GoArrowRight /></span>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default ProductList
