import User from "../moduls/User.js"



export const addBookmarks = async (req, res) => {

    try {
        const { article } = req.body

        const { id } = req.params

        const user = await User.findById(id)

        if (!user) res.status(404).json({ message: 'User not found' })

        // console.log(user);

        const someArticle = user.bookmarks.some(b => b.url === article.url)

        // console.log(someArticle);
        if (someArticle)
            res.status(400).json({
                message: 'Already exist'
            })

        user.bookmarks.push(article)

        await user.save()

        res.status(201).json({
            message : 'bookmarks saved'
        })




    } catch (error) {

    }

}


export const getBookmarks = async(req, res) => {

try {
    const {id} = req.params

const user = await User.findById(id)

if(!user)res.status(404).json({message : 'user not found'})

    res.status(200).json({
        data : user.bookmarks
    })
} catch (error) {
    
}
}


export const removeBookmarks = async(req, res) => {

    try {
        const {id, articleId} = req.params

        const user = await User.findById(id)

        console.log(user);
        

        if(!user)res.status(404).json({message : 'User not found'})

            user.bookmarks = user.bookmarks.filter((b)=> b._id.toString() !== articleId)


            await user.save()

            // console.log(articleId,id,user);
            

            res.status(200).json({message : 'Bookmark remove'})
    } catch (error) {
        
    }

}