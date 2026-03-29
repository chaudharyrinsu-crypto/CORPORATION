import React from 'react'

const Companylogos = ({ product }) => {
    return (
        <>
            <div className=' lg:max-w-[1100px] mx-auto'>
                <div className={`
                ${product?.companylogos?.length > 8
                        ? 'lg:grid-cols-7 2md:grid-cols-4 md:grid-cols-3 grid-cols-2'
                        : 'lg:grid-cols-6 2md:grid-cols-4 md:grid-cols-3 grid-cols-2'} 
                ${product?.companylogos?.length > 9
                        ? 'lg:grid-cols-8 2md:grid-cols-4 md:grid-cols-3 grid-cols-2'
                        : 'lg:grid-cols-7 2md:grid-cols-4 md:grid-cols-3 grid-cols-2'}  
                grid lg:gap-0 gap-10  items-center lg:justify-evenly justify-center`}>
                    {product?.companylogos?.map((logo, index) => (
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
