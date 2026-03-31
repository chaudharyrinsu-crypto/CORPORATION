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
import SliderHeader from './SliderHeader'

const Slider = () => {
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const swiperRef = useRef(null)
    return (
        <>
            <section className=' relative font-hubot lg:py-40 md:py-30 py-20 bg-[#FCFCFA] text-black'>
                <div className='max-w-[1100px] mx-auto lg:px-0 px-5'>
                    <SliderHeader />
                    <div className='pt-4'>
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={1}
                            navigation={{
                                prevEl: '.custom-prev',
                                nextEl: '.custom-next',
                            }}
                            onSlideChange={(swiper) => {
                                swiperRef.current = swiper
                                setActiveIndex(swiper.activeIndex)
                                setIsBeginning(swiper.isBeginning)
                                setIsEnd(swiper.isEnd)
                            }}
                            onSwiper={(swiper) => {
                                setActiveIndex(swiper.activeIndex)
                                setIsBeginning(swiper.isBeginning)
                                setIsEnd(swiper.isEnd)
                            }}
                        >
                            {slider.map((item, i) => (
                                // newArrivashoeItem
                                <SwiperSlide
                                    key={i}
                                    className="flex items-center justify-center  py-5 "
                                >
                                    <div className='grid grid-cols-1 2md:grid-cols-2 items-center gap-10 '>
                                        <div className='px-5 space-y-5 2md:order-1 order-2'>
                                            <h3 className='leading-11 font-medium md:text-[32px] text-[24px] lg:text-[40px] tracking-wide'>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className='2md:order-2 order-1 '>
                                            <img className='w-full max-h-[400px] object-contain' src={item.image} alt="image" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/* Custom navigation buttons */}
                    <div className="flex justify-between gap-2 font-bold items-center text-2xl lg:px-0 px-10">
                        <button disabled={isBeginning} className={`custom-prev cursor-pointer h-12 w-12 bg-[#F7F7F5] rounded-full flex items-center justify-center ${isBeginning ? 'text-gray-400  cursor-not-allowed' : 'text-black'
                            }`}>
                            <LiaAngleLeftSolid />
                        </button>
                        <div className="flex justify-center gap-2">
                            {slider.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => swiperRef.current.slideTo(index)}
                                    className={`w-4 h-4 rounded-full transition ${activeIndex === index ? 'bg-black scale-110' : 'bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                        <button disabled={isEnd} className={`custom-next cursor-pointer h-12 w-12 bg-[#F7F7F5] rounded-full flex items-center justify-center transition ${isEnd ? 'text-gray-400 cursor-not-allowed' : 'text-black '
                            }`}><LiaAngleRightSolid /></button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Slider
