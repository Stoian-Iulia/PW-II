const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController');
const validation = require('../middleware/validation');

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/authentification', validation, UserController.check) ;  // проверка валидации по токену

module.exports = router;