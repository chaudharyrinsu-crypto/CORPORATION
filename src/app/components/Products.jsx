import Link from 'next/link'
import React from 'react'
import ProductList from './ProductList'

const Products = () => {
    return (
        <>
            <section className='font-hubot bg-[#FCFCFA] sm:pb-20 pb-15 lg:pb-25 tracking-wide'>
                <div className='lg:px-0 sm px-5 sm:max-w-[1100px] mx-auto '>
                    <div className='flex 2md:flex-row flex-col gap-7'>
                        <div className='2md:w-[30%] w-auto bg-[#FCFCFA] flex flex-col justify-start gap-6 sm:sticky 2md:top-6 top-0 self-start'>
                            <div className='flex items-center justify-center border border-[#D9D9D8] rounded-sm px-2 py-1.5 text-center font-semibold text-sm bg-white max-w-[150px]'>
                                <img className='' src="https://www.hubspot.com/hubfs/DO%20NOT%20USE%20-%20WBZ%202025%20Rebrand-%20contact%20Teenie%20Rose%20for%20usage/Hub%20Logos/AI%20Sparkle.svg" alt="iconlogo" />
                                <span className=''>Powered by AI</span>
                            </div>
                            <h2 className='lg:text-[40px] text-[32px] font-medium leading-11'>Growing a business is hard. HubSpot makes it easier.</h2>
                            <p>Disconnected tools and data slow you down. HubSpot connects everything — and everyone — in one place to make growing a business easier than you think.</p>
                            <div className='flex lg:flex-row flex-col items-start lg:items-center gap-4 sm:gap-3 w-full pt-5 font-semibold text-center'>
                                <Link className='bg-[#FF4800] hover:bg-[#C93700] px-5 py-3.5 2md:py-4 rounded-md sm:w-auto w-full block duration-300 text-white' href={``}>Get a demo</Link>
                                <Link className='border-2 border-[#FF4800] text-[#FF4800] bg-white hover:bg-[#FCECE6]  px-5 py-3.5 2md:py-4 rounded-md sm:w-auto w-full block duration-300' href={``}>Get started free</Link>
                            </div>
                        </div>
                        <div className='2md:w-[70%] w-auto'>
                            <ProductList />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products
