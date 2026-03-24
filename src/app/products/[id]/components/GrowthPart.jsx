'use client'
import Link from 'next/link'
import React from 'react'
import VideoThumbnail from './VideoThumbnail'
import AboutFeatures from './AboutFeatures'
import Companylogos from './Companylogos'

const GrowthPart = ({ product }) => {
  return (
    <>
      <section className='bg-[#FCFCFA] font-hubot sm:py-20 py-15 lg:py-20 lg:px-0 px-5'>
        <div className='max-w-[1100px] mx-auto relative'>
          <div className='flex sm:gap-0 gap-5 sm:flex-row flex-col justify-start sm:justify-between items-start sm:items-center'>
            <span className='border border-[#D9D9D8] rounded-sm px-2 py-1.5 text-center font-semibold text-sm bg-white block'>Customer Proof</span>
            <Link className='px-5 py-3.5 rounded-md sm:w-auto duration-300 sm:w-auto w-full text-center font-semibold border-2 border-black hover:bg-[#eeeeed] block' href={``}>Explore case studies</Link>
          </div>
          <div className='pt-7 flex sm:gap-0 gap-4 justify-start sm:justify-between sm:flex-row flex-col '>
            <h2 className='lg:text-4xl sm:text-3xl text-2xl font-semibold w-full sm:w-1/2 2md:w-[40%]'>Real Growth, Real Stories</h2>
            <p className='font-medium tracking-wide w-full sm:w-1/2 2md:w-[40%]'>See how marketing teams are using AI tools to scale their marketing efforts.</p>
          </div>
        </div>
        <VideoThumbnail product={product} />
        <AboutFeatures product={product} />
        <Companylogos product={product}/>
      </section>

    </>
  )
}

export default GrowthPart
