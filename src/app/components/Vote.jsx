import React from 'react'
import { voteImgae } from '../data/home/caseStudy'

const Vote = () => {
    return (
        <>
            <section className='lg:px-0 px-5 bg-[#FCFCFA] py-10 2md:py-15 lg:py-20'>
                <div className='lg:max-w-[1000px] mx-auto flex 2md:flex-row flex-col 2md:gap-10 gap-5 lg:gap-15 items-center justify-center text-center'>
                    <h3 className='text-2xl font-semibold'>Voted #1 in 526 G2 Reports</h3>
                    <div className='flex flex-wrap items-center justify-center gap-5 lg:gap-8'>
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
