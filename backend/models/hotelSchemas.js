import mongoose from "mongoose"

const hotelSchema=new mongoose.Schema({
    userId:{type: String,required:true},
    name:{type:String,required:true},
    city:{type:String,required:true},
    country:{type:String,required:true},
    type:{type:String,required:true},
    price:{type:Number,required:true},
    facilities:{type:String,required:true},
    starRating:{type:Number,required:true, min:1, max:5},
    imgUrls:{type:String,required:true}
})

const hotels = mongoose.model("hotelList",hotelSchema)

export default hotels