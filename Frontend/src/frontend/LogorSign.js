import React,{useContext} from 'react'
import Context from './ContexAPI/Contex'
import Signup from './Signup'
import Login from './Login'
const LogorSign = () => {
const{ createAcc,setCreateAcc }=useContext(Context)
  return (
    <div>
      {
        createAcc?<Signup/>:<Login/>
      }
    </div>
  )
}

export default LogorSign
