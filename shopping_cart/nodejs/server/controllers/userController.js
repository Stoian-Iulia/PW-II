const apiError = require('../error/apiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Order} = require('../models/entities');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration (req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) { 
            return next(apiError.badRequest('Invalid email or password'));
        }

        const candidate = await User.findOne({where: {email}})  // проверяеи, существует ли такой пользователь в системе
        if (candidate) {
            return next(apiError.badRequest('User with such an email already exists'));
        }

        const hashPassword = await bcrypt.hash(password, 3)  // хэширование пароля и создание нового пользователя, второй параметр - число раз сколько будем хэшировать пароль
        const user = await User.create({email, role, password:hashPassword})
        const basket = await Order.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        // return res.json({token});
        return res.status(200).json("Registration was successful");
    }
    async login (req, res, next) {
        // return res.status(200).json({"message": "It's working!"});
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if (!user) {
            return next(apiError.internal('User not found'));
        }

        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(apiError.internal('Wrong password'));
        }

        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});
    }
 
    async check (req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)  // генерация токена
        return res.json({token})  // отправка на клиент
    }
}

module.exports = new UserController();