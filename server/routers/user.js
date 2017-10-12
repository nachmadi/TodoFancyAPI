var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');
const auth = require('../helpers/authentikasi');

/* GET users listing. */
router.get('/', auth.islogin, userController.getallUser)
router.post('/signup', userController.signup)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)
router.post('/signin', userController.signin)

module.exports = router;
