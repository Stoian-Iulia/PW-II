const Router = require('express');
const router = new Router();
const DeviceController = require('../controllers/deviceController');
const checkRole = require('../middleware/checkRoleMiddleware');


router.post('/', checkRole('ADMIN'), DeviceController.create)  //на каждый маршрут передаем соответствующую функцию
router.get('/', DeviceController.getAll)
router.get('/:id', checkRole('ADMIN'), DeviceController.getOne);
router.delete('/:id', checkRole('ADMIN'), DeviceController.delete);

module.exports = router;