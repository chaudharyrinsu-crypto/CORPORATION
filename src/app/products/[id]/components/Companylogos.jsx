import React from 'react'

const Companylogos = ({ product }) => {
    return (
        <>
            <div className=' lg:max-w-[1100px] mx-auto'>
                <div className='grid lg:gap-0 gap-10 lg:grid-cols-7 2md:grid-cols-4 md:grid-cols-3 grid-cols-2 items-center lg:justify-start justify-center'>
                {product?.companylogos?.map((logo,index)=>(
                    <div key={index} className=''>
                        <img className='lg:w-[120px] w-[150px] object-cover' src={logo} alt="logos" />
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}

export default Companylogos
