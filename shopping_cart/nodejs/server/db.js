const {Sequelize} = require('sequelize'); //импорт Sequelize + деструктуризация

module.exports = new Sequelize(   //экспортируем объект который создаем из этого класса
    process.env.DB_NAME,     //название БД
    process.env.DB_USER,     //пользователь
    process.env.DB_PASSWORD, {
        dialect: 'postgres',
        host: process.env.DB_HOST,      //объект
        port: process.env.DB_PORT
    }
)