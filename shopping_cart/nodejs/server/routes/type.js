const Router = require('express');
const router = new Router();
const TypeController = require('../controllers/typeController');
const { Type } = require('../models/entities');
const checkRole = require('../middleware/checkRole');


router.post('/', checkRole('ADMIN'), TypeController.create)
router.get('/', TypeController.getAll)
router.delete('/:id', checkRole('ADMIN'), TypeController.delete)

module.exports = router;