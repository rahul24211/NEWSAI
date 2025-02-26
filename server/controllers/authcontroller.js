import User from "../moduls/User.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {

    try {
        const { password, email } = req.body

        const user = await User.findOne({ email })

        if (!user) {

            return res.status(404).json({

                message: "user is not registered, please ragister and try again"
            })
        }


        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).json({

                message: "password do not match,please try again!"
            })
        }


        const token = jwt.sign({ id: user._id, name: user.name,email : user.email },
            "this_is_string", { expiresIn: '1d' }
        )

        res.cookie('token', token, {

            httpOnly: true
        })

        res.status(200).json({

            preferences: user.preferences,
            message: "login successfully"
        })

        // console.log(user);



    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong,Please try again'
        })
    }

}
export const verify = (req, res) => {

    // console.log('verify wali' , req.user);

    if (!req.user) {

    } else {
        return res.json({
            status: 200,
            authenticated: true,
            id: req.user.id,
            name: req.user.name,
            email : req.user.email
        })
    }


}



export const register = async (req, res) => {

    try {
        const { name, password, email } = req.body

        const user = await User.findOne({ email })


        if (user) {

            return res.json({
                status: 404,
                message: "User is already registered, Please Login"
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