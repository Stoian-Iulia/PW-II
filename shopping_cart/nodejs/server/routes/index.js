const Router = require('express');
const router = new Router;
const deviceRouter = require('./device');
const brandRouter = require('./brand');
const typeRouter = require('./type');
const userRouter = require('./user');

//объединение всех роутеров в один
router.use('/users', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter);

module.exports = router;