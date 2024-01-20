import jwt from 'jsonwebtoken'

const verifyToken=(req, res, next)=>{
    const token=req.cookie.accessToken

    if(!token){
        return res.status(401).json({success:false,messaage:'You are not authorize'})
    }
    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
        if(err){
            return res.status(401).json({success:false,message:'token has expaired'})
        }
        req.user=user
        next();
    })

}
