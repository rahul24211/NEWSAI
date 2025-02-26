import express from "express"
import dotenv from "dotenv"
import dbConnect from "./config/db.js"
import userRouter from "./router/frontendrouter.js"
import newRouter from './router/newRoutes.js'
import cors from 'cors'
import cookieParser from "cookie-parser"
import bookmarksRouter from "./router/bookmarksRouter.js"
import readingHistoryRouter from "./router/readinHistoryRouter.js"


const app = express()



app.use(cors({
    credentials : true,
    origin : 'http://localhost:5173'
}))

app.use(cookieParser())

app.use(express.json())
dotenv.config()
dbConnect()




app.use('/auth',userRouter )
app.use('/api',newRouter)
app.use('/api',bookmarksRouter)
app.use('/api',readingHistoryRouter)
app.listen(process.env.PORT,()=>(console.log(`server is running on the port ${process.env.PORT}`)
))