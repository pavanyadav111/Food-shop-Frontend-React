import React from 'react'
import Heading from '../Heading/Heading'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../components/Styles/styles.css';
import { Navigation } from 'swiper/modules';
import Customer1 from '../../assets/customer1.jpg'
import Customer2 from '../../assets/customer2.jpg'
import Customer3 from '../../assets/customer3.jpg'
import Customer4 from '../../assets/customer4.jpg'
import Customer5 from '../../assets/customer5.jpg'
import { FaStar } from "react-icons/fa";






const Testimonial = () => {


  return (
    <section>
      <div className='mx-auto w-[1400px] px-10 py-20 '>
        <Heading highlight="Customers" heading="Saying" />

        {/*
        <div className='flex justify-end py-5 '>
          <button className='custom-prev text-2xl rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center gap-x-3 text-zinc-800 cursor-pointer hover:bg-graident-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white'>
            <MdOutlineArrowBackIosNew />
          </button>
          <button className='custom-next text-2xl rounded-lg w-11 h-11 bg-zinc-100 flex justify-center p-1 items-center gap-x-3 text-zinc-800 cursor-pointer hover:bg-graident-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white'>
            <MdOutlineArrowForwardIos />
          </button>
        </div>

*/}
        <Swiper
          navigation={{
            nextE1: ".custom-next",
            prevE1: ".custom-prev"
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024:{ slidesPerView: 3,spaceBetween: 20 },


          }}
          modules={[Navigation]}
          className="mySwiper mt-10">
          {
            review.map(item => {
              return (
                <SwiperSlide className='bg-zinc-100 rounded-xl p-8 '>
                  <div className='flex  gap-5 items-center '>
                    <div className='w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden'>
                      <img src={item.image} alt="reating image" className='w-full h-full rounded-full' />
                    </div>
                    <div>
                      <h5 className='text-xl font-bold  '>{item.name} </h5>
                      <p className='text-zinc-600 '>{item.Profession}</p>
                      <span className='flex text-yellow-400 mt-3 text-xl gap-1 '>
                        {Array.from({ length: item.rating }, (_, index) => {
                          <FaStar />
                        })}
                      </span>
                    </div>
                  </div>
                  <div className='mt-10 min-h-[15vh]'>
                    <p className='text-zinc-600'> {item.para}</p>
                  </div>

                </SwiperSlide>
              )

            })
          }

        </Swiper>





      </div>
    </section>
  )
}

export default Testimonial


const review = [
  {
    id: 5,
    name: 'Pavan',
    Profession: 'Software developer',
    rating: 2,
    para: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, inventore?',
    image: Customer1,
  },

  {
    id: 2,
    name: 'Groot ',
    Profession: 'Software Tester',
    rating: 4,
    para: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, inventore?',
    image: Customer2,

  },

  {
    id: 3,
    name: 'Iron Man',
    Profession: 'AI deveoper',
    rating: 3,
    para: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, inventore?',
    image: Customer3,
  },

  {
    id: 4,
    name: 'Brao',
    Profession: 'SEO',
    rating: 4,
    para: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, inventore?',
    image: Customer4,
  },

  {
    id: 5,
    name: 'Mave',
    Profession: 'Data Analytics',
    rating: 5,
    para: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, inventore?',
    image: Customer5,

  },

]