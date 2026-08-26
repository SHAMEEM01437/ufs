import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax } from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import rightArrow from '../assets/images/icons/right-arrow.svg'
import leftArrow from '../assets/images/icons/left-arrow.svg'
import bannerVideo from '../assets/video/banner_video.mp4'
import bannerImage1 from '../assets/images/banner-1.webp'
const Home = () => {
  return (
    <>
    <Swiper
      className="banner_slider"
        slidesPerView={1}
        spaceBetween={0}
        parallax={true}
        loop={true}
        modules={[Navigation, Pagination, Parallax]}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".slider-button-next",
          prevEl: ".slider-button-prev",
        }}
    >
      <SwiperSlide>
        <div className="banner_slide_inner">
                        <video src={bannerVideo} muted autoPlay loop playsInline type="mp/4"></video>
                        <div className="container bn_content_container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="banner_content">
                                        <h1 className="banner_title">We Ensure Safety at Your Work</h1>
                                        <p className="banner_text">
                                            Welcome to UFS Protects, where safety is not just a commitment but a way of
                                            life.
                                        </p>
                                        <a href="#" className="theme_button">Know More</a>
                                    </div>
                                </div>
                                <div className="col-md-6"></div>
                            </div>
                        </div>
                    </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner_slide_inner">
                        <img src={bannerImage1} alt="Slide-1" />
                        <div className="container bn_content_container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="banner_content">
                                        <h1 className="banner_title">We Ensure Safety at Your Work</h1>
                                        <p className="banner_text">
                                            Welcome to UFS Protects, where safety is not just a commitment but a way of
                                            life.
                                        </p>
                                        <a href="#" className="theme_button">Know More</a>
                                    </div>
                                </div>
                                <div className="col-md-6"></div>
                            </div>
                        </div>
                    </div>
      </SwiperSlide>
      <div className="button_container container">
                <div className="slider-button-next arrow_btn_next">
                    <img src={rightArrow} alt="RightArrow" />
                </div>
                <div className="slider-button-prev arrow_btn_prev">
                    <img src={leftArrow} alt="RightArrow" />
                </div>
            </div>
    </Swiper>
    {/* <section className="banner_section">
        <div className="swiper banner_slider">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    
                </div>
                <div className="swiper-slide">
                    
                </div>
            </div>
            
        </div>
    </section> */}
    
    </>
  )
}

export default Home