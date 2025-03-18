// const express = require("express")
// const dotEnv = require("dotenv")

import express from "express";
import dotEnv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express()
dotEnv.config()
const PORT = process.env.PORT || 5000
app.use(express.json());     // to parse th incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use(express.urlencoded({extended:true}))

app.use("/api/auth", authRoutes) // middleware 
app.use("/api/messages", messageRoutes)   //middleware
app.use("/api/users", userRoutes)   //middleware

// app.get("/",(req,res)=>{
//     res.send("Hello world!!!!!")
// })


app.listen(PORT,()=> {
    connectToMongoDB();
    console.log(`Server is running on the port ${PORT}`)
})