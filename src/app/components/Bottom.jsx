import Link from 'next/link'
import React from 'react'

const Bottom = () => {
    return (
        <>
            <section className='lg:px-0 px-5 bg-[#042729] text-white py-10 2md:py-15 lg:py-18'>
                <div className='lg:max-w-[1000px] mx-auto space-y-5 '>
                    <h2 className='lg:text-5xl sm:text-4xl text-3xl  font-medium '>Make impossible growth feel impossibly easy, with HubSpot</h2>
                    <div className='flex sm:flex-row flex-col items-center gap-4 sm:gap-5 w-full pt-5 font-semibold text-center'>
                        <Link className='bg-[#FF4800] hover:bg-[#C93700] px-5 py-3.5 2md:py-4 rounded-md sm:w-auto w-full block duration-300 text-white' href={``}>Get a demo</Link>
                        <Link className='border-2 border-white  bg-transparen hover:text-[#FF4800] hover:border-[#FF4800]  px-5 py-3.5 2md:py-4 rounded-md sm:w-auto w-full block duration-300' href={``}>Get started free</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bottom
