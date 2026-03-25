import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import Slider from './components/Slider'
import Products from './components/Products'
import SecSlider from './components/SecSlider'
import Integration from './components/Integration'
import CaseStudy from './components/CaseStudy'

const page = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      {/* <CompanyLogo/> */}
      <Slider/>
      <Products/>
      <SecSlider/>
      <Integration/>
      <CaseStudy/>
    </>
  )
}

export default page
