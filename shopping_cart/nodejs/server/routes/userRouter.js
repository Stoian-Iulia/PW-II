const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)              //проверка авторизован пользоватедь или нет
//  (req, res) => {       
//      res.json({message: 'All Working!'})
// })  


module.exports = router