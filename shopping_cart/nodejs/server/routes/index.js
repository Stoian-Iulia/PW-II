const Router = require('express');
const router = new Router;
const deviceRouter = require('./device');
const brandRouter = require('./brand');
const typeRouter = require('./type');
const userRouter = require('./user');

//объединение всех роутеров в один
router.use('/users', userRouter)
router.use('/types', typeRouter)
router.use('/brands', brandRouter)
router.use('/devices', deviceRouter);

module.exports = router;