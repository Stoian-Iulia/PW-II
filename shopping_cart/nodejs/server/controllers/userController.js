const apiError = require('../error/apiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Basket} = require('../models/models');

class UserController {
    async registration (req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(apiError.badRequest('Некоректный email или password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(apiError.badRequest('Пользователь с таким email уже сушествует'))
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const user = await User.create({email, role, password, hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = jwt.sign(
            {id: user.id, email, role},
            process.env.SECRET_KEY,
            {expiresIn: '24h'}
        )
        return res.json({token})
    }

    async login (req, res) {
        return res.status(200).json({"message": "It's working!"});
    }
 
    async check (req, res, next) {
        const {id} = req.query;
        if (!id) {
            return next(apiError.badRequest('Не задан id'))
        }
        res.json(id);
    }
}

module.exports = new UserController();