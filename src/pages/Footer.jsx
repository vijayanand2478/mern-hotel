import { Link } from 'react-router-dom'
import '../stylesheets/footer.css'

function Footer(){
    return(
        <>
        <div className='footer'>
            <div className='footer-box'>
                <p className='footer-logo' style={{fontSize:"30px",fontWeight:"600"}}>.Stay<span style={{color:"black"}}>INN</span></p>
                <p>© 2024 StayINN Inc. Your trusted Hotel Booking Site.</p>
            </div>
            <div className='footer-box'>
                <p style={{fontSize:"17px",fontWeight:"700"}}>Navigation</p>
                <ul style={{listStyleType:"none",padding:"0 20px"}}>
                    <li><Link to="/" style={{color:"white",textDecoration:"none"}}>Home</Link></li>
                    <li><Link to="" style={{color:"white",textDecoration:"none"}}>Hotels</Link></li>
                    <li><Link to="" style={{color:"white",textDecoration:"none"}}>About Us</Link></li>
                    <li><Link to="" style={{color:"white",textDecoration:"none"}}>Contact Us</Link></li>
                    <li><Link to="/add-hotel" style={{color:"white",textDecoration:"none"}}>Post Hotels</Link></li>
                    <li><Link to="/add-hotel" style={{color:"white",textDecoration:"none"}}>Post Hotels</Link></li>
                </ul>
            </div>
            <div className='footer-box'>
                <p style={{fontSize:"17px",fontWeight:"700"}}>Customer Support</p>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
                    <p style={{padding:"0px 10px"}}>Phone:<span style={{color:"black"}}>  +91 56827-87561</span></p>
                    <p style={{padding:"0px 10px"}}>Email:<span style={{color:"black"}}>  support@stayinn.com</span></p>
                </div>
            </div>
            <div className='footer-box'>
                <p style={{fontSize:"25px",fontWeight:"600"}}>Subscribe to our Newsletter!</p>
                <div>
                    <input type='email' placeholder='Email' style={{padding:"3px 10px",borderRadius:"7px",border:"none",marginRight:"10px"}}></input>
                    <button style={{backgroundColor:"white",color:"rgb(116, 96, 214)",fontWeight:"600",padding:"5px 10px",borderRadius:"10px",border:"none"}}>Subscribe</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer