import React, { useState } from "react"
import { trending } from "../../dummyData"
import Home2 from "../homes/Home_2"
import "./style.css"

const Trending = () => {
  const [items, setItems] = useState(trending)
  return (
    <>
      <section className='trending'>
        {/* <h1 className="fresher">Freshers</h1> */}
        <Home2 items={items} />
      </section>
    </>
  )
}

export default Trending
