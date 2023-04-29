const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const AddressModel = mongoose.model("AddressModel");

const { authMiddleWare, authRole } = require('../Middleware/ProtectedRoute');


router.post('/addAddress', authMiddleWare, (request, response) => {
    const { addressLineOne, addressLineTwo, city, state, zipCode, country } = request.body

    if (!addressLineOne || !city || !state || !zipCode || !country) {
        return response.status(400).json({ error: "One or more fields are empty" });
    }

    const addressModel = new AddressModel({
        addressLineOne,
        addressLineTwo,
        city,
        state,
        zipCode,
        country
    })
    addressModel.save()
        .then((savedAddress) => {
            response.status(201).json({ "savedAddress": savedAddress })
        })
        .catch((error) => {
            return response.status(400).json({ error: "error occured" })
        })
});

router.put('/editAddress/:addressId', authMiddleWare, async (req, res) => {
    //console.log(req.body)
    try {
        const result = await AddressModel.findByIdAndUpdate(req.params.addressId, {
            addressLineOne: req.body.addressLineOne, addressLineTwo: req.body.addressLineTwo, city: req.body.city, state: req.body.state, zipCode: req.body.zipCode, country: req.body.country
        }, { new: true });
        return res.json({ savedAddress: result });
    }
    catch (err) {
        console.log(err);
    }

})

module.exports = router;