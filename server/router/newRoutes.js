import express from 'express'

import { preferences } from '../controllers/newsControllers.js'

const newRouter = express.Router()



newRouter.post('/preferences/:id', preferences)



export default newRouter