import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './frontend/Home'
import Products from './frontend/After login/Products'
import Features from './frontend/Features'
import Collection from './frontend/Collection'
import {ContextProvider} from './frontend/ContexAPI/Contex'
import Mainpage from './frontend/After login/Mainpage'
import Yourcart from './frontend/After login/Yourcart'

import LogorSign from './frontend/LogorSign'
const App = () => {
  return (
    <div className='overflow-hidden'>
     <ContextProvider>
    <Router> 
      
<Routes>
  <Route path ='/' element={ <Home/>}></Route>

   <Route path='/collection' element={<Collection/>}></Route>
   <Route path ='/mainpage' element={<Mainpage/>}></Route>
   <Route path='/cart'element={<Yourcart/>}></Route>
   {/* <Route path='/login' element={<Login/>}></Route>
   <Route path='/signup' element={<Signup/>}></Route> */}
   <Route path='/logorsign'element={<LogorSign/>}></Route>
</Routes>

</Router>


</ContextProvider>

    </div>
  )
}

export default App
