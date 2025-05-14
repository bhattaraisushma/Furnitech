import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from './ContexAPI/Contex'
import axios from 'axios'


import CircularIndeterminate from '../components/ui/Progress'
import { toast } from 'sonner'
const Signup = () => {
  const { createAcc, setCreateAcc, isLogged, setIslogged } = useContext(Context)
  const [name, setName] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [buttonclicked, setButtonclicked] = useState(false)
  const [isCreating,setIsCreating]=useState(false)
  console.log(name, email, password, confirmPassword, 'from signup ')

  const navigate = useNavigate()

  const addtodb = async () => {
   
    setButtonclicked(true)
   
    // alert(name + email + password)
    if (password === confirmPassword) {
    try {
      await axios.post(
        'https://furnitech-backend.onrender.com/signupDetails',

        {
          name,
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      setIslogged(true)
      console.log(' signup data added tp db')
      navigate('/mainpage')
    } 
  catch (err) {
      console.log(err)
    }
  }}
  
  const gotologin = () => {
    setCreateAcc(false)
  }
 
  return (
    <div
      className="h-screen w-screen  flex justify-center items-center "
      id="/signup"
    >
      <div className="h-[40rem] w-[80rem] flex flex-row  justify-between  shadow-2xl ">
        <div className="text-center flex flex-col justify-center items-center w-[50%] gap-4">
          <p className="font-bold text-xl">Sign Up</p>

          <form
            className="max-w-sm mx-auto flex w-full  flex-col  "
            onSubmit={(e) => {
              e.preventDefault()
              addtodb()
            }}
          >
            <div className="mb-5 text-lg   text-start">
              <label>Name</label>
              <input
                type="name"
                name="name"
                id="email"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-[3rem] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="full name"
                required
              />
            </div>
            <div className="mb-5 text-lg text-start ">
              <label>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-[3rem] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-5  text-lg text-start">
              <label>Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-[3rem] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5  text-lg text-start">
              <label> Confirm Password</label>
              <input
                type="password"
                id="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-[3rem] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />

           {
              buttonclicked && password !== confirmPassword && <p className='text-red-500'>passwords do not match</p>
         }
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <button
              // onClick={()=>addtodb()}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                 {isCreating ? <CircularIndeterminate/>:<p>  Submit</p>
}
            </button>
          </form>
        </div>
        <div className=" h-full w-[50%] flex  flex-col justify-center items-center  gap-8 bg-[#00adb5]">
          <p className="font-bold text-4xl">Furnitech</p>
          <span className="text-center font-serif">
            <h1 className="font-bold text-2xl"> Welcome back</h1>
            <h2>To keep connected with us login with your info</h2>
          </span>
          <button
            onClick={gotologin}
            className="text-white bg-transparent   hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign in
     
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signup
