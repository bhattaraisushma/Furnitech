import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Search ,ShoppingBagIcon,HeartIcon} from 'lucide-react'
import Userprofile from '../Userprofile'
const Navigation = () => {
    const navigate=useNavigate()
    const gocart =()=>{
        navigate('/cart')
          }
  return (
    <div>
         <div className='h-[6rem] w-full flex flex-row justify-between items-center  shadow-lg px-10 mb-16 text-2xl' >
          <div className=' font-semibold font-font-title text-[3rem]'>Furni</div>
          <div className='flex  flex-row gap-5 justify-center'>
            <h1>Shop</h1>
            <h1>FAQ</h1>
            <h1>Magazine</h1>
          </div>
          <div className='h-[6rem] flex items-center justify-end gap-5' >
          <Userprofile/>
  <HeartIcon/>
  <Search/>
      <ShoppingBagIcon onClick={gocart}/>
      </div>
        </div>
    </div>
  )
}

export default Navigation
