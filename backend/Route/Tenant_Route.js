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

router.get('/myTenants', authMiddleWare, async (req, res) => {
    const user = req.dbUser;
    let tenantList = new Array()
    //console.log(user)
    const myProps = await PropertiesModel.find({ user: { $in: user._id } });

    for (let i = 0; i < myProps.length; i++) {
        const tenantData = await TenantsModel.find({ property: { $in: myProps[i]._id } })
            .populate("user", "_id firstName lastName email phone profileImgName")
            .populate("property");
        if (tenantData[0] != null) {
            tenantList.push(tenantData[0])
        }
    }

    return res.json({ allTenants: tenantList })
})

module.exports=router;
