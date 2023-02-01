import React from "react"
import { Link } from "react-router-dom"
import Ucard from "./Ucard"
import "./dg.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



const Upcomming = ({ items, title }) => {


  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed:2000,
    autoplay:true,
    rtl:true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <section className='upcome'>
        
      <div className="Title">
        <h2>{title}</h2>
        
      </div>

        <div className='container' >
          
          <div className='content' >
            
            <Slider {...settings}>
              {items.map((item) => {
                return (
                  <>
                    <Ucard key={item.id} item={item} />
                  </>
                )
              })}
            </Slider>
          </div>
       
        </div>
       
      </section>
      {/* <div className="seprate">
      <a href="#" className="flexSB">View All</a>
      </div> */}
    </>
  )
}

export default Upcomming
