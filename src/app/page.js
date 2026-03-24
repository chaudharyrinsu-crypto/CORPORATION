import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import Slider from './components/Slider'
import Products from './components/Products'

const page = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      {/* <CompanyLogo/> */}
      <Slider/>
      <Products/>
    </>
  )
}

export default page
