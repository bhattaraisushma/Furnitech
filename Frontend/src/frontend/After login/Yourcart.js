import React, { useContext } from 'react'
import Context from '../ContexAPI/Contex'
import { ShoppingBagIcon} from 'lucide-react'
import { Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import Navigation from './Navigation'
const Yourcart = () => {
  const navigate=useNavigate()
  const {cartlist,setCartlist}=useContext(Context)
  const removefromcart=(list)=>{


  }

  const shopping=()=>{
    navigate('/mainpage')
  }

  return (

    <div className='px-[5rem]  w-screen '>
<Navigation/>

    {cartlist.length==0 ? (<div className='flex  justify-center   h-screen items-center text-center  '>
      <div className='flex  flex-col justify-center items-center gap-9 w-[30rem] text-center'>
       <span className='flex flex-row gap-4 justify-center items-center text-4xl font-bold'> Your Cart is Empty<ShoppingBagIcon/></span>
       <span className='text-lg font-semibold'>Lorem ipsum dolor  Labore, excepturi iusto! Aut facere labore ipsa aliquid cumque mollitia doloribus ut!</span>
      <Button onClick={shopping} className='bg-[#00ADB5] w-[15rem] '><p className='text-xl'>Continue Shopping</p></Button>
      </div>
    </div>) :
    (
    <div className='flex flex-row shadow-lg  gap-6 h-full w-screen bg-purple'>
     { cartlist.map((list)=>{
        return(
         

          <div className="w-fit   flex flex-row bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-110">
          <div className=''>
              <img className="p-8 rounded-t-lg h-[10rem] py-4 " src={list.image1} alt="product image" />
          </div>
          <div className="mx-5 my-5" >
              <a href="#">
                  <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">{list.title}</h5>
              </a>
              <div className="flex items-center justify-start text-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
              </div>
              <div className="flex flex-row gap-4">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">{list.price}</span>
                  <span className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"onClick={()=>removefromcart(list)} >Remove</span>
              </div>
          </div>
      </div>
      
         
        )
      })}
      </div>
   
      )
    
    }

    </div>
  )
}

export default Yourcart
