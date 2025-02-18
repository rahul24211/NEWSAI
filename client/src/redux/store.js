import { configureStore } from "@reduxjs/toolkit";
import countReducer from './sclice/CounterSclice'
import loadingReducer from './sclice/LodingSlice'
import productReducer from './sclice/ProductSlice'


const store = configureStore({
    reducer : {
        count : countReducer,
        loading : loadingReducer,
        product : productReducer
        
    }
})



export default store