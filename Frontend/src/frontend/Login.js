import React,{useContext, useState} from 'react'
import Navbar from './Navbar'
import { useNavigate} from 'react-router-dom'
import Context from './ContexAPI/Contex'
import Signup from './Signup'
import axios from 'axios'
import { set } from 'react-hook-form'
import CircularIndeterminate from '../components/ui/Progress'
import { toast } from 'sonner'
const Login = () => {
  const{ createAcc,setCreateAcc,islogged,setIslogged  }=useContext(Context)
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
const [hasAccount,setHasAccount]=useState(true)
const [isloading,setIsloading]=useState(false)
  // const[confirmPassword,setConfirmPassword]=useState('')
  const navigate = useNavigate()
  const gotosignin=()=>{
    setCreateAcc(true)
  }

 
  const gotoMain=async()=>{
    // alert(email,password)
    setIsloading(true)
try{
 
  const allUser=await axios.get("https://furnitech-backend.onrender.com/loginDetails");
  console.log(allUser.data)

const matchingdata=allUser.data.find((user)=>user.email===email && user.password===password)
console.log(matchingdata)
  if(matchingdata){
    setIslogged(true)
    console.log('clicked login')
  navigate('/mainpage')
  }
  else{
setHasAccount(false)
    // alert('Invalid credentials')
  }
}

catch(err){
  console.log( err,"Cannot get users");
}

   

  }
  return (
   
    <div className='h-screen w-screen  flex justify-center items-center 'id='/login'>
      
         <div className='h-[40rem] w-[80rem] flex flex-row  justify-between  shadow-2xl'>
   
      <div className=' h-full w-[50%] flex  flex-col justify-center items-center  gap-8 bg-[#00adb5]'>
      
      <p className='font-bold text-3xl'>Furnitech</p>
      <span className='text-center font-serif'>
      <h1 className='font-bold text-xl'>Hey ! Welcome to furnitech</h1>
      <h2>Enrich your shopping experience with us</h2>
     
      </span>
      <button onClick={gotosignin} className="text-white bg-transparent   hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Don't have an account?</button>
   
      </div>
         <div className='text-center flex flex-col justify-center items-center w-[50%] gap-4'>
         <p className='font-bold text-xl'>Log in with your Credentials</p>
   
   <form className="max-w-sm mx-auto flex w-full  flex-col  "  onSubmit={(e) => {
    e.preventDefault();
  gotoMain()
  }}>
   
     <div className="mb-5 text-2xl ">
     
       <input type="email" id="email" value ={email} onChange={(e)=>setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-[3rem] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
     </div>
     <div className="mb-5 text-start">
   
       <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-[3rem] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
     </div>
     <div className="flex items-start mb-5">
       <div className="flex items-center h-5">
         <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
       </div>
       <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
     </div>
     {hasAccount===false && <div className='text-red-500'>Invalid credentials</div>}
    
     <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      {isloading && hasAccount? <CircularIndeterminate/>:
      <p>Submit</p> }
     </button>
   
   </form>
   
   
         </div>
         </div>
    
 
    </div>
  )
}

export default Login
