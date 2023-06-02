import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './landingpage.css'
import { carouselArray } from '../../Function/function';



const Landingpage = () => {
  return (
    <>
    <div className='LandingPage'>
    <Carousel
        autoPlay={true}
        infiniteLoop={true}
        transitionTime={3}
        showStatus={false}
        showThumbs={false}
      >
       {carouselArray.map((ele)=>{
        return <img src={ele} alt="alt_carousel" />
       })}
      </Carousel>
    </div>
    </>
  )
}

export default Landingpage