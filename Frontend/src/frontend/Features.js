import React from 'react'
import { features } from '../data'

const Features = () => {
  return (
    <div  className="h-screen w-full m-[6rem] flex flex-row gap-[7rem]">
      <div className="w-[50%] float-start">
        <p className="font-fontcontent text-[3rem] font-semibold pb-[2rem]">{features.title}</p>
        <p className='font-fontcontent text-xl'>{features.sub}</p>
        <div className="flex flex-row gap-[3rem] mt-[2rem] ">
          <div className=''>
            <p>Lorem, ipsum dolor.</p><br></br>
            <p>lorrrrorem2</p>
          </div>
          <div>
           <p>Easy to shop</p>
            <br></br>
            <p>Lmet cing el</p>
          </div>
        </div>
      </div>
      <div className=" float-end w-[50%]">
        <img src={features.image} alt="furniture" className="h-[28rem]"></img>
      </div>
    </div>
  )
}

export default Features
