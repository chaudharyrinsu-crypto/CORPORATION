'use client'
import React from 'react'
import Features from './Features'

const FirstSolutionAbout = ({ product }) => {
  return (
    <>
      <section className='font-hubot bg-[#FCFCFA] p-0'>
        <div className='lg:max-w-[1100px] mx-auto px-5 lg:px-0'>
          <div className='flex sm:flex-row flex-col gap-5 items-center justify-between'>
            <img className='sm:w-[50%] w-full' src={product?.solutions?.[0]?.aboutimg} alt="aboutimg" />
            <div className='flex flex-col gap-2 items-start sm:w-[50%] w-full'>
              <h2 className='text-2xl font-semibold'>{product?.solutions?.[0]?.title}</h2>
              <p className='leading-7'>{product?.solutions?.[0]?.description}</p>
            </div>
          </div>
          <Features product={ product }/>
        </div>
      </section>
    </>
  )
}

export default FirstSolutionAbout
