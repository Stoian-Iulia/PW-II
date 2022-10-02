const apiError = require('../error/apiError');
class UserController {
    async registration (req, res) {

    }

    async login (req, res) {
        return res.status(200).json({"message": "I will formate my code"})
    }
 
    async check (req, res, next) {
        // res.json('jhbsjdcb')
        const {id} = req.query
        if(!id) {
            return next(apiError.badRequest('Не задан id'))
        }
        res.json(id)
    }
}

module.exports = new UserController()