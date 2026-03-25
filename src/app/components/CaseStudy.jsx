'use client'
import React from 'react'
import { caseStudy } from '../data/home/caseStudy'
import Link from 'next/link'

const CaseStudy = () => {
    return (
        <>
            <section className='bg-[#FCFCFA] py-15 font-hubot lg:px-0 px-5 tracking-wide'>
                <div className='lg:max-w-[1100px] mx-auto'>
                    <div className='flex sm:flex-row flex-col items-start sm:gap-0 gap-5 sm:items-center justify-start sm:justify-between'>
                        <span className='border border-[#D9D9D8] rounded-sm px-2 py-1.5 text-center font-semibold text-sm bg-white'>Case Studies</span>
                        <Link className='px-5 py-3.5 rounded-md sm:w-auto duration-300 sm:w-auto w-full text-center font-semibold border-2 border-black hover:bg-[#eeeeed] block' href={``}>See all case studies</Link>
                    </div>
                    <div className='flex sm:flex-row flex-col gap-5 justify-between py-10'>
                        <h2 className='lg:text-[40px] text-[32px] font-medium leading-10 lg:leading-11 lg:w-[40%] sm:w-1/2 w-full'>{caseStudy.title}</h2>
                        <p className='lg:w-[40%] sm:w-1/2 w-full '>{caseStudy.description}</p>
                    </div>
                    <div className='flex gap-1 justify-center items-center px-1'>
                        {caseStudy.links.map((link, index) => (
                            <button className={`${index === 0 ? 'border-b border-b-4 border-[#FF4800]' : ''} font-semibold hover:bg-[#eeeeed] duration-300 py-2 px-4 block`} key={index}>{link}</button>
                        ))}
                    </div>
                    <div className='py-8'>
                        <div className='w-full rounded-2xl border border-[#D9D9D8] p-5'>
                            <div className='flex 2md:flex-row flex-col gap-10 items-center justify-between'>
                                <img className='object-cover rounded-sm h-[400px] 2md:w-auto w-full' src={caseStudy.heroimg} alt="heroimg" />
                                <div className='flex flex-col gap-5'>
                                    <p className='leading-7'>{caseStudy.herodescription}</p>
                                    <div className='flex flex-col'>
                                        <span className='font-semibold'>{caseStudy.name}</span>
                                        <span>{caseStudy.name}</span>
                                        <Link className='underline decoration-2 decoration-[#FF4800] underline-offset-5 hover:underline-offset-2 duration-300 font-semibold' href={``}>Read full case study</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='flex sm:flex-row flex-col pb-5 pt-10 justify-around items-center text-center gap-4'>
                                {caseStudy.number?.map((item, index) => (
                                    <div key={index}>
                                        <h3 className='lg:text-[40px] text-[32px] font-medium'>{item.number}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CaseStudy
