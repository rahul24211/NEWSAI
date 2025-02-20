import { configureStore } from "@reduxjs/toolkit";
import countReducer from './sclice/CounterSclice'
import loadingReducer from './sclice/LodingSlice'
import productReducer from './sclice/ProductSlice'
import authReducer from './sclice/AuthSlice'


const store = configureStore({
    reducer : {
        count : countReducer,
        loading : loadingReducer,
        product : productReducer,
        auth : authReducer
        
    }
})



export default store