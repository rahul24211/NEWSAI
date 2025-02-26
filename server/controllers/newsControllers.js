
import User from "../moduls/User.js";


export const preferences = async (req, res) => {

    try {
        const { id } = req.params
        const { preferences } = req.body

        const user = await User.findById(id)

        // console.log(user);
        // console.log(preferences);




        user.preferences = [...user.preferences, ...preferences]

        await user.save()

        res.status(200).json({
            message: 'Preferences Save Successfully'
        })



    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }


}