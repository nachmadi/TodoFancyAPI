zlet express =require('express');
let router = express.Router();

let  controllerFb = require('../controllers/fbController');
let  controllerUser = require('../controllers/userController')

router.get('/me', controllerFb.setAccessToken, controllerFb.getDataByToken, controllerUser.signupWithFb, controllerUser.signinWithFb);

//router.get('/',
//router.get('/fbtimeline', controllerFb.setAccessToken, controllerFb.getFeed);
//router.post('/poststatus', controllerFb.setAccessToken,  controllerFb.postStatus);
// router.get('/:id',controllerUsers.isLogin, controllerUsers.getOneUsers);
// router.post('/',controllerUsers.isLogin, helperLogin.isAdmin, controllerUsers.createUser);
// router.delete('/:id', controllerUsers.isLogin, helperLogin.isAdmin, controllerUsers.deleteUser);
// router.put('/:id', controllerUsers.isLogin, controllerUsers.updateUser);

module.exports = router;
