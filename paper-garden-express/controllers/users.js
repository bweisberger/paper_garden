const express = require('express');
const router = express();
const User = require('../models/users');
const bcrypt = require('bcryptjs');

router.post('/login', async(req, res)=> {
    try{
        console.log(req.body.email, "<---req.body.username in login in usercontroller");
        const foundUser = await User.findOne({email: req.body.email});
        
        if(foundUser){

        }
    }
})