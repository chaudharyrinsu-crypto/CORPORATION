'use client'
import React from 'react'
import { FaPlay } from "react-icons/fa";

const VideoThumbnail = ({ product }) => {
    return (
        <>
        <section className='sm:pt-15 pt-10 lg:pt-20'>
            <div className='w-full lg:max-w-[1100px] mx-auto relative'>
                <img className='object-cover w-full h-full' src={product.video.thumbnail} alt="thumbnail" />
                <div className='group'>
                    <div className="after:absolute after:content-[''] after:bg-[#FF4800] lg:after:w-[180px] lg:after:h-[180px] after:h-[80px] after:w-[80px] sm:after:h-[120px] sm:after:w-[120px] after:rounded-full after:opacity-80 after:z-10 flex justify-center items-center after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 group-hover:after:opacity-100 after:duration-300">
                        <span className='lg:text-7xl sm:text-5xl text-3xl opacity-80 group-hover:opacity-100 duration-300 absolute z-20 text-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'><FaPlay /></span>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default VideoThumbnail
