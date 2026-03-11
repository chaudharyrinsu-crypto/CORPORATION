import React from 'react'

const Hero = () => {
    return (
        <>
            <section>
                <div className='h-[520px] relative'>
                    <img className='h-full w-full object-cover' src="/homeHero.webp" alt="hero" />
                    <div className='w-full h-full absolute top-0 left-0 bg-black/40 z-10'></div>
                </div>
                <div className=''></div>
            </section>
        </>
    )
}

export default Hero
