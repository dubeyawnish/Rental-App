const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');

const UserModel=mongoose.model('UserModel');
const dotenv=require('dotenv');

const authMiddleWare=(req,res,next)=>{
    const { authorization } = req.headers;
    
    if (!authorization) {
        return res.status(401).json({ error: "Protected resource, you need to login to access it." });
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token,process.env.JWT_SECRET, (error,payload )=>{
        if(error){
            return res.status(401).json({ error: "Protected resource, you need to login to access it." });
        }
        const {_id} = payload;
        UserModel.findById(_id)
        .then(dbUser=>{
            req.dbUser = dbUser;
           
            next();
        }).catch((error) => {
            console.log(error);
        });
    });
}


const authRole = (allowedRole)=>{
    return (req, res, next) => {
        const {role} = req.dbUser;
        if(role!=allowedRole){
            return res.status(403).json({ error: "You are not allowed to perform this operation" });
        }
        next();
    }
}

module.exports = {authMiddleWare, authRole}