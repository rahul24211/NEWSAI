import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookies } from "../../utils/utils";
import { toast, Toaster } from "sonner";



const initialState = {

    loading: false


}


const id = getCookies('id')

export const setPreferences = createAsyncThunk('/preferences', async (data, { rejectWithValue }) => {

    try {


        const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/Preferences/${id}`, data)

        return res.data


    } catch (error) {

        return rejectWithValue(error)
    }

})


export const NewsSlice = createSlice({
    name: "news",
    initialState,

    extraReducers: (builder) => {

        builder.addCase(setPreferences.pending, (state => {
            state.loading = true
        })).addCase(setPreferences.fulfilled, (state,action) => {
            state.loading = false
            // console.log(action.payload);
toast.success(action.payload.message)
            
            
        }).addCase(setPreferences.rejected, (state) => {
            state.loading = false
        })

    }


})









export default NewsSlice.reducer