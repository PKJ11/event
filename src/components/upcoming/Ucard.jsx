import React from "react"
import { Link,Route,BrowserRouter } from "react-router-dom"

const Ucard = ({ item: { id, cover, name, time } }) => {
  return (
    <>
      <div className='MovieBox'>
        <div className='img'>
        <Link to="https://www.youtube.com/watch?v=d-_Chm2ce9w">
          <img src={cover}  alt=''/>
          </Link>
        </div>
        <div className='text'> 
          <h3 className="events" >{name}</h3>
          {/*<Link to={`/singlepage/${id}`}>
          {/* <button className='primary-btn'>
            <i className='fa fa-play'></i> PLAY NOW
          </button> */}
          {/*</Link>*/}
        </div>
      </div>
    </>
  )
}

export default Ucard
