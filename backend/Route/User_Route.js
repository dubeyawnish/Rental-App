const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
//dotenv.config();




const router = express.Router();
const UserModel = mongoose.model('UserModel');

router.post('/signup', (req, res) => {
    const { firstName, lastName, email, phone, password,imgName, role } = req.body;
    if (!firstName || !lastName || !email || !phone || !password) {
        return res.status(404).json({ error: 'One or more mandatory fields are empty' });

    }

    UserModel.findOne({ email: email })
        .then((userInDb) => {
            if (userInDb) {
                return res.status(500).json({ error: 'User with this email already registerd' });
            }
            bcrypt.hash(password, 16)
                .then((hashedpassword) => {
                    const user = new UserModel({ firstName: firstName, lastName: lastName, phone: phone, email: email, password: hashedpassword, profileImgName: imgName,role: role })
                    user.save()
                        .then((newUser) => {
                            res.status(201).json({ result: "User registered successfully" });

                        })
                        .catch((err) => {
                            console.log(err);
                        })

                })
                .catch((err) => {
                    console.log(err);
                })


        })
        .catch((error) => {
            console.log(error);
        })



})

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(404).json({ error: "One or more mandatory fields empty" });
    }
    UserModel.findOne({ email: email })
        .then((userInDb) => { // if email find in db then whole data in userModel will be displayed
            if (!userInDb) {
                res.status(401).json({ error: "Invalid Credentials" });
            }
            bcrypt.compare(password, userInDb.password)
                .then((didmatch) => {
                    if (didmatch) {
                        //console.log(didmatch);
                        const jwttoken = jwt.sign({ _id: userInDb._id }, process.env.JWT_SECRET);
                        userInDb.password = undefined;
                        const userInfo = { token: jwttoken, id: userInDb._id, user: userInDb }
                        res.status(201).json({ result: userInfo });

                    }
                    else {
                        res.status(401).json({ error: "Invalid Credentials" });
                    }

                })
                .catch((err) => {
                    console.log(err);

                })


        })
        .catch((err) => {
            console.log(err);
        })

})

router.put('/user/profile/:type/:userId', async (req, res) => {
    //console.log(req)
    let dataToUpdate;
    if (req.params.type == 'ad') {
        dataToUpdate = { address: req.body.address };
    }
    if (req.params.type == 'pd' || req.params.type == 'pp') {
        dataToUpdate = req.body;
    }

    try {
        const docs = await UserModel.findByIdAndUpdate(req.params.userId, dataToUpdate, { new: true })
        return res.json({ user: docs })
    }
    catch (err) {
        return res.status(400).json({ err: "Incorrect data" })

    }
})


router.get('/user/profile/:userId', (req, res) => {
    UserModel.findOne({ _id: req.params.userId })
        .select("-password")
        .populate("address")
        .then((userFound) => {
            return res.json({ user: userFound })
        })
        .catch((err) => {
            return res.status(400).json({ err: "User was not found!" })
        })
});








module.exports = router;