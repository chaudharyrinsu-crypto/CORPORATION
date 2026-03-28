'use client'
import React from 'react'

const Features = ({ product }) => {
    return (
        <>
            <div className='flex sm:flex-row flex-col gap-5 items-center justify-between'>
                <img className='sm:w-[50%] w-full' src={product?.solutions?.[0]?.aboutimg} alt="aboutimg" />
                <div className='flex flex-col gap-2 items-start sm:w-[50%] w-full'>
                    <h2 className='text-2xl font-semibold'>{product?.solutions?.[0]?.title}</h2>
                    <p className='leading-7'>{product?.solutions?.[0]?.description}</p>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 2md:gap-4 gap-5 2md:grid-cols-4'>
                {product?.solutions?.[0]?.features?.map((item, index) => (
                    <div key={index} className='p-5 border-l border-[#D9D9D8] group hover:bg-[#eeeeed] duration-300'>
                        <div className='flex gap-4'>
                            <img className='h-8 object-cover' src={item.logo} alt="" />
                            <div className='flex flex-col gap-1.5 items-start justify-start lg:text-[16px] text-sm'>
                                <h3 className='font-semibold group-hover:underline duration-300'>{item.title}</h3>
                                <p className='font-normal'>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Features
