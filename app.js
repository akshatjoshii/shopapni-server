const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));


app.get('/', (req, res)=>{
   res.send(process.env.database);
});

app.listen(process.env.PORT ||3000, ()=>{
    console.log(`Server is running at ${process.env.PORT ||3000}`);
});
