import React from 'react'
import { TfiSearch } from "react-icons/tfi";

const HelpInputBox = () => {
    return (
        <>
            <section className='font-hubot bg-[#042729] text-center py-8 px-3'>
                <div className=''>
                    <h3 className='text-[40px] text-white font-medium'>How can we help?</h3>
                    <form className=' text-center py-5'>
                        <div className='relative text-xl w-full max-w-[700px] mx-auto'>
                        <span className='absolute left-4 top-1/2 -translate-y-1/2'><TfiSearch /></span>
                        <input className='w-full outline-none bg-white border border-[#848484] pr-4 pl-13 py-4 rounded-sm font-normal block' type="text" name="" id="" placeholder='Search all help and learning sources' />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default HelpInputBox
