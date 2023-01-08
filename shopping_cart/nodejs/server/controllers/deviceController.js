const uuid = require('uuid');  //установленный пакет uuid который будет генерировать случайные рандомные id
const path = require('path');
const {Device, DeviceInfo} = require('../models/entities');
const apiError = require('../error/apiError');

class DeviceController {
    
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body  //получаем данные из тела запроса
            const{img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'resources', fileName))

            const device = await Device.create({name, price, brandId, typeId, img: fileName})
            
            if (info) {
                info = JSON.parse(info)
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id,
                    })
                });
            }

            return res.json(device)
        } catch (error) {
            next(apiError.badRequest(e.message));
        }  
    };
    
    async getAll(req, res) {
        const {brandId, typeId} = req.query  //запрос к базе данных
        let devices;

        if (brandId && typeId) {
            devices = await Device.findAll({where:{typeId, brandId}})  //указываем параметром поля по которым надо искать
        }

        if (!brandId && typeId) {
            devices = await Device.findAll({where:{typeId}})
        }

        if (brandId && !typeId) {
            devices = await Device.findAll({where:{brandId}})
        }

        if (!brandId && !typeId) {
            devices = await Device.findAll();
        }
        return res.json(devices);
    }

    async getOne(req, res) { 
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id}, 
                include:[{model: DeviceInfo, as: 'info'}]
            },
        )
        return res.json(device);
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            await Device.findOne({where:{id}})
                .then( async data => {
                    if(data) {
                        await Device.destroy({where:{id}}).then(() => {
                            return res.json("Device deleted");
                        })
                    } else {
                        return res.json("This Device doesn't exist in DB");
                    }
                    await OrderDevice.destroy({where:{deviceId: id}})
                    await BasketDevice.destroy({where:{deviceId: id}})
                })
        } catch (e) {
            return res.json(e);
        }
    }


    async update(req, res) {
        try {
            const {id} = req.params;
            const {name, price, brandId, typeId, info} = req.body;

            await Device.findOne({where:{id}})
                .then( async data => {
                    if(data) {
                        let newVal = {};
                        name ? newVal.name = name : false;
                        price ? newVal.price = price : false;
                        brandId ? newVal.brandId = brandId : false;
                        typeId ? newVal.typeId = typeId : false;

                        if(req.files) {
                            const {img} = req.files;
                            const type = img.mimetype.split('/')[1];
                            let fileName = uuid.v4() + `.${type}`;
                            img.mv(path.resolve(__dirname, '..', 'static', fileName));
                            newVal.img = fileName;
                        }

                        if(info) {
                            const parseInfo = JSON.parse(info);
                            for (const item of parseInfo) {
                                await DeviceInfo.findOne({where:{id: item.id}}).then( async data => {
                                    if(data) {
                                        await DeviceInfo.update({
                                            title: item.title,
                                            description: item.description
                                        }, {where:{id: item.id}})
                                    } else {
                                        await DeviceInfo.create({
                                            title: item.title,
                                            description: item.description,
                                            deviceId: id
                                        })
                                    }
                                })
                            }
                        }

                        await Device.update({
                            ...newVal
                        }, {where:{id}} ).then(() => {
                            return res.json("Device updated");
                        })
                    } else {
                        return res.json("This Device doesn't exist in DB");
                    }
                })
            } catch (e) {
            return res.json(e);
        }
    }
}


module.exports = new DeviceController();