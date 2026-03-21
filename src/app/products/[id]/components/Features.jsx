'use client'
import React from 'react'

const Features = ({ product }) => {
    return (
        <>
            <div className='grid grid-cols-4'>
                {product?.solutions?.[0]?.features?.map((item, index) => (
                    <div key={index} className='p-5 border-l border-[#D9D9D8]'>
                        <div>
                            <img className='h-8 object-cover' src={item.logo} alt="" />
                            <div>
                                <h3 className='font-semibold'>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Features
