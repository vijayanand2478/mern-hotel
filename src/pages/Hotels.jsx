import { useEffect, useState } from 'react'
import '../stylesheets/hotels.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext, UseAuthContext } from '../Contexts/AuthContext';
import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom';

function Hotels(){
    const [list,setList]=useState([]);
    const {searchItem,setSearchItem,hotel,setHotel}=UseAuthContext();
    const [item,setItem]=useState('')

    

    const fetchData=async()=>{
        try {
            setItem(searchItem)
            await axios.get("http://localhost:3000/api/list/hotels")
            .then(res=>{
                setList(res.data)
            })
        } catch (error) {
            toast.error(error)
            toast.error(res.data)
        }
    }

    const handleHotel=()=>{
        setHotel(item.name)
    }


    useEffect(()=>{
        fetchData()
     })
    
    return (
        <>
        <div className='hotel-container'>
            {list.map(item=>(
                <div key={item._id} className='hotel-map'>
                    <div className='hotel-map-img'>
                        <img src={item.imgUrls} alt={item.name}></img>
                    </div>
                    <div className='hotel-map-div2'>
                        <h1 style={{fontSize:"40px"}}><i className='pi pi-check' style={{fontSize:"20px"}}></i>{item.name}</h1>
                        <p style={{fontSize:"20px"}}>{item.city},{item.country}</p>
                        <p>Price: ₹{item.price}</p>
                        <div className='hotel-map-btn'>
                            <Link to="/spec-hotel"><button onClick={handleHotel}>Book Now</button></Link>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
        </>
    )
}

export default Hotels