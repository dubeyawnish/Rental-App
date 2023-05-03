const express=require('express')
const mongoose=require('mongoose')
const TenantsModel=mongoose.model("TenantModel");

const { authMiddleWare, authRole } = require('../Middleware/ProtectedRoute');
const router=express.Router();

router.post('/addTenant', authMiddleWare, (req, res) => {

    const { userId, propertyId } = req.body
    const tenantsModel = new TenantsModel({
        user: userId,
        property: propertyId
    })
    tenantsModel.save()
        .then((savedTenant) => {
            res.status(201).json({ "savedTenant": savedTenant })
        })
        .catch((error) => {
            console.log(error)
            return res.status(400).json({ error: "Tenant not added" })
        })
}
);

module.exports=router;
