import React from 'react'
import Heading from "../Heading/Heading";
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";
import { PiPlantDuotone } from 'react-icons/pi';
import { GiFactory } from 'react-icons/gi';
import { SlBadge } from 'react-icons/sl';
import { FaTruckMoving } from 'react-icons/fa6';


const Process = () => {

  const renderSteps = steps.map(item =>{
    return(
      <div className={`flex-1 basis-[300px] ${item.id %2===0 ? 'md:-mt-100 ' : null}`}>
          <span className='flex justify-center mx-auto items-center w-18 h-18 text-8xl  outline-[3px] outline-offset-7 outline-zinc-800  rounded-full outline-dashed'> {item.number}</span>
          <div className='flex items-center mt-10 gap-x-5'>
            
             <span className='flex bg-graident-to-bottom-orange to-orange-500 text-orange-500 w-15 h-15 rounded-full justify-center items-center text-3xl '> {item.icon} </span>
            
            <div  className='flex-1 '>
              <h4 className='text-zinc-800 text-2xl font-bold '>{item.title}</h4>
              <p className='text-zinc-600 mt-2 '>{item.para}</p>
            </div>
            
          </div>
      </div>
    )
  })
  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <div className='mr-auto  w-fit '>

        <Heading highlight="Our" heading="Process"/>
        </div>

          <div className='flex flex-wrap mt-20 items-center justify-center pt-50 md:mt-20 gap-y-17'>
              {renderSteps}
          </div>
      </div>
    </section>
  )
}

export default Process



const steps = [
  {
    id:1,
    number:<TbCircleNumber1Filled />,
    title:'Sourcing',
    para:'It is a long astablished fact a reader',
    icon:<PiPlantDuotone />,
  },
    {
    id:2,
    number:<TbCircleNumber2Filled />,
    title:'manufacturing',
    para:'It is a long established fact that a reader',
    icon:<GiFactory />
  },
    {
    id:3,
    number:<TbCircleNumber3Filled />,
    title:'Quality Control',
    para:'It is a long established fact that c reader .',
    icon:<SlBadge />
,
  },
    {
    id:4,
    number:<TbCircleNumber4Filled />,
    title:'Logistics',
    para:'It is a long established fact that a reader',
    icon:<FaTruckMoving />
,
  },
]