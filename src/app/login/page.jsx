import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <section className='font-hubot tracking-wide  flex flex-col justify-between h-screen'>
                <div className='flex flex-col gap-3 justify-center items-center py-13'>
                    <img className='h-13' src="/logo.svg" alt="logo" />
                    <div className='text-center'>
                        <p className='  text-[22px] font-medium '>Sign in</p>
                        <span className='text-[12px] text-[#33475B]'>or <Link className='text-[#007A8C] font-medium hover:underline hover:decoration-[#007A8C] ' href={``}>create an account</Link></span>
                    </div>
                    <div className='gap-1 flex flex-col justify-start w-[25%]'>
                        <span className='text-[14px] font-medium block text-[#33475B]'>Email</span>
                        <form className='flex flex-col gap-4 text-sm'>
                            <input className='text-[#516F90] border border-[#CBD6E2] bg-[#F5F8FA] py-2.5 px-3 rounded-sm' type="email" name="" id="" placeholder='Enter your email' />
                            <button className='text-[#99ACC2] bg-[#EAF0F6] py-2.5 px-3  rounded-sm font-medium cursor-not-allowed'>Continue</button>
                        </form>
                    </div>
                    <div className='flex items-center gap-2 text-center py-1'>
                        <p className='text-[#33475B] text-[14px] font-medium'>See how HubSpot can help you achieve your growth goals.</p>
                        <Link className='text-[12px] border py-1.5 px-4 rounded-sm border-[#FF4800] text-[#FF4800] hover:bg-[#FCECE6] duration-500' href={``}>Get a demo</Link>
                    </div>
                </div>
                <footer className='text-[12px] p-4 text-center flex gap-4 justify-center'>
                    <span>©2026 HubSpot, Inc. All Rights Reserved.</span>
                    <Link className='text-[#008DBC] hover:underline font-semibold' href={``}>Privacy Policy</Link>
                    <Link className='text-[#008DBC] hover:underline font-semibold' href={``}>Manage Cookies</Link>
                </footer>
            </section>
        </>
    )
}

export default page
