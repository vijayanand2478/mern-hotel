import express,{ Router } from "express";
import hotels from "../models/hotelSchemas.js";
const router=express.Router();

router.get("/hotels",async(req,res)=>{
    try {
        // const {item}=req.body;
        // console.log(item)
        let data;
        // if(item=='')
            data=await hotels.find();
        // else
        //     data = await hotels.find({city:searchItem});
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json("error in retrieving data")
    }
})

export default router