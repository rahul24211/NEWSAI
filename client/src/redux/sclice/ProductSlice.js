import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    product: [],
    loading: false,
    error: null
}


export const fetchProduct = createAsyncThunk('fetch_Product', async () => {

    try {
        const res = await axios.get("https://fakestoreapi.com/products")

        return res.data
    } catch (error) {

    }
})


const productSlice = createSlice({
    name: "product",
    initialState,

    extraReducers: (builder) => {

        builder.addCase(fetchProduct.pending, (state) => {

            state.loading = true
        }).addCase(fetchProduct.fulfilled, (state, action) => {
            state.product = action.payload
        })


    }
})


export default productSlice.reducer
