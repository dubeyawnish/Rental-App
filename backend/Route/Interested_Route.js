const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const IntrestedModel = mongoose.model("IntrestedModel");
const { authMiddleWare, authRole } = require('../Middleware/ProtectedRoute');

router.post('/intrested', authMiddleWare, (req, res) => {
    const { userId, propertyId } = req.body
    IntrestedModel.findOne({ user: userId, property: propertyId })
        .then((userInDb) => {
            if (userInDb) {
                return res.status(400).json({ error: "You have already shown intrest!" })
            } else {
                const intrestedModel = new IntrestedModel({
                    user: userId,
                    property: propertyId
                })
                intrestedModel.save()
                    .then((savedIntrestedUser) => {
                        res.status(201).json({ "savedIntrestedUser": savedIntrestedUser })
                    })
                    .catch((error) => {
                        console.log(error)
                        return res.status(400).json({ error: "intrested router error" })
                    })
            }
        })
        .catch((error) => {
            console.log(error);
        })
});


router.get('/intrestedUsers/:propertyId', authMiddleWare, (req, res) => {
    IntrestedModel.find({ property: { $in: req.params.propertyId } })
        .populate("user", "_id firstName lastName email phone")
        .then((userFound) => {
            return res.json({ allInterestedTenants: userFound })
        })
        .catch((err) => {
            return res.status(400).json({ err: "No matching records found" })
        })
})




module.exports = router;