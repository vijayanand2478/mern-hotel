import React, { useEffect, useState } from "react";
import '../stylesheets/bookPage.css'
import { UseAuthContext } from "../Contexts/AuthContext";
import axios from "axios";
import { Link } from 'react-router-dom';

function BookPage(){
    const {hotel,setHotel}=UseAuthContext()
    const [theHotel,setTheHotel]=useState()

    useEffect(()=>{
        specHotel();
    })

    const specHotel=async()=>{
        try {
            await axios.post("http://localhost:3000/api/hotel/spec",{hotel})
            .then(res=>{
                setTheHotel(res.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const logout=()=>{
        toast.success("logged out!",{duration:1000})
        setAuthName()
        localStorage.removeItem("hotel-user")
    }
    return(
        <>
            <nav className="home-nav">
            <Link to="/" style={{textDecoration:"none"}}><h1 style={{fontWeight:700,color:"white"}}>.Stay<span style={{color:"black"}}>INN</span></h1></Link>
            <div className="att">
                <a href="#">About us</a>
                <a href="#">Contact us</a>
                <a href="#">Hotels</a>
                <button className="logout" onClick={logout}>Logout</button>
            </div>
        </nav>
        <div>
            <h1 >{theHotel.name}</h1>
        </div>
        </>
    )
}

export default BookPage