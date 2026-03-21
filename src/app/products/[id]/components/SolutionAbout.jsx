'use client'
import React from 'react'
import FirstSolutionAbout from './FirstSolutionAbout'

const SolutionAbout = ({ product }) => {
    return (
        <>
            <section className='lg:py-25 sm:py-20 py-15 px-5 lg:px-0 bg-[#FCFCFA] font-hubot'>
                <div className='lg:max-w-[1100px] mx-auto'>
                    <span className='border border-[#D9D9D8] rounded-sm px-2 py-1.5 text-center font-semibold text-sm bg-white'>Business Solutions</span>
                    <div className='flex sm:flex-row flex-col gap-5 sm:gap-10 md:gap-20 lg:gap-50 items-start pt-10'>
                        <h2 className='lg:text-4xl text-3xl font-medium lg:leading-11 leading-9 w-[95%] sm:w-[50%] lg:w-[40%] '>{product?.solutiontitle}</h2>
                        <p className='leading-7 tracking-wide w-[95%] sm:w-[50%] lg:w-[40%] '>{product?.solutiondescription}</p>
                    </div>
                </div>
            </section>
            <FirstSolutionAbout product={product}/>
        </>
    )
}

export default SolutionAbout
