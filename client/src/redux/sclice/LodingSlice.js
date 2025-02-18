import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    loading: false
}


const loadingSlice = createSlice({
    name: "loading", 
    initialState,

    reducers : {
        Startloading : function(state){
            state.loading = true
        },

        Stoploading : function(state){
            state.loading = false
        }
    }
})



export default loadingSlice.reducer
export const {Startloading,Stoploading} = loadingSlice.actions