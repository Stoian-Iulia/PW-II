const Router = require('express');
const router = new Router();
const BrandController = require('../controllers/brandController');
const checkRole = require('../middleware/checkRole');


router.post('/', checkRole('ADMIN'), BrandController.create)
router.get('/', BrandController.getAll)
router.delete('/:id', checkRole('ADMIN'), BrandController.delete);

module.exports = router;