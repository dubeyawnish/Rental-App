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

router.put('/editProperty/:propertyId', authMiddleWare, authRole('owner'), (req, res) => {
    PropertiesModel.findByIdAndUpdate(req.params.propertyId, {
        title: req.body.title, description: req.body.description, price: req.body.price, propertyImgName: req.body.imgName
    }, { new: true }, function (err, docs) {
        if (err) {
            console.log(err)
        }
        else {
            
            return res.json({ savedProperties: docs })
        }
    })
})


module.exports = router;