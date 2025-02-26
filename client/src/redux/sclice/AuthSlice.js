import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { removeCookies, setCookies } from '../../utils/utils'
import { getCookies } from '../../utils/utils'

import axios from 'axios'

import { toast } from 'sonner'


const initialState = {

    loading: false,
    authenticated: getCookies('isAuthenticated') || false,
    name: getCookies('name') || null,
    id: getCookies('id') || null,

    preferences: JSON.parse(localStorage.getItem('preferences')) || []

}



export const signup = createAsyncThunk("/register", async (data, { rejectWithValue }) => {

    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, data)

        return res.data

    } catch (error) {
        return rejectWithValue(error)
    }


})




export const login = createAsyncThunk("/login", async (data, { rejectWithValue }) => {


    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, data, { withCredentials: true })



        const verifyres = await axios.get(`${import.meta.env.VITE_API_URL}/auth/verify`, { withCredentials: true })



        return { ...res.data, ...verifyres }

    } catch (error) {

        return rejectWithValue(error)
    }
})



const authSlice = createSlice({

    name: "auth",
    initialState,

    reducers: {

        SignOut: function (state) {

            state.authenticated = false,
                state.id = null,
                state.name = null
            removeCookies('isAuthenticated')
            removeCookies('id')
            removeCookies('name')


        }
    },











    extraReducers: (builder) => {


        builder.addCase(signup.pending, (state) => {
            state.loading = true
        }).addCase(signup.fulfilled, (state, action) => {

            // console.log(action.payload);
            state.loading = false

            toast.success(action.payload.message)
        }).addCase(signup.rejected, (state, action) => {

            toast.error(action.payload.response.data.message)
            state.loading = false


            // ------------------


        }).addCase(login.pending, (state) => {
            state.loading = true
        }).addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.authenticated = action.payload.data.authenticated;
            
            state.name = action.payload.data.name;
            state.id = action.payload.data.id;
            state.preferences = action.payload.preferences

            localStorage.setItem('preferences', JSON.stringify(action.payload.preferences))



            setCookies('isAuthenticated', action.payload.data.authenticated);
            setCookies('email',action.payload.data.email)
            setCookies('name', action.payload.data.name);
            setCookies('id', action.payload.data.id);


            // console.log(action.payload);
            toast.success(action.payload.message);

        }).addCase(login.rejected, (state, action) => {
            state.loading = false
            // console.log(action.payload);
            toast.error(action.payload.response.data.message)
        })


    }




})






export default authSlice.reducer
export const { SignOut } = authSlice.actions