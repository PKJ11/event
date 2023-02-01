import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
// import trical from "../vedios/trical.mp4"
import "slick-carousel/slick/slick-theme.css"
import HomeCard from "./HomeCard"

const Home2 = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
  
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade:true,
    speed: 2500,
    autoplaySpeed: 300,
  }
  return (
    <>
      <div className='homeContainer'>
        <Slider {...settings}>
          {items.map((item) => {
            return (
              <>
                <HomeCard key={item.id} item={item} />
              </>
            )
          })}
        </Slider>
         
      </div>
    </>
  )
}

export default Home2
