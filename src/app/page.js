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

const page = () => {
  return (
    <div  className='tracking-wide font-hubot overflow-x-hidden'>
      <NavBar/>
      <Hero/>
      {/* <CompanyLogo/> */}
      <Slider/>
      <Products/>
      <SecSlider/>
      <Integration/>
      <CaseStudy/>
      <Vote/>
      <Bottom/>
    </div>
  )
}

export default page
