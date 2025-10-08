import React from 'react'
import BgAll from '../../assets/all-banner.jpg'
import CategoryPage from '../CategoryPage/CategoryPage'

const AllProducts = () => {
  return (
    <div>
      <CategoryPage title={"All PRoducts "} bgImage={BgAll} categories={'All'}/>
    </div>
  )
}

export default AllProducts
