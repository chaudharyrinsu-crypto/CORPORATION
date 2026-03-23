'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import { useRef, useState } from 'react'

// Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import Link from 'next/link'
import { LiaAngleLeftSolid } from "react-icons/lia";
import { LiaAngleRightSolid } from "react-icons/lia";
import { slider } from '../data/home/slider'

const Slider = () => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)

    return (
        <>
            <section className='px-3 text-sm w-full relative '>
                <div className='flex justify-between px-3'>
                    <div className='underline underline-offset-8 decoration-2 text-[16px] font-medium  '>NEW ARRIVALS</div>
                    {/* Custom navigation buttons */}
                    <div className="md:flex hidden gap-2 items-center text-[18px]">
                        <button ref={prevRef} disabled={isBeginning} className={`h-9 w-9 rounded-full cursor-pointer flex items-center justify-center shadow ${isBeginning ? 'border border-gray-400 text-gray-400' : 'border border-[#212121] text-[#212121]'}`}>
                            <LiaAngleLeftSolid />
                        </button>
                        <button disabled={isEnd} ref={nextRef} className={`h-9 w-9 rounded-full cursor-pointer flex items-center justify-center shadow ${isEnd ? 'border border-gray-400 text-gray-400' : 'border border-[#212121] text-[#212121]'}`}><LiaAngleRightSolid /></button>
                    </div>
                </div>
                <div className='pt-4'>
                    <Swiper
                        // modules={[Pagination, Navigation]}
                        modules={[Navigation]}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current
                            swiper.params.navigation.nextEl = nextRef.current
                        }}
                        onSwiper={(swiper) => {
                            setIsBeginning(swiper.isBeginning)
                            setIsEnd(swiper.isEnd)
                        }}
                        onSlideChange={(swiper) => {
                            setIsBeginning(swiper.isBeginning)
                            setIsEnd(swiper.isEnd)
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        className="w-full h-full new-arrival-swiper "
                    >
                        {slider.map((item, i) => (
                            // newArrivashoeItem
                            <SwiperSlide
                                key={i}
                                className="flex items-center justify-center bg-white rounded-2xl py-5 "
                            >
                                <div className='flex'>
                                    <div className='px-5 space-y-2'>
                                        <h3 className='uppercase text-[14px]'>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <img className='object-cover h-full w-full' src={item.image} alt="image" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Slider
