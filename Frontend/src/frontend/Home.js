import React, { useEffect} from 'react'
import Navbar from './Navbar'
import { hero } from '../data'
import { Button } from "flowbite-react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
 const navigate= useNavigate()

 
const Browsecollection = () => {
  navigate('/collection')
}


  return (
    <>
   
    <div className=' flex justify-center '>
        <Navbar/>
        </div>
        
    <div   className='h-screen flex justify-center    items-center w-full pl-[4rem] pt-[12rem]    bg-center text-white text-center md:h-lvh '>
      
        <div className='  w-[40%] text-center font-bold text-5xl flex flex-col gap-9 items-center'>
        <p className='leading-snug  text-black italic'>Make Your Home more <span className='text-[#00ADB5]'>Beautiful</span> with Our Aesthetic<span className='text-[#00ADB5]'> Wood Furniture Collection</span></p>
<Button className='w-[15rem] bg-[#00ADB5]  text-[#AF8F6F]' onClick={Browsecollection}><p className='text-xl text-white'>Browse our collection</p></Button>
{/* 
<h1 className='normal text-[4rem] font-semibold font-fontBayon pb-[1rem] '>{hero.title}</h1>
<p className='pb-[18rem] text-xl font-fontcontent  font-black'>{hero.content}</p>
       {/* <button className='rounded-[12rem] bg-yellow-500 h-[3rem] w-[7rem] mr-[26rem]'>Shop now</button>
       <button className='rounded-[12rem] bg-green-900  border-2 border-yellow-50 h-[3rem] w-[7rem]' >Explore more</button>
         */} 
        </div>
        

    </div>
    </>
  )
}

export default Home
