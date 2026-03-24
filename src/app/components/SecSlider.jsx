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
import { secondSlider } from '../data/home/slider'

const SecSlider = () => {
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)
  return (
    <>
      <section className='bg-gradient-to-r from-[#FCCCD1] via-[#FBDED8] to-[#FDB89C] py-20 font-hubot'>
        <div className='lg:px-0 px-5 sm:max-w-[1100px] mx-auto'>
          <div className='flex sm:gap-0 gap-5 sm:flex-row flex-col justify-start sm:justify-between items-start sm:items-center'>
            <div className='bg-white border border-[#D9D9D8] rounded-2xl px-4 py-3.5'>
              <img className='' src={secondSlider.logo} alt="logo" />
            </div>
            <Link className='px-5 py-3.5 rounded-md sm:w-auto duration-300 sm:w-auto w-full text-center font-semibold border-2 border-black hover:bg-[#eeeeed] block' href={``}>Explore Breeze Agents</Link>
          </div>
          <div className='flex justify-between items-center py-9'>
            <h2 className='lg:text-[40px] text-[32px] font-medium leading-11 justify-between w-[40%]'>{secondSlider.title}</h2>
            <p className='tracking-wide w-[40%] leading-7'>{secondSlider.description}</p>
          </div>
          <div className='py-7 relative'>
            <Swiper
              modules={[Navigation]}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              spaceBetween={20}
              loopAdditionalSlides={3}
              loopedSlides={secondSlider.slider.length}
              initialSlide={1}
              navigation={{
                prevEl: '.custom-prev',
                nextEl: '.custom-next',
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper
                setActiveIndex(swiper.realIndex)
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex)
              }}
            >
              {secondSlider.slider?.map((item, i) => {
                const isActive = activeIndex === i

                return (
                  <SwiperSlide key={i} className='text-center '>
                    <div
                      className={`relative transition-all duration-500 rounded-2xl p-6 flex flex-col items-center justify-center  ${isActive
                        ? 'scale-105 opacity-100 bg-white'
                        : 'scale-90 opacity-80 bg-white'
                        }`}>

                      {!isActive && (
                        <div className="absolute inset-0 bg-white/40 rounded-2xl z-10"></div>
                      )}

                      <div className="relative z-20 flex flex-col items-center gap-4">

                        <img
                          className='w-[300px] rounded-2xl object-contain'
                          src={item.image}
                          alt="image"
                        />

                        <div className='px-1.5 text-center'>
                          <h3 className='text-2xl font-medium'>
                            {item.title}
                          </h3>
                          <p>{item.description}</p>
                        </div>

                        <button className='underline decoration-2 decoration-[#FF4800] underline-offset-5 hover:underline-offset-2 duration-300 font-semibold'>
                          Learn more
                        </button>

                      </div>
                      {/* Custom navigation buttons */}

                    </div>
                  </SwiperSlide>
                )
              })}

            </Swiper>
            {/* ✅ Buttons OUTSIDE */}
            <button className={`custom-prev cursor-pointer h-12 w-12 bg-[#F7F7F5] hover:bg-[#EFC3C7] duration-300 rounded-full flex items-center justify-center text-2xl absolute -left-15 top-1/2 -translate-y-1/2`}>
              <LiaAngleLeftSolid />
            </button>
            <button className={`custom-next cursor-pointer h-12 w-12 bg-[#F7F7F5] hover:bg-[#EFC3C7] duration-300 rounded-full flex items-center justify-center text-2xl transition absolute -right-15 top-1/2 -translate-y-1/2`}><LiaAngleRightSolid /></button>
          </div>

        </div>
      </section>
    </>
  )
}

export default SecSlider
