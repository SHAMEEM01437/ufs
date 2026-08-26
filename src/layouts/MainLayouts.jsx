import React from 'react'
import Header from '../components/Header'
import {Outlet} from 'react-router-dom'
import Footer from '../components/footer/Footer'
const MainLayouts = () => {
  return (
    <>
        <Header/>
         <Outlet />
        <Footer/>
    </>
  )
}

export default MainLayouts