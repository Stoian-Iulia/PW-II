const sequelize = require('../db')   //импортируем объект sequelize
const {DataTypes, STRING} = require('sequelize')

const User = sequelize.define( 'user',
{  
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},    //должно быть уникальным, не может быть пустым
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Order = sequelize.define( 'order',
{  
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Basket = sequelize.define( 'basket',
{  
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Device = sequelize.define( 'device',
{  
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}, 
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},   //в строке будем хранить название файла и его рпсширение
})

const Type = sequelize.define( 'type',
{  
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define( 'brand',
{  
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const DeviceInfo = sequelize.define( 'device_info',
{  
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})


//связь моделей между собой
//прописываем двухстороннюю связь

User.hasOne(Order)   
Order.belongsTo(User)  //обозначаем, что корзина принадлежит пользователю

Order.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo)
DeviceInfo.belongsTo(Device)


