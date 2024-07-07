import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Collections from '../../Components/Collections/Collections'
import Discount from '../../Components/Discount/Discount'
import Featured from '../../Components/Featured/Featured'

const HomePage = () => {
  return (
    <div>
      <Hero />
      {/* <Collections /> */}
      <Discount />
      <Featured />
    </div>
  )
}

export default HomePage