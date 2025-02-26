import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {


}


export const addReadingHistory = createAsyncThunk("/addReadingHistory",()=>{


})


export const getReadingHistory = createAsyncThunk("/getReadingHistory",()=>{

    
})


export const removeReadingHistory = createAsyncThunk("/removeReadingHistory",()=>{

    
})


const readingHistorySlice = createSlice({
    name : "readingHistory",
    initialState,

    extraReducers : (builder)=>{

        builder.addCase(addReadingHistory.pending,(state)=>{

        }).addCase(addReadingHistory.fulfilled,(state)=>{

        }).addCase(addReadingHistory.rejected,(state)=>{

        })

        // ----------------------

        builder.addCase(getReadingHistory.pending,(state)=>{

        }).addCase(getReadingHistory.fulfilled,(state)=>{

        }).addCase(getReadingHistory.rejected,(state)=>{

        })

        // ----------------------


        builder.addCase(removeReadingHistory.pending,(state)=>{

        }).addCase(removeReadingHistory.fulfilled,(state)=>{

        }).addCase(removeReadingHistory.rejected,(state)=>{

        })
    }
})





export default readingHistorySlice.reducer