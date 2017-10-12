const user = require('../models/User');
const halper = require('../helpers/util');
var jwt = require('jsonwebtoken');

module.exports = {
  islogin : (req,res,next) => {
  jwt.verify(req.headers.token, process.env.SECRET_TOKEN,function(err,decoded){
    if(!err){
      req.user={
        user_id: datauser.user_id,
        email: datauser.email,
        nama: datauser.name
      }
      next();
    } else {
      res.send(err)
    }
  })
},
//daftar user baru
signupWithFb : (req,res, next) => {
    user.findOne({
      email: req.dataFb.email
    })
    .then(datauser=>{
      if(datauser===null){
        user.create({
          user_id: req.dataFb.id,
          user_pass: "",
          nama: req.dataFb.name,
          email: req.dataFb.email,
          salt: ""
        })
        .then(data => {
          next();
        })
      }else{
        next();
      }
    })
    .catch(err => {
      res.send(err)
    })
},
signinWithFb : (req,res) => {
  user.findOne({
    email: req.dataFb.email
  })
  .then(datauser => {
      console.log(datauser);
      jwt.sign({
                  user_id: datauser.user_id,
                  email: datauser.email,
                  nama: datauser.nama
      }, process.env.SECRET_TOKEN, { expiresIn: 60 * 60 },(err,token)=>{
           if(!err){
              console.log({tokenjwt:token});
              res.send({tokenjwt:token});
           }else{
             console.log(err);
              res.send(err);
           }
      });
  })
  .catch(err => {
    res.send(err)
  })
},
// login
signin : (req,res) => {
  user.findOne({
    email: req.body.email
  })
  .then(datauser => {
    let saltFrmDb = datauser.salt;
    let passFromCli = helper.getPassWithSalt(req.body.user_password,saltFrmDb);
    if(datauser.user_pass===passFromCli){
      jwt.sign({
                  user_id: datauser.user_id,
                  email: datauser.email,
                  nama: datauser.nama,
                  id: datauser._id
      }, process.env.SECRET_TOKEN,// modul require('dotenv').config() letak file di root
      { expiresIn: 60 * 60 },(err,token)=>{
           if(!err){
              res.send(token);
           }else{
              res.send(err);
           }
      });
    } else {
      res.send('password anda salah')
    }
  })
  .catch(err => {
    res.send(err)
  })
},
//daftar user baru
signup : (req,res, next) => {
  user.findOne({
    email: req.body.email
  })
  .then(datauser=>{
    salt = helper.getRandom(5);
    md5_pass = halper.getPassWithSalt(req.body.user_pass, salt);
    user.create({
      user_id: req.body.user_id,
      user_pass: md5_pass,
      nama: req.body.nama,
      email: req.body.email,
      salt: salt
    })
    .then(data => {
      next();
    })
  })
  .catch(err => {
    res.send(err)
  })
},
getallUser : (req,res) => {
  user.find({})
  .then(datauser => {
    res.send(datauser)
  })
  .catch(err => {
    res.send(err)
  })
},
deleteUser : (req,res) => {
  user.deleteOne({_id:req.params.id})
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
},
updateUser : (req,res) => {
  user.update({_id:req.params.id},{
    user_id: req.body.user_id,
    user_pass: req.body.user_pass,
    nama: req.body.nama,
    email: req.body.email
  })
}

}
