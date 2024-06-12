import mongoose from "mongoose";

const mongo = async()=>{
    
        await mongoose.connect("mongodb://localhost:27017/hotel")
        .then(()=>{
            console.log("mongodb is connected successfully");
        })
        .catch(()=>{
            console.log("connection failure");
        })
}

export default mongo
