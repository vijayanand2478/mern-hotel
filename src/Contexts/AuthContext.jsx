import { useContext,useState,createContext } from "react";

export const AuthContext=createContext();

export const UseAuthContext=()=>{
    return useContext(AuthContext)
}

export const AuthContextProvider=({children})=>{
    const user = localStorage.getItem("hotel-user");
    const [authName,setAuthName]=useState((user)?JSON.parse(user):null)
    const [searchItem,setSearchItem]=useState('')
    const [hotel,setHotel]=useState('')


    return<AuthContext.Provider value={{authName,setAuthName,searchItem,setSearchItem,hotel,setHotel}}>
        {children}
    </AuthContext.Provider>
}