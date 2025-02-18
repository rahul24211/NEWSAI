import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
    name : {
        type : String
    },

    password : {
        type : String
    },

    email : {
        type : String
    },

    preferences : [{String}],

    bookmarks : [{String}]
    
})


const User = mongoose.model("User", UserSchema)

export default User