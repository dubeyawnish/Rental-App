const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();
const UserModel = mongoose.model('UserModel');

router.post('/signup', (req, res) => {
    const { firstName, lastName, email, phone, password,role } = req.body;
    if (!firstName || !lastName || !email || !phone || !password ) {
        return res.status(404).json({ error: 'One or more mandatory fields are empty'});

    }
    UserModel.findOne({ email: email })
        .then((userInDb) => {
            if (userInDb) {
                return res.status(500).json({error:'User with this email already registerd'});
            }
            bcrypt.hash(password, 16)
                .then((hashedpassword) => {
                    const user = new UserModel({ firstName: firstName, lastName: lastName,phone:phone, email: email, password: hashedpassword,role })
                    user.save()
                        .then((newUser) => {
                            res.status(201).json({result:"User registered successfully"});

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

module.exports = router;