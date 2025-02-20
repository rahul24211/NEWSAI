import express from 'express'

import { login,register,verify } from '../controllers/authcontroller.js'

import verifyToken from '../middleware/verifyToken.js'


const userRouter = express.Router()


userRouter.post("/register",register)
userRouter.post("/login", login)
userRouter.get('/verify', verifyToken,verify)



export default userRouter

