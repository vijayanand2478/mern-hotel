import { Link, useNavigate } from 'react-router-dom';
import { UseAuthContext } from '../Contexts/AuthContext'
import '../stylesheets/addHotels.css'
import { useState } from 'react';
import Footer from './Footer';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddHotels=()=>{
    const {authName,setAuthName}=UseAuthContext();
    const [userId,setUserId]=useState(authName)
    const [name,setHotelName]=useState('');
    const [city,setCity]=useState('')
    const [country,setCountry]=useState('');
    const [type,setType]=useState('')
    const [price,setPrice]=useState(0);
    const [starRating,setRating]=useState(0)
    const [imgUrls,setPic]=useState('');
    const [facilities,setFacility]=useState('')



    const logout=()=>{
        setAuthName();
        localStorage.removeItem("hotel-user");
        
    }

    const handleSubmit= async (e)=>{
       e.preventDefault();
        setUserId(authName)
        try {
           
            await axios.post("http://localhost:3000/api/my-hotels",{
                userId, name, city, country, type, price, starRating, imgUrls, facilities
            }).then(res=>{
                toast.success(res.data)
            })
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return(
        <>
        <nav className="home-nav">
            <Link to="/" style={{textDecoration:"none"}}><h1  style={{fontWeight:700,color:"white"}}>.Stay<span style={{color:"black"}}>INN</span></h1></Link>
            <div className="att">
                <a href="#">About us</a>
                <a href="#">Contact us</a>
                <a href="#">Hotels</a>
                <button className="logout" onClick={logout}>Logout</button>
            </div>
        </nav>
        <div className='add-container'>
            <h1>Post Your Hotels</h1>
            <div>
                <div>
                    <h1>we can provide you the best customer support!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptas omnis maiores at fugit quaerat commodi tempora dolores veritatis modi laborum, dolorum voluptatibus dolore blanditiis cum deserunt veniam, eveniet eaque!</p>
                </div>
                <div>

                </div>
            </div>
        </div>
        <div className='hotel-box'>
            <div className='hotel-box-img'></div>
            <form className='hotel-box-form' onSubmit={handleSubmit}>
                <label>Hotel Name:</label>
                <input type='text' placeholder='Hotel name'  onChange={(e)=>{setHotelName(e.target.value)}} required></input>
                <label>City:</label>
                <input type='text' placeholder='city'  onChange={(e)=>{setCity(e.target.value)}} required></input>
                <label>Country:</label>
                <input type='text' placeholder='Country'  onChange={(e)=>{setCountry(e.target.value)}} required></input>
                <label>type:</label>
                <input type='text' placeholder='Type' onChange={(e)=>{setType(e.target.value)}} required></input>
                <label>Price:</label>
                <input type='number' placeholder='price (in rupees)' onChange={(e)=>{setPrice(e.target.value)}} required></input>
                <label>facilities:</label>
                <input type='text' placeholder='facilities' onChange={(e)=>{setFacility(e.target.value)}} required></input>
                <label>Rating:</label>
                <input type='number' placeholder='Rating'  onChange={(e)=>{setRating(e.target.value)}} required></input>
                <label>Main Photo:</label>
                <input type='text' placeholder='image url'  onChange={(e)=>{setPic(e.target.value)}} required></input>
                <button type='submit'>Add Hotel</button>
            </form>

        </div>
        <Footer/>
        </>
    )
}

export default AddHotels