
'use client'
import React from 'react'
import { BiSolidCircleHalf } from "react-icons/bi";

const Pricing = ({ product }) => {
    return (
        <>
            <section className='bg-[#F8F5EE] font-hubot sm:py-20 py-15 lg:py-20 lg:px-0 px-5'>
                <div className=' lg:max-w-[1100px] mx-auto'>
                    <div>
                        <h2 className='text-[40px]'>Grow Without Limits: Marketing Hub Pricing</h2>
                        <p>Marketing software that scales with you.</p>
                    </div>
                    <div>
                        <div>
                            <span className='text-[#FF4800] '><BiSolidCircleHalf /></span>
                            <h3>Free</h3>
                            <ul>
                                <li>
                                    <span></span>
                                    <span>{product.freepricingdetails}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing
