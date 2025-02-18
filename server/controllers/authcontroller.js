import User from "../moduls/User.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'




export const login = async () => {

   try {
    const { password, email } = req.body

    const user = await User.findOne(email)

    if (!user) {

        return res.json({
            status: 404,
            message: "user is not registered, please ragister and try again"
        })
    }


    const isMatch = await bcrypt.compare(password,User.password)

    if (!isMatch) {
        res.json({
            status : 401,
            message : "password do not match,please try again!"
        })
    }


const token = jwt.sign({id : User._id, name : name},
    "this_is_string",{expiresIn : '1d'}
)

res.cookie('token', token, {
    httpOnly :true
})

res.status(200).json({
    message : "login successfully"
})




   } catch (error) {
    
   }

}



export const register = async (req, res) => {

    try {
        const { name, password, email } = req.body

        const user = await User.findOne({ email })


        if (user) {

            return res.json({
                status: 404,
                message: "User is already registered, please Login"
            })
        }


        const hashedPassword = await bcrypt.hash(password, 12)

        const NewUser = await User.create({ name, password: hashedPassword, email })


        res.json({
            status: 201,
            data: NewUser,
            message: "registered successfully"
        })

    } catch (error) {

    }



}