const Router = require('express');
const router = new Router();
const TypeController = require('../controllers/typeController');
const { Type } = require('../models/models');
const checkRole = require('../middleware/checkRoleMiddleware');


router.post('/', checkRole('ADMIN'), TypeController.create)
router.get('/', TypeController.getAll)
router.delete('/:id', checkRole('ADMIN'), TypeController.delete)
router.put('/', checkRole('ADMIN'), TypeController.update);

module.exports = router;