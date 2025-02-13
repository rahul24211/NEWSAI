import express from "express"
import dotenv from "dotenv"
import dbConnect from "./config/db.js"


const app = express()

dotenv.config()
dbConnect()





app.listen(process.env.PORT,()=>(console.log(`server is running on the port ${process.env.PORT}`)
))