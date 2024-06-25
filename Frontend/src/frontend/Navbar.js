import React, { useContext } from 'react'
import {  Link  } from 'react-router-dom'
import { Button } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import Context from './ContexAPI/Contex';
const Navbar = () => {
  const {islogged ,setIslogged,createAcc,setCreateAcc}=useContext(Context)
  const navigate=useNavigate()

  const login=()=>{
    console.log(islogged)
    

if(islogged)
  {
    navigate('/mainpage')
    setIslogged(true)
  }
  else{
    navigate('/logorsign')
  }
  
  }
  const signup=()=>{
    setCreateAcc(true)
    navigate('/logorsign')
  }

  return (
    <div className="flex flex-row   justify-between items-center  px-[3rem] bg-[#393E46]  h-[5rem] w-[100%]  shadow-xl gap-[6rem] text-white  text-xl font-semibold fixed ">
      <h1 className=" w-[50%]  font-font-title text-[3rem] ">Furni</h1>
    
    <div className='flex flex-row gap-4 ' onClick={login}><Button className='w-[7rem]'><p className='text-xl text-white'>Login</p></Button>
     <Button className='bg-transparent border-[#00ADB5] border-4' onClick={signup}><p className='text-xl  text-white '>SignUp</p></Button>
     </div> 
    </div>
  )
}

export default Navbar
