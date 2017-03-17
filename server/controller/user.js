var mongoose = require('mongoose');
require('./../models/user');
var User = mongoose.model('User');
exports.signup = function(req,res,next){
  var _user = req.body.user;
  var user = new User(_user);
  user.save(function(err,user){
    if(err){
      return next(err);
    }
    res.json(true);
  })
};

exports.login = function(req,res,next){
  var _user = req.body.user,
      name = _user.name,
      password = _user.password;
  console.log(_user);
  User.findOne({name:name},function(err,doc){
    if(err){
      return next(err);
    }
   if(doc){
      var _pass = doc.password;
      if(_pass !== password){
        return res.json("密码不正确!");
      }
      res.json(doc);
   }else{
      res.json("用户名不存在!");
   }
   
  })
};

exports.validName = function(req,res,next){
  User.fetch(function(err,name){
    if(err){
      return next(err);
    }
    res.send(name);
  })
}