import React, { useState } from "react";
import '../stylesheets/login.css'
import hotel1 from '../assets/hotel1.jpg'
import {Container,Row ,Col, Toast} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UseAuthContext } from "../Contexts/AuthContext";
import toast from "react-hot-toast";

function Login(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [errmsg,setErrmsg]=useState('')
    const navigate=useNavigate();
    const {authName,setAuthName}=UseAuthContext()
   
    
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/api/auth/login",{
                username,password
            })
            .then(res=>{
                setAuthName(username)
                localStorage.setItem("hotel-user",JSON.stringify(username))
                navigate('/')
                toast.success("logged in succesfully!",{duration:1000,style:{backgroundColor:"rgb(192, 228, 200)"}});
            })
        } catch (error) {
             
                toast.error(error.response.data.error,{duration:1000,style:{backgroundColor:"rgb(253, 190, 190)"}})
            console.log(error)
        }
    }
    return (
        <>
        <div className="login">
            <div className="login-1">
                <div className="login-2">
                <h1>Want Best Hotels In Best Price!</h1>
                <p>Login And use our website to find your best stay so that you can </p>
                <div className="login-pic mt-2">
                    <div className="login-3">
                        <img src="https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/p/i/pic-1_13__1.jpg"/>
                    </div>
                    <div className="login-3 mt-5">
                        <img src={hotel1} />
                    </div>
                    <div className="login-3 ">
                        <img src="https://i.pinimg.com/736x/24/1f/47/241f473f2ae156c26c03e3a0403bf3dd.jpg" />
                    </div>

                </div>
                </div>
            </div>
            <div className="login-form">
            <div className="login-form-1">
                <form onSubmit={handleSubmit}>
                <h2>UserName:</h2>
                <input type="text"placeholder="USERNAME" onChange={(e)=>{setUsername(e.target.value)}}></input>
                <h2>Password:</h2>
                <input type="password" placeholder="PASSWORD" onChange={(e)=>{setPassword(e.target.value)}}></input><br></br>
                <p>Don't Have an account? <a href="/signup">Click Here</a></p>
               
                <button type="submit">Login</button>
                </form>
                
            </div>
            </div>
          
        </div>
        </>
    )
}

export default Login