'use client'
import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import SocialIcons from './SocialIcons';
import Bottom from './Bottom';


const Footer = () => {
    const [openMenu, setOpenMenu] = useState(null)

    const socialIcons = [FaFacebookF, FaInstagram, ImYoutube, BsTwitterX, FaLinkedinIn, FaReddit, FaTiktok]

    const toggleArrow = (index) => {
        setOpenMenu(openMenu === index ? null : index)
    }
    return (
        <>
            <section className='lg:px-0 2md:px-5 bg-[#1F1F1F] 2md:pt-10 pb-10 pt-0 2md:text-[#bab9b9] text-[#6d6d6d]'>
                <div className='lg:max-w-[1000px] mx-auto tracking-wide relative'>
                    <div className='flex 2md:flex-row flex-col 2md:gap-0 gap-5 w-full'>
                        <div className='2md:border-r border-[#7c7c7c] 2md:w-[40%] w-full 2md:pr-10'>
                            <LeftSide openMenu={openMenu} setOpenMenu={setOpenMenu} toggleArrow={toggleArrow} />
                        </div>
                        <div className=' 2md:w-[60%] w-full 2md:pl-10'>
                            <RightSide openMenu={openMenu} setOpenMenu={setOpenMenu} toggleArrow={toggleArrow} />
                        </div>

                    </div>
                    <div className='py-10'>
                        <SocialIcons socialIcons={socialIcons} />
                    </div>
                    <div>
                        <Bottom/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
