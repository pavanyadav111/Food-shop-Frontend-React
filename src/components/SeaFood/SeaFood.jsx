import React from 'react'
import Banner from '../Banner/Banner.jsx'
import CategoryPage from '../CategoryPage/CategoryPage.jsx'
import BgSeaFood from'../../assets/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <div>
      <CategoryPage title={"Meat & SeaFood"} bgImage={BgSeaFood} categories={['Meat','SeaFood']}/>
    </div>
  )
}

export default SeaFood
