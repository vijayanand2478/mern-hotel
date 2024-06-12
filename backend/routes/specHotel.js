import express,{Router} from 'express'
import hotels from '../models/hotelSchemas.js';

const router =express.Router();

router.post("/spec", async (req,res)=>{
    try {
        const {hotel}=req.body;
        const data=await hotels.findOne({name:hotel})
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json("some error in spec da!")
    }
})
export default router