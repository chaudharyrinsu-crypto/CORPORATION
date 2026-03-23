
'use client'
import React from 'react'

const Pricing = ({ product }) => {
    return (
        <>
            <section className='bg-[#F8F5EE] font-hubot sm:py-20 py-15 lg:py-20 lg:px-0 px-5'>
                <div className=' lg:max-w-[1100px] mx-auto'>
                    <div>
                        <h2 className='text-[40px]'>Grow Without Limits: {product.name} Pricing</h2>
                        <p>Marketing software that scales with you.</p>
                    </div>
                    <div className='grid grid-cols-4'>
                        <div className='border'>
                            <div>
                                {product?.pricingiconsimage?.map((image, index) => (
                                    <img key={index} src={image} alt="iconimage" />
                                ))}
                                {product?.pricingtitle?.map((title, index) => (
                                    <h2 key={index}>{title}</h2>
                                ))}
                                {product?.pricingstatrswith?.map((title, index) => (
                                    <span key={index}>{title}</span>
                                ))}
                                {product?.pricingmonth?.map((month, index) => (
                                    <h3 key={index}>{month}</h3>
                                ))}
                            </div>
                            <div>
                                {product?.freepricingdetails?.map((details, index) => (
                                    <p key={index}>{details}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing
