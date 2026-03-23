'use client'
import React from 'react'
import { logos } from '../data/home/companyLogos'

const CompanyLogo = () => {
  return (
    <>
      <section className=''>
        <div className='max-w-[1100px] mx-auto lg:px-0 px-5 space-y-4'>
          <p className='text-[22px] font-semibold'>288,000+ customers in over 135 countries grow their businesses with HubSpot.</p>
          <div className='grid grid-cols-5 gap-4 '>
            {logos.map((logo, index) => (
              <div key={index} className=''>
                <img
                  src={logo}
                  alt="logo"
                  className=' object-cover'
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CompanyLogo
