import Link from 'next/link'
import React from 'react'
import { secondSlider } from '../data/home/slider'

const SecSlider = () => {
  return (
    <>
      <section className='bg-gradient-to-r from-[#FCCCD1] via-[#FBDED8] to-[#FDB89C] py-20 font-hubot'>
        <div className='lg:px-0 px-5 sm:max-w-[1100px] mx-auto'>
          <div className='flex sm:gap-0 gap-5 sm:flex-row flex-col justify-start sm:justify-between items-start sm:items-center'>
            <div className='bg-white border border-[#D9D9D8] rounded-2xl px-4 py-3.5'>
              <img className='' src={secondSlider.logo} alt="logo" />
            </div>
            <Link className='px-5 py-3.5 rounded-md sm:w-auto duration-300 sm:w-auto w-full text-center font-semibold border-2 border-black hover:bg-[#eeeeed] block' href={``}>Explore Breeze Agents</Link>
          </div>
          <div className='flex justify-between items-center py-9'>
            <h2 className='lg:text-[40px] text-[32px] font-medium leading-11 justify-between w-[40%]'>{secondSlider.title}</h2>
            <p className='tracking-wide w-[40%] leading-7'>{secondSlider.description}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default SecSlider
