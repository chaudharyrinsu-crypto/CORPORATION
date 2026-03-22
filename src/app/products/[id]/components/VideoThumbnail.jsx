'use client'
import React from 'react'
import { FaPlay } from "react-icons/fa";

const VideoThumbnail = ({ product }) => {
    return (
        <>
            <div className='w-full relative'>
                <img className='object-cover w-full h-full' src={product.video.thumbnail} alt="thumbnail" />
                <div className='group '>
                    <div className="after:absolute after:content-[''] after:bg-[#FF4800] after:w-[180px] after:h-[180px] after:rounded-full after:opacity-80 after:z-10 flex justify-center items-center after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 group-hover:after:opacity-100 after:duration-300">
                        <span className='text-7xl opacity-80 group-hover:opacity-100 duration-300 absolute z-20 text-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'><FaPlay /></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoThumbnail
