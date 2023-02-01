import React from "react"

const HomeCard = ({ item: { id, cover, name, rating, time, desc, starring, genres, tags, video } }) => {
  return (
    <>
      <div className='box'>
        <div className='coverImage'>
          <img src={cover} alt='' />
        </div>
        <div className='content flex'>
          <div className='details row'>
            <h1>{name}</h1>
            <div className='rating flex'>
              <div className='rate'>
               <i></i>
              </div>
              <label></label>
              <span></span>
              <label></label>
            </div>
            <p>{desc}</p>
            <div className='cast'>
              <h4>
                <span>Starring </span>
              </h4>
              <h4>
                <span>Genres </span>
              </h4>
              <h4>
                <span>Tags </span>
              </h4>
            </div>
            <button className='primary-btn'>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard
