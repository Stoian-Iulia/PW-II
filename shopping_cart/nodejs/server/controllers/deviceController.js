const uuid = require('uuid') //установленный пакет uuid который будет генерировать случайные рандомные id
const path = require('path');
const {Device} = require('../models/models')
const apiError = require('../error/apiError')

class DeviceController {
    
    async create(req, res, next) {
        try{
            const {name, price, brandId, typeId, info} = req.body
            const{img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const device = await Device.create({name, price, brandId, typeId, img: fileName })
            
            return res.json(device)
        } catch (e) {
            next(apiError.badRequest(e.message))
        }
        
    }
    
    async getAll(req, res) {
        
    } 

    async getOne(req, res) {
        
    } 
}

module.exports = new DeviceController