var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
require('dotenv').config();

var routerFbs = require('./routers/fb');
var routerTodolist = require('./routers/todolist');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(morgan('dev'));

app.use(cors()); // cors harus diatas map
app.use('/facebook', routerFbs);
app.use('/todolists', routerTodolist);

mongoose.connect('mongodb://localhost:27017/todolist', (err)=> {
  if (err) {
    console.log(err);
  } else {
    console.log('connect Mongoose.')
  }
})

app.listen(process.env.PORT||3000,()=>{
  console.log('Listening Port 3000')
});
