const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require("cors")

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0.vwxc1rp.mongodb.net/?retryWrites=true&w=majority').then((data)=>{
  if(!data) {console.log("error");}
  else console.log("db connectd");
})

app.use(logger('dev'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

app.listen(3000,()=>console.log("3000 port bilan ishga tushdi !"))