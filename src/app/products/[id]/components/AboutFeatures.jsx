import Link from 'next/link'
import React from 'react'

const AboutFeatures = ({ product }) => {
    return (
        <>
            <section className='font-hubot sm:py-15 py-10 lg:py-20'>
                <div className='lg:px-0 px-5 lg:max-w-[1100px] mx-auto'>
                    <div className='flex gap-8 lg:gap-15 flex-col lg:flex-row'>
                        <div className=''>
                            <h2 className='text-2xl font-semibold'>See why companies like to work with <span>{product.name}.</span></h2>
                            <Link className='underline decoration-2 decoration-[#FF4800] underline-offset-5 hover:underline-offset-2 duration-300 font-semibold pt-2 block' href={``}>Download the ROI report</Link>
                        </div>
                        <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 2md:grid-cols-3 '>
                            {product.growth.map((item, index) => (
                                <div key={index} className='border-l border-[#D9D9D8] pl-5'>
                                    <h3 className='2md:text-[40px] text-[30px] font-medium'>{item.number}</h3>
                                    <p className='tracking-wide 2md:text-[16px] text-sm'>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutFeatures
