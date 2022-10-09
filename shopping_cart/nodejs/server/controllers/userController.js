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
            return next(apiError.badRequest('Некоректный email или password'));
        }

        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(apiError.badRequest('Пользователь с таким email уже сушествует'));
        }

        const hashPassword = await bcrypt.hash(password, 3)
        const user = await User.create({email, role, password:hashPassword})
        const basket = await Order.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token});
    }

    async login (req, res, next) {
        // return res.status(200).json({"message": "It's working!"});
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if (!user) {
            return next(apiError.internal('Пользователь не найден'));
        }

        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(apiError.internal('Указан неверный пароль'));
        }

        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});
    }
 
    async check (req, res, next) {
        
    }
}

module.exports = new UserController();