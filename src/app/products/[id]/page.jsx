
'use client'
import { products } from '@/app/data/products'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'
import { LiaAngleDownSolid } from "react-icons/lia";
import SolutionAbout from './components/SolutionAbout'

const page = () => {
  const params = useParams()
  const { id } = params
  const product = products.find(product => product.id.toString() === id)

  return (
    <>
      <section className='bg-[#F8F5EE] font-hubot border-b border-[#D9D9D8] text-center'>
        <div className='max-w-[1100px] sm:justify-start justify-center mx-auto py-5 lg:px-0 px-5 text-sm font-semibold flex gap-2 items-center'>
          <Link className='inline-block underline underline-offset-2 decoration-1' href={`/`}>Home</Link>
          <span className={`inline-block -rotate-90  text-[12px]`}><LiaAngleDownSolid /></span>
          <h2 className='text-[#5E5D5B]'>{product.name}</h2>
        </div>
        <div className='sm:pt-20 xs:pt-5 pt-3 px-5 flex flex-col gap-3 lg:gap-6 items-center justify-center'>
          <div className='flex gap-2 lg:gap-3 items-center justify-center'>
            <img className='h-9' src={product.logo} alt="logo" />
            <p className='text-[18px]'>{product.heading}</p>
          </div>
          <h2 className='lg:text-5xl text-4xl font-medium'>{product.title}</h2>
          <p className='text-[18px] tracking-wide text-center'>{product.description}</p>

          <div className='flex sm:flex-row flex-col items-center justify-center gap-4 sm:gap-3 w-full font-semibold py-3'>
            <Link className='bg-[#FF4800] hover:bg-[#C93700] px-9 py-4.5 rounded-md sm:w-auto w-full block duration-300 text-white' href={``}>Get a demo</Link>
            <Link className='border-2 border-[#FF4800] text-[#FF4800] bg-white hover:bg-[#FCECE6]  px-9 py-4.5 rounded-md sm:w-auto w-full block duration-300' href={``}>Start 14-day free trial</Link>
          </div>
          <img className='2md:h-44 h-full w-full lg:w-[90%] object-cover object-top rounded-sm pt-2' src={product.heroImage} alt="heroImage" />
        </div>
      </section>
      <SolutionAbout product={product}/>
    </>
  )
}

export default page
