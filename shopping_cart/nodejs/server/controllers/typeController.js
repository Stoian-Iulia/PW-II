const {Type} = require('../models/models')
const apiError = require('../error/apiError');

class TypeController {
    async create(req, res) {  //добавление объктов в базу данных
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type);
    }

    async getAll(req, res) {  //получение объектов и БД
        const types = await Type.findAll()
        return res.json(types);
    }
}

module.exports = new TypeController();