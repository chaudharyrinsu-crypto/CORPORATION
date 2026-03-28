import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import Slider from './components/Slider'
import Products from './components/Products'
import SecSlider from './components/SecSlider'
import Integration from './components/Integration'
import CaseStudy from './components/CaseStudy'
import Vote from './components/Vote'
import Bottom from './components/Bottom'
import SecNav from './components/SecNav'

const page = () => {
  return (
    <div className='tracking-wide font-hubot '>
      <NavBar />
      <div className='lg:block hidden bg-white sticky top-0 z-50 lg:shadow-sm'>
        <SecNav />
      </div>
      <Hero />
      {/* <CompanyLogo/> */}
      <Slider />
      <Products />
      <SecSlider />
      <Integration />
      <CaseStudy />
      <Vote />
      <Bottom />
    </div>
  )
}

export default page
