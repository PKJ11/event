import React from "react"
import Ucard2 from "./Ucard2"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



const Upcomming_2 = ({ items, title }) => {


  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed:2000,
    autoplay:true,
    rtl:false,
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
      <section className='upcome2'>
        
      <div className="Title2">
        <h2>{title}</h2>
      </div>


        <div className='container2' >
          
          <div className='content2' >
            
            <Slider {...settings}>
              {items.map((item) => {
                return (
                  <>
                    <Ucard2 key={item.id} item={item} />
                  </>
                )
              })}
            </Slider>
          </div>
        </div>
       
      </section>
    </>
  )
}

export default Upcomming_2
