import { popularFeatures } from '@/app/data/home/footer'
import Link from 'next/link'
import React from 'react'

const Bottom = () => {
    return (
        <>
            <div className='py-10 text-center flex flex-col justify-center items-center gap-4'>
                <Link className='block' href={`/`}>
                    <img className='h-7.5' src="./fadedlogo.svg" alt="logo" />
                </Link>
                <span className='text-[12px]'>Copyright © 2026 HubSpot, Inc.</span>
                <div className='flex flex-wrap items-center justify-center gap-4 text-sm text-[#eeeded]'>
                    {popularFeatures.links.map((link, index) => (
                        <Link key={index} href={``} className={`${index === 0 ? 'border-none pl-0' : ''} font-semibold border-l-2 border-[#7c7c7c] pl-4`}>{link}</Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Bottom
