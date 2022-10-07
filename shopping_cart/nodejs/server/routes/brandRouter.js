const Router = require('express');
const router = new Router();
const BrandController = require('../controllers/brandController');

router.post('/', BrandController.create)
router.get('/', BrandController.getAll)
router.delete('/:id', BrandController.delete);

module.exports = router;