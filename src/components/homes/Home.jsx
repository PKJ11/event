import React from "react"
// import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import trical from "../vedios/trical.mp4"
import "slick-carousel/slick/slick-theme.css"
// import HomeCard from "./HomeCard"

const Home = ({ items }) => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   fade:true,
  //   speed: 2500,
  //   autoplaySpeed: 300,
  // }
  return (
    <>
    <h1 className="fresher">STUDENT ACTIVITY</h1>
      <div className='homeContainer'>
        {/* <Slider {...settings}>
          {items.map((item) => {
            return (
              <>
                <HomeCard key={item.id} item={item} />
              </>
            )
          })}
        </Slider> */}
         <video src={trical} autoPlay loop muted/>
         
      </div>
    </>
  )
}

export default Home
