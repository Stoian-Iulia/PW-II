const sequelize = require('../db')   //импортируем объект sequelize
const {DataTypes, STRING} = require('sequelize')

const User = sequelize.define( 'user',{  
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define( 'basket',{  
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketDevice = sequelize.define( 'basket_device',{  
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Device = sequelize.define( 'device',{  
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},  //должно быть уникальным, не может быть пустым
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},   //в строке будем хранить название файла и его рпсширение
})

const Type = sequelize.define( 'type',{  
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define( 'brand',{  
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const DeviceInfo = sequelize.define( 'device_info',{  
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})