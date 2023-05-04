const express=require('express')
const mongoose=require('mongoose')
const TenantsModel=mongoose.model("TenantModel");
const PropertiesModel=mongoose.model("PropertiesModel")

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
   // console.log(user)
    const myProps = await PropertiesModel.find({ user: { $in: user._id } });
    //console.log(myProps);

    for (let i = 0; i < myProps.length; i++) {
        const tenantData = await TenantsModel.find({ property: { $in: myProps[i]._id } })
            .populate("user", "_id firstName lastName email phone profileImgName")
            .populate("property" );
           // console.log(tenantData);
        if (tenantData[0] != null) {
            tenantList.push(tenantData[0])
        }
    }

    return res.json({ allTenants: tenantList })
})



router.get('/myTenants/:userId', authMiddleWare, (req, res) => {
    TenantsModel.findOne({ _id: req.params.userId })
        .populate("user", "_id firstName lastName email phone profileImgName")
        .populate("property")
        .then((tenantFound) => {
            return res.json({ tenant: tenantFound })
        })
        .catch((err) => {
            return res.status(400).json({ err: "Tenant was not found!" })
        })
})


router.delete('/deleteTenant/:tenantId', async (req, res) => {
    const result = await TenantsModel.deleteMany({ _id: { $in: req.params.tenantId } })
    if (result.deletedCount > 0) {
        res.status(200).send(`deleted ${result.deletedCount} tenant successfully`)
    }
    else {
        res.status(404).send("cannot find tenant with id ")
    }
})

module.exports=router;
