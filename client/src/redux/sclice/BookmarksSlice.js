import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {


}


export const addBookmarks = createAsyncThunk("/addBookmarks", () => {

    try {

    } catch (error) {

    }

})




export const getBookmarks = createAsyncThunk("/getBookmarks", () => {

    try {

    } catch (error) {

    }

})



export const removeBookmarks = createAsyncThunk("/removeBookmarks", () => {

    try {

    } catch (error) {

    }

})





const bookmarksSlice = createSlice({
    name: "bookmarks",
    initialState,

    extraReducers: (builder) => {

        builder.addCase(addBookmarks.pending, (state) => {

        }).addCase(addBookmarks.fulfilled, (state) => {

        }).addCase(addBookmarks.rejected, (state) => {

        })

        // ----------------------

        builder.addCase(getBookmarks.pending, (state) => {

        }).addCase(getBookmarks.fulfilled, (state) => {

        }).addCase(getBookmarks.rejected, (state) => {

        })


        // ----------------------------------


        builder.addCase(removeBookmarks.pending, (state) => {

        }).addCase(removeBookmarks.fulfilled, (state) => {

        }).addCase(removeBookmarks.rejected, (state) => {

        })








    }
})







export default bookmarksSlice.reducer

