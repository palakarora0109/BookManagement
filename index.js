const express = require('express');
const mongoose =  require('mongoose');
const router=require('./routes/bookroutes');
const app=express(); 


app.use(express.json());
app.use('/books',router);
// url - http://localhost:5000/books

mongoose.connect("mongodb+srv://palakarora0901:i6LrCcMiFtv0UmCV@cluster0.m9prias.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log('Connected to database'))
.then(()=>{
    app.listen(5000);
}).catch((err)=>console.log(err));




// i6LrCcMiFtv0UmCV