'use client'
import Link from 'next/link'
import React from 'react'

const BottomPart = ({ product }) => {
    return (
        <>
            <section className='bg-[#F8F5EE] py-5 font-hubot lg:px-0 px-5'>
                <div className='lg:max-w-[1100px] mx-auto flex sm:flex-row flex-col justify-between items-center sm:gap-0 gap-3'>
                    <div className='flex flex-col gap-4 sm:order-1 order-2'>
                        <h2 className='text-2xl font-semibold'>{product.demo?.title}</h2>
                        <p>{product.demo?.description}</p>
                        <div className='flex 2md:flex-row flex-col 2md:items-center items-start gap-5 sm:gap-3 w-full font-semibold py-3 text-center'>
                            <Link className='bg-[#FF4800] hover:bg-[#C93700] px-9 py-4.5 rounded-md sm:w-auto w-full block duration-300 text-white' href={``}>Get a Demo</Link>
                            <Link className='border-2 border-[#FF4800] text-[#FF4800] bg-white hover:bg-[#FCECE6]  px-9 py-4.5 rounded-md sm:w-auto w-full block duration-300' href={``}>Start 14-day free trial</Link>
                        </div>
                    </div>
                    <img className='sm:order-2 order-1 md:w-auto max-w-[300px]' src={product.demo?.image} alt="image" />
                </div>
            </section>
        </>
    )
}

export default BottomPart
