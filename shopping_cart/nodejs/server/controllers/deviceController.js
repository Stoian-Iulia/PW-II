const uuid = require('uuid');  //установленный пакет uuid который будет генерировать случайные рандомные id
const path = require('path');
const {Device} = require('../models/models');
const apiError = require('../error/apiError');

class DeviceController {
    
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body  //получаем данные из тела запроса
            const{img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'resources', fileName))

            const device = await Device.create({name, price, brandId, typeId, img: fileName})
            
            return res.json(device)
        } catch (e) {
            next(apiError.badRequest(e.message));
        }  
    }
    
    async getAll(req, res) {
        const {brandId, typeId} = req.query
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAll()
        }

        if (brandId && !typeId) {
            devices = await Device.findAll({where:{brandId}})
        }

        if (!brandId && typeId) {
            devices = await Device.findAll({where:{typeId}})
        }

        if (brandId && typeId) {
            devices = await Device.findAll({where:{typeId, brandId}})
        }

        return res.json(devices)
    } 

    async getOne(req, res) { 
    } 
}

module.exports = new DeviceController();