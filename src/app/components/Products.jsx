import Link from 'next/link'
import React from 'react'
import ProductList from './ProductList'

const Products = () => {
    return (
        <>
            <section className='font-hubot'>
                <div className='max-w-[1100px] mx-auto'>
                    <div className='flex'>
                        <div className='w-[30%] '>
                            <div className='flex border border-[#D9D9D8] rounded-sm px-2 py-1.5 text-center font-semibold text-sm bg-white'>
                                <img className='' src="https://www.hubspot.com/hubfs/DO%20NOT%20USE%20-%20WBZ%202025%20Rebrand-%20contact%20Teenie%20Rose%20for%20usage/Hub%20Logos/AI%20Sparkle.svg" alt="iconlogo" />
                                <span className=''>Powered by AI</span>
                            </div>
                            <h2>Growing a business is hard. HubSpot makes it easier.</h2>
                            <p>Disconnected tools and data slow you down. HubSpot connects everything — and everyone — in one place to make growing a business easier than you think.</p>
                            <div className='flex sm:flex-row flex-col items-center justify-center gap-4 sm:gap-3 w-full pt-5 font-semibold'>
                                <Link className='bg-[#FF4800] hover:bg-[#C93700] px-9 py-4.5 rounded-md sm:w-auto w-full block duration-300 text-white' href={``}>Get a demo</Link>
                                <Link className='border-2 border-[#FF4800] text-[#FF4800] bg-white hover:bg-[#FCECE6]  px-9 py-4.5 rounded-md sm:w-auto w-full block duration-300' href={``}>Get started free</Link>
                            </div>
                        </div>
                        <div className='w-[70%]'>
                            <ProductList />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products
