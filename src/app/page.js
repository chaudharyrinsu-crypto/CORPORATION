import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import Slider from './components/Slider'

const page = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      {/* <CompanyLogo/> */}
      <Slider/>
    </>
  )
}

export default page
