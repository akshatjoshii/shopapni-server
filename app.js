const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running at ${process.env.PORT ||3000}`);
});
