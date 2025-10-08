import React from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-right bg-contain bg-no-repeat' style={{backgroundImage:`url(${FreshFruits})`}}>
      <div className='flex max-w-[1400] mx-auto px-10 py-10 md:flex-row flex-col  md:bg-transparent bg-zinc-100 '>
          <span className='md:text-9xl text-5xl text-orange-500 font-bold transform md:-rotate-90 h-fit  md:self-center '> 20%</span>

          <div className='max-w-[700px] '>
            <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold'>first Order Discount </h3>
            <p className='text-zinc-600 my-6 '>Enjoy an exclusive first order discount on our grocery website shop fresh essentials and save big on your first purchase. Fasr delivery </p>
            <Button content="Get a Discount"/>
          </div>
      </div>
    </section>
  )
}

export default Discount
