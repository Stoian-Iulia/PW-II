const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController');

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/authentication', UserController.check) ;  //проверка авторизован пользоватедь или нет

module.exports = router;