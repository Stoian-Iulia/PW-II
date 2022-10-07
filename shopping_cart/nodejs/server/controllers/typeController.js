const {Type} = require('../models/models')
const apiError = require('../error/apiError');

class TypeController {
    async create(req, res) {  //добавление объктов в базу данных
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type);
    }

    async getAll(req, res) {  //получение объектов из БД
        const types = await Type.findAll()
        return res.json(types);
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            await Type.findOne({where:{id}})
                .then( async data => {
                    if(data) {
                        await Type.destroy({where:{id}}).then(() => {
                            return res.json("Type deleted");
                        })
                    } else {
                        return res.json("This Type doesn't exist in DB");
                    }
                })
        } catch (e) {
            return res.json(e);
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params;
            const {brandId, typeId, name, price, info} = req.body;

            await Device.findOne({where:{id}})
                .then( async data => {
                    if(data) {
                        let newVal = {};
                        brandId ? newVal.brandId = brandId : false;
                        typeId ? newVal.typeId = typeId : false;
                        name ? newVal.name = name : false;
                        price ? newVal.price = price : false;

                        if(req.files) {
                            const {img} = req.files;
                            const type = img.mimetype.split('/')[1];
                            let fileName = uuid.v4() + `.${type}`;
                            img.mv(path.resolve(__dirname, '..', 'resources', fileName));
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

module.exports = new TypeController();