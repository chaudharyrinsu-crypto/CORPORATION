'use client'
import React from 'react'

const SocialIcons = ({ socialIcons }) => {
    return (
        <>
            <div className="absolute 2md:after:content-[''] 2md:after:absolute 2md:after:border-b 2md:after:border-[#7c7c7c] 2md:after:h-1 2md:after:w-[70%] lg:after:w-[80%] lg:after:-left-[320px] 2md:after:-left-[250px] 2md:after:top-1/2 after:translate-y-1/2 left-1/2 -translate-x-1/2 2md:before:content-[''] 2md:before:absolute 2md:before:border-b 2md:before:border-[#7c7c7c] 2md:before:h-1 2md:before:w-[70%] lg:before:w-[80%] lg:before:-right-[320px] 2md:before:-right-[250px] 2md:before:top-1/2 before:translate-y-1/2">
                <div className="flex justify-center gap-5 2md:gap-8">
                    {socialIcons.map((Icon, index) => (
                        <div key={index} className='text-2xl'>
                            <Icon />
                        </div>
                    ))}
                </div>
                <div className=''></div>
            </div>
        </>
    )
}

export default SocialIcons
