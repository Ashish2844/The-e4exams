const jwt=require("jsonwebtoken")
const JWT_SECRET=process.env.JWT_SECRET

const verifyAdmin=(req,res,next)=>{
    const token=req.cookies.adminToken
    if(!token){
        return res.status(401).json({error:'unauthorized'})
    }

    try {
        const decoded=jwt.verify(token,JWT_SECRET) 
        if(decoded.role!=="admin"){
            return res.status(403).json({error:"Forbidden"})
        }

        next();
    } catch (error) {
        res.status(403).json({error:"Invalid token"})
    }
}

module.exports=verifyAdmin;