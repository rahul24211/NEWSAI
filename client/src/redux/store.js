import { configureStore } from "@reduxjs/toolkit";
import countReducer from './sclice/CounterSclice'
import loadingReducer from './sclice/LodingSlice'
import authReducer from './sclice/AuthSlice'
import NewsReducer from './sclice/NewsSlice'
import bookmarksReducer from './sclice/BookmarksSlice'
import readingHistoryReducer from './sclice/ReadingHistorySlice'


const store = configureStore({
    reducer: {
        count: countReducer,
        loading: loadingReducer,
        auth: authReducer,
        news: NewsReducer,
        bookmarks : bookmarksReducer,
        readingHistory : readingHistoryReducer,

    }
})



export default store