import React from 'react'
import { voteImgae } from '../data/home/caseStudy'

const Vote = () => {
    return (
        <>
            <section className='lg:px-0 px-5 bg-[#FCFCFA]'>
                <div className='lg:max-w-[1000px] mx-auto flex gap-15 items-center'>
                    <h3 className='text-2xl font-semibold'>Voted #1 in 526 G2 Reports</h3>
                    <div className='grid lg:grid-cols-6 justify-between gap-8'>
                        {voteImgae.map((image, index) => (
                            <img key={index} src={image} alt="image" />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Vote
