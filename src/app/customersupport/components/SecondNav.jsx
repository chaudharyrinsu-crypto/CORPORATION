import React from 'react'
import Link from 'next/link'
import { RiArrowDownSLine } from "react-icons/ri";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const SecondNav = () => {
  return (
    <>
       <div className='lg:order-2 order-1 text-[#2e2e2e] lg:px-0 px-5 font-semibold font-hubot tracking-wide bg-white lg:bg-[#FCFCFA] py-8 '>
                    <div className='max-w-[1100px] mx-auto'>
                        <div className='flex lg:flex-row flex-col justify-between items-center'>
                            <div className='flex gap-2 lg:gap-3 items-center'>
                                <Link href={`/`}><img className='lg:h-7 h-6' src="/logo.svg" alt="" /></Link>
                                <span className='text-xl lg:text-2xl'>Help Center</span>
                            </div>
                            <ul className='flex lg:flex-row flex-col gap-10 lg:gap-8 justify-between items-center lg:w-auto w-full lg:text-[16px] text-[18px]'>
                                <li className='flex lg:gap-1.5 justify-between items-center cursor-pointer lg:w-auto w-full'>
                                    <span className='hover:underline'>Software</span>
                                    <span className='text-[#797979] hidden lg:block'><RiArrowDownSLine /></span>
                                    <span className='text-2xl lg:hidden block'><MdOutlineArrowForwardIos /></span>
                                </li>
                                <li className='flex lg:gap-1.5 justify-between items-center cursor-pointer lg:w-auto w-full'>
                                    <span className='hover:underline lg:order-2 order-1'>Pricing</span>
                                </li>
                                <li className='lg:w-auto w-full'>
                                    <Link className='flex lg:gap-1.5 justify-between items-center ' href={``}>
                                        <span className='hover:underline'>Resources </span>
                                        <span className='hidden lg:block text-[#797979]'><RiArrowDownSLine /></span>
                                        <span className='text-2xl lg:hidden block'><MdOutlineArrowForwardIos /></span>
                                    </Link>
                                </li>
                                <li className='lg:w-auto w-full'>
                                    <Link className='flex lg:gap-1.5 justify-between items-center' href={``}>
                                        <span className='hover:underline'>Partners </span>
                                        <span className='hidden lg:block text-[#797979]'><RiArrowDownSLine /></span>
                                        <span className='text-2xl lg:hidden block'><MdOutlineArrowForwardIos /></span>
                                    </Link>
                                </li>
                                <li className='lg:w-auto w-full'>
                                    <Link className='flex lg:gap-1.5 justify-between items-center' href={``}>
                                        <span className='hover:underline'>About </span>
                                    </Link>
                                </li>
                                <li className='lg:hidden flex text-center text-sm flex-col gap-4 w-full'>
                                    <Link className='bg-[#FF4800] hover:bg-[#C93700] duration-500 text-white px-4.5 py-3 rounded-md lg:w-auto' href={``}>Get a demo</Link>
                                    <Link className='border-2 hover:bg-[#FCECE6] hover:border-[#C93700] border-[#FF4800] hover:text-[#C93700] text-[#FF4800] px-4.5 py-3 rounded-md lg:w-auto  duration-500 ' href={``}>Start 14-day free trial</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
    </>
  )
}

export default SecondNav
