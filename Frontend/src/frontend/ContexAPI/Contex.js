import { useState, createContext } from "react";

const Context = createContext();

export const ContextProvider=({children})=>
    {
        const[islogged, setIslogged] =useState(true)
        const[cartlist, setCartlist] =useState([])
        const[createAcc,setCreateAcc]=useState(false)
        const[addedTOCart,setAddedTOCart]=useState(false)
        return(
<Context.Provider value={{islogged,setIslogged,cartlist,setCartlist,createAcc,setCreateAcc}}>
    {children}
</Context.Provider>
        )
 

}

export default Context;