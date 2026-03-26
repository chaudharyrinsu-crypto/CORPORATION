'use client'
import React from 'react'
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import LeftSide from './LeftSide';
import RightSide from './RightSide';


const Footer = () => {
    const socialIcons = [<FaFacebookF />, <FaInstagram />, <ImYoutube />, <BsTwitterX />, <FaLinkedinIn />, <FaReddit />, <FaTiktok />]
    return (
        <>
            <section className='lg:px-0 px-5 bg-[#1F1F1F] py-10 text-[#bab9b9]'>
                <div className='lg:max-w-[1000px] mx-auto tracking-wide'>
                    <div className='grid grid-cols-2 gap-10 justify-between w-full'>
                        <LeftSide />
                        <RightSide/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
