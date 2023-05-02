const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const PropertiesModel = mongoose.model("PropertiesModel");

const { authMiddleWare, authRole } = require('../Middleware/ProtectedRoute');

router.post('/addProperties', authMiddleWare, authRole('owner'), (request, response) => {
    const { title, description, price, propertyImgName, userId, address } = request.body

    if (!title || !description || !price) {
        return response.status(400).json({ error: "title field is empty!" });
    }

    const propertiesModel = new PropertiesModel({
        title,
        description,
        price,
        propertyImgName,
        user: userId,
        address: address

    })
    propertiesModel.save()
        .then((savedProperties) => {
            response.status(201).json({ "savedProperties": savedProperties })
        })
        .catch((error) => {
            console.log(error)
            return response.status(400).json({ error: "error occured" })
        })
});


router.get('/viewAllProperties/:userId', authMiddleWare, (req, res) => {
    PropertiesModel.find({ user: { $in: req.params.userId } })

        .then((propertyFound) => {

            return res.json({ allProperties: propertyFound })
        })
        .catch((err) => {
            return res.status(400).json({ err: "Property was not found!" })
        })
})

router.get('/viewProperties/:propertyId', (req, res) => {
    PropertiesModel.findOne({ _id: req.params.propertyId })
        .populate("user", "_id firstName lastName email phone")
        .populate("address")
        .then((propertyFound) => {
            return res.json({ property: propertyFound })
        })
        .catch((err) => {
            return res.status(400).json({ err: "Property was not found!" })
        })
})

router.put('/editProperty/:propertyId', authMiddleWare, authRole('owner'), async (req, res) => {
    // mogoose shows error with callbackfunction for this i use try catch beacuse with findByIdandupdate callback fuction is deprecated
    try {
        const result = await PropertiesModel.findByIdAndUpdate(req.params.propertyId, {
            title: req.body.title, description: req.body.description, price: req.body.price, propertyImgName: req.body.imgName
        }, { new: true });

        return res.json({ savedProperties: result });

    }
    catch (err) {
        console.log(err);

    }
});


router.delete('/deletepost/:propertyId', authMiddleWare, async (req, res) => {
    const result = await PropertiesModel.findByIdAndDelete(req.params.propertyId)
    if (result) {
        res.send("deleted successfully")
    }
    else {
        res.status(404).send("cannot find property with id " + req.params.propertyId)
    }
})

router.get('/viewAllProperties', (req, res) => {
    PropertiesModel.find({ isRented: false })
       
        .then((propertyFound) => {
            return res.json({ allProperties: propertyFound })
        })
        .catch((err) => {
            return res.status(400).json({ err: "Property was not found!" })
        })
})





module.exports = router;