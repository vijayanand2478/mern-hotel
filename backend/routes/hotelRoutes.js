import express,{ Router } from "express";
import hotels from "../models/hotelSchemas.js";



const router =express.Router();

//api/my-hotels
router.post("/",async (req,res)=>{
    
    try {
        const {userId,name,city,country,type,price,facilities,starRating,imgUrls}=req.body
        console.log(req.body)
    
        const hotel=new hotels({
            userId,
            name,
            city,
            country,
            type,
            price,
            facilities,
            starRating,
            imgUrls
        });
        await hotel.save()
        res.status(201).json("hotel added successfully!")
    } catch (error) {
        console.log(error)
        res.status(500).json("some error occured in adding hotel")
    }
})

export default router