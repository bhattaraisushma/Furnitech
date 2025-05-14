import { useState, createContext } from "react";
import { set } from "react-hook-form";

const Context = createContext();

export const ContextProvider=({children})=>
    {
        const[islogged, setIslogged] =useState(false)
        const[cartlist, setCartlist] =useState([])
        const[createAcc,setCreateAcc]=useState(false)
        const[addedTOCart,setAddedTOCart]=useState(false)
        return(
<Context.Provider value={{islogged,setIslogged,cartlist,setCartlist,createAcc,setCreateAcc, setAddedTOCart,addedTOCart}}>
    {children}
</Context.Provider>
        )
 

}

export default Context;