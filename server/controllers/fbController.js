var express = require('express');
var router = express.Router();
const FB = require('fb')

module.exports = {
  setAccessToken : (req, res, next) => {
      FB.setAccessToken(req.headers.accesstoken)
      next();
  },
  getDataByToken : (req, res, next) => {
                FB.api('/me', {fields : ['id','name', 'email']}, (fbresponse) => {
                  req.dataFb=fbresponse;
                  next();
                })
  },
  getFeed : (req, res) => {
    FB.api('/me/feed', function(response) {
      res.send(response)
    })
  },
  postStatus :(req, res) => {
    FB.api('/me/feed', 'post', {
      message: req.body.postStatus
    }, function(response) {
      res.send(response)
    })
  }

}
