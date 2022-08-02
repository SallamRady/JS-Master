const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const dbUrl = 'mongodb://localhost:27017';
const mongoose = require('mongoose');
const User = require('../models/User');

const bodyParserMW = bodyParser.urlencoded({extended:true});

router.all('/',(req,res,next)=>{
    res.send('<h1>Home Of Dashboard</h1>');
})

router.all('/about',(req,res,next)=>{
    res.send('<h1>About Dashboard</h1>');
});

router.get('/insertUser',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','Insert.htm'));
});

router.post('/saveUser',bodyParserMW,(req,res,next)=>{
    // MongoClient.connect('mongodb://localhost:27017').then(
    //     (client)=>{
    //         let db = client.db('FMDB');
    //         let users = db.collection('users');
    //         let user = { name:req.body.name,age:+req.body.age };
    //         users.insertOne(user).then(
    //             result=>{
    //                 console.log('user added successfully',result);
    //                 res.end('done');
    //             }
    //         ).catch(err=>{
    //             console.log('user added failed ',err);
    //             res.end('error :(');
    //         });
    //     }
    // )

    mongoose.connect(dbUrl,{useNewUrlParser:true}).then(
        ()=>{
            console.log('mongoose connection done successfully');
            let newUser = new User({
                name:req.body.name,
                age:req.body.age
            });
            newUser.save().then(
                (result)=>{
                    console.log('user created sucessflly ',result);
                    mongoose.disconnect();
                    res.redirect('/');
                }
            ).catch(
                ()=>console.log('error in create new user')
            );
        }
    ).catch( err => {console.log('error in mongoose connection')});
})

module.exports = router;