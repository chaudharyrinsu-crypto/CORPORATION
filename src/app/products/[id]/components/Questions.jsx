'use client'
import React from 'react'
import { LiaAngleDownSolid } from "react-icons/lia";

const Questions = ({product}) => {
  return (
    <>
      <section className='font-hubot bg-[#FCFCFA] py-20'>
        <div className=' lg:max-w-[1100px] mx-auto font-semibold'>
            <h2 className='text-2xl pb-10'>Frequently Asked Questions</h2>
            <div className='grid grid-cols-2 justify-between gap-5'>
            {product.questions?.map((question,index)=>(
                <div className='text-[18px] border border-[#D9D9D8] rounded-2xl p-5 flex justify-between '>
                    <h3>{question}</h3>
                    <span><LiaAngleDownSolid /></span>
                </div>
            ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default Questions
