const Router = require('express');
const router = new Router();
const TypeController = require('../controllers/typeController');
const { Type } = require('../models/models');

router.post('/',TypeController.create)
router.get('/', TypeController.getAll)
router.delete('/:id', TypeController.delete);

module.exports = router;