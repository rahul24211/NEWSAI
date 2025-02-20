import jwt from 'jsonwebtoken'


const verifyToken = (req,res,next)=>{

    // console.log(req.headers.cookie);

    const token = req.cookies.token

    // console.log(token);

    if (!token) {
     return   res.json({
            status : 401,
            authenticated : false,
            message : 'token not found'

        })
    }
    
    const decoded = jwt.verify(token,'this_is_string')
    // console.log(decoded);
    req.user = decoded
    next()
    

}


export default verifyToken