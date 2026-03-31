'use client'
import React from 'react'
import Features from './Features'
import SecFeatures from './SecFeatures'
import ThirdFeatures from './ThirdFeatures'

const FirstSolutionAbout = ({ product }) => {
  return (
    <>
      <section className='font-hubot bg-[#FCFCFA] p-0  text-black'>
        <div className='lg:max-w-[1100px] mx-auto px-5 lg:px-0'>

          <Features product={product} />
          <SecFeatures product={product} />
          <ThirdFeatures product={product} />
        </div>
      </section>
    </>
  )
}

export default FirstSolutionAbout
