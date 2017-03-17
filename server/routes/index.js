var express = require('express');
var router = express.Router();
var User = require('./../controller/user');

/* GET home page. */
router.post('/user/register',  User.signup);
router.post('/user/login', User.login);
router.get('/user/userName',User.validName)
module.exports = router;
