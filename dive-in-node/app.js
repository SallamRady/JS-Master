const express = require('express');
const AdminRouter = require('./routes/admin');
const path = require('path');
const User = require('./models/User');
const { default: mongoose } = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017';
// expresss appication
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// DB Connection
// MongoClient.connect('mongodb://localhost:27017').then(
//     (client)=>{
//         let db = client.db('FMDB');
//         console.log('Mongo DB Connection done successfuly :) ');
//         client.close();
//     }
// )

// middleware
app.all('/',(req,res,next)=>{
    // res.sendFile(path.join(__dirname,'views','Home.htm'));
    // MongoClient.connect('mongodb://localhost:27017').then(
    //     (client)=>{
    //         let db = client.db('test');
    //         let users = db.collection('users');
    //         users.find().toArray().then(
    //             (data)=>{
    //                res.render('index',{users:data});
    //             }
    //         ).catch( err => {console.log('error in get data')});
    //     }
    // );

    mongoose.connect(dbUrl,{useNewUrlParser:true}).then(
        ()=>{
            User.find().then(
                (data)=>{
                    res.render('index',{users:data});
                    mongoose.disconnect();
                }
            ).catch(err=>console.log('error in fetch users : ',err));
        }
    )
    
});
app.all('/about',(req,res,next)=>{
    res.send('<h1>About Page</h1>');
});
app.use('/admin',AdminRouter);
app.use((req,res, next)=>{
    res.send('<h1>404 | Not Found</h1>')
});

app.listen(3000,()=>console.log('server is listenning on port 3000'));