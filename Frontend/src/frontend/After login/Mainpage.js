import React,{useContext} from 'react'
import Collection from '../Collection'

import Context from '../ContexAPI/Contex'
import Yourcart from './Yourcart'
import { useNavigate } from 'react-router-dom'

import Products from './Products'
import Navigation from './Navigation'
import Footer from './Footer'
const Mainpage = () => {
  const navigate=useNavigate()
    const {islogged, setIslogged} = useContext(Context)
  
  return (
    <div id='/mainpage'>
    { islogged ?(
        <div  className='h-full w-full right-5 px-[5rem]'>
     <Navigation/>
        <div>
      <Products/>
      <Footer/>
        </div>
      </div>

    ) :(" ") 
    }
    
    </div>
  )
}

export default Mainpage
