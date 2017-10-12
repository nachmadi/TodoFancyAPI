var express = require('express');
var router = express.Router();
const todolisController = require('../controllers/todolistController');
const auth = require('../helpers/authentikasi');

/* GET users listing. */
router.get('/', todolisController.getAllTodolist)
router.post('/', todolisController.createTodolist)
router.put('/:id', todolisController.updateTodolist)
router.delete('/:id', todolisController.deleteAktivitas)

module.exports = router;
