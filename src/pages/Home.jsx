import React from "react";
import '../stylesheets/home.css'
import Footer from "./Footer";
import Hotels from "./Hotels";
import { UseAuthContext } from "../Contexts/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Home(){
    const {authName,setAuthName,searchItem,setSearchItem}=UseAuthContext()
    
 
    const logout=()=>{
        toast.success("logged out!",{duration:1000})
        setAuthName()
        localStorage.removeItem("hotel-user")
    }

    const handleSearch=()=>{
        
    }
    return (
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
        <div className="post">
            <div className="post-1">
            <h2>Stay At Best Places at Best Price</h2>
            <div className="post-2">
            <p>welcome ! {authName}</p>
            {/* {(!authName)?<a href="/login"><button>Login</button></a> :<p></p>} */}
            <button className="logout" onClick={logout}>Logout</button>
            
            </div>
            </div>
        </div>
        <div className="provide">
            <h1>What we provide!</h1>
            <div className="provide-ske">
                <div className="provide-box">
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, aut necessitatibus ipsum, magni debitis, dolore similique accusamus quae asperiores nostrum aspernatur facilis mollitia nesciunt? Adipisci ipsa eum ea sed accusamus?</p>

                </div>
                <div className="provide-box">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repudiandae magni laborum, tempore in autem tempora pariatur ducimus aut similique omnis explicabo illo harum fuga? Nam, officia quasi. Optio, laudantium.</p>
                </div>
                <div className="provide-box">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum voluptatum at itaque laborum ea unde aperiam. Itaque delectus, beatae inventore excepturi quae doloremque recusandae, provident placeat debitis saepe ipsum doloribus?</p>
                </div>
            </div>
        </div>
        <form className="search" onSubmit={handleSearch}>
            <input type="text" placeholder="Search For Destination" onChange={(e)=>{setSearchItem(e.target.value)}}/>
            <button type="submit">Search</button>
        </form>
        <Hotels/>
        <Footer/>
        </>
    )
}

export default Home