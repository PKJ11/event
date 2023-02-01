import React, { useState } from "react"
import Homes from "../components/homes/Homes"
import Trending from "../components/trending/Trending"
import Upcomming from "../components/upcoming/Upcomming"
import Upcomming_2 from "../components/upcoming_2/upcoming_2"
import { latest, recommended, upcome } from "../dummyData"

const HomePage = () => {
  const [items, setItems] = useState(upcome)
  const [item, setItem] = useState(latest)
  const [rec, setRec] = useState(recommended)
  return (
    <>
      <Homes />
      <Upcomming items={items} title='Department Gathering' />
      <Upcomming_2 items={item} title='Institute Gathering' />
      <Trending />
      <Upcomming items={rec} title='Cultural Events' />
    </>
  )
}

export default HomePage
