import Link from 'next/link'
import React from 'react'

const ExploreBox = () => {
    return (
        <>
            <section className='bg-[#F8F5EE] p-15 font-hubot lg:px-0 px-5  text-black'>
                <div className='max-w-[1100px] mx-auto p-10 rounded-2xl bg-white border border-[#D9D9D8] space-y-4'>
                    <h3 className='text-[18px] font-semibold'>Loop Marketing Playbook: Master Growth in the AI Era</h3>
                    <p className='text-[18px]'>Harness the power of humans and AI working together to express your unique brand story, reach customers where they are, and continuously improve your results in real time.</p>
                    <div className='pt-5'>
                    <Link className='bg-[#FF4800] hover:bg-[#C93700] px-9 py-4.5 rounded-md sm:w-auto duration-300 text-center text-white inline-block font-semibold ' href={`/`}>Explore the playbook</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExploreBox
