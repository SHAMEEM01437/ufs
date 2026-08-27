import React from 'react'
import Cta from "../components/cta/Cta";
import Blog from "../components/blog/Blog";
import HeroSlider from '../components/homeSlider/HeroSlider';
const Home = () => {
  return (
    <>
    <HeroSlider />
    <Blog/>
    <Cta/>
    </>
  )
}

export default Home