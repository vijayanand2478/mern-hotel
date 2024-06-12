import express from 'express'
import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const User=new mongoose.model("user",userSchema)

export default User;