import express from 'express';
import mongoose from 'mongoose';
import mongo from './mongo.js'
import cors from 'cors'

import bodyParser from 'body-parser';
import User from './models/userSchema.js';
import hotelRoutes from './routes/hotelRoutes.js'
import listing from './routes/listingRoute.js'
import spec from './routes/specHotel.js'


const PORT=3000;

const app=express();

app.use(express.json());
app.use(cors());


app.post("/api/auth/signup",cors(), async(req,res)=>{
    try {
        const {username,password}=req.body;
        const user1=await User.findOne({username:username});
        if(user1){
            return res.status(400).json("user already exist");
        }
        const data=new User({
            username,
            password
        })
        await data.save()
        res.status(200).json("done")
    } catch (error) {
        res.status(500).json("error in signup");
        console.log(error.message)
    }
})

app.post("/api/auth/login",cors(),async(req,res)=>{
    const {username,password}=req.body
    try{
        const user1=await User.findOne({username:username});
        if(!user1){
            return res.status(400).json({error:"the user doesn't exist"})
        }
        const check= user1.password==password;
        if(!check){
            return res.status(400).json({error:"the password doesn't match !"});
        }
        res.status(200).json({message:"you are logged in succesfully"})
        
    }
    catch(error){
        res.status(500).json({message:"error in login"});
        console.log(error.message)
    }
   
})

app.use("/api/my-hotels",hotelRoutes)
app.use("/api/list",listing)
app.use("/api/hotel/",spec)

app.listen(PORT,()=>{
    mongo();
    console.log(`the app is running in ${PORT}`);
})
