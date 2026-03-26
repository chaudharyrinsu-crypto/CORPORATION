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
      <section className='bg-linear-to-r from-[#FCCCD1] via-[#FBDED8] to-[#FDB89C] py-20 font-hubot'>
        <div className='lg:px-0 px-5 lg:max-w-[1100px] mx-auto'>
          <div className='flex sm:gap-0 gap-5 sm:flex-row flex-col justify-start sm:justify-between items-start sm:items-center'>
            <div className='bg-white border border-[#D9D9D8] rounded-2xl px-4 py-3.5'>
              <img className='' src={secondSlider.logo} alt="logo" />
            </div>
            <Link className='px-5 py-3.5 rounded-md sm:w-auto duration-300 sm:w-auto w-full text-center font-semibold border-2 border-black hover:bg-[#EFB39C] block' href={``}>Explore Breeze Agents</Link>
          </div>
          <div className='flex sm:flex-row flex-col justify-start sm:justify-between items-start sm:items-center py-9 gap-5 2md:gap-20 sm:gap-10 lg:gap-40'>
            <h2 className='lg:text-[40px] text-[32px] font-medium leading-11 justify-between w-full sm:w-1/2'>{secondSlider.title}</h2>
            <p className='tracking-wide w-full sm:w-1/2 leading-7'>{secondSlider.description}</p>
          </div>
          <div className='py-7 relative lg:max-w-[950px] mx-auto'>
            <Swiper
              modules={[Navigation]}
              // slidesPerView={3}
              centeredSlides={false}
              loop={true}
              spaceBetween={2}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  centeredSlides: false,
                },
                768: {
                  slidesPerView: 1,
                  centeredSlides: false,
                },
                1150: {
                  slidesPerView: 3,
                  centeredSlides: true,
                },
              }}
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
                      style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                      className={`relative overflow-hidden transform-gpu will-change-transform transition-transform duration-500 rounded-2xl p-6 flex flex-col items-center justify-center cursor-grab lg:w-auto w-[350px] mx-auto ${isActive
                        ? 'scale-105 opacity-100 bg-white'
                        : 'scale-90 opacity-60 bg-white'
                        }`}
                    >

                      <div
                        className={`absolute rounded-2xl inset-0 bg-white/40 z-10 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'
                          }`}
                      ></div>

                      <div className="relative z-20 flex flex-col items-center gap-6">

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
            <div className='lg:pt-0 pt-5'>
              <button className={`custom-prev cursor-pointer h-12 w-12 bg-[#F7F7F5] hover:bg-[#EFC3C7] duration-300 rounded-full flex items-center justify-center text-2xl absolute left-0 lg:-left-15  lg:top-1/2 lg:-translate-y-1/2`}>
                <LiaAngleLeftSolid />
              </button>
              <button className={`custom-next cursor-pointer h-12 w-12 bg-[#F7F7F5] hover:bg-[#EFC3C7] duration-300 rounded-full flex items-center justify-center text-2xl transition absolute  lg:-right-15 right-0 lg:top-1/2  lg:-translate-y-1/2`}><LiaAngleRightSolid /></button>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default SecSlider
