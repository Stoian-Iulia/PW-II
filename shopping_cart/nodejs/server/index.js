require("dotenv").config()
const express = require('express') //с помощью require можно импортировать какие то модули в файл, в данном случае express
const sequelize = require('./db')  //импорт объекта из файла .db
const PORT = process.env.PORT || 3000 //получаем порт из переменной окружения, если эта переменная не задана, тогда по умоолчанию будет порт 5000

const app = express() //создаем объект вызвав функцию экспресс, с него будет начинаться запуск нашего приложения

const start = async() =>  {       //асинхронная функция для подключения к базе данных

   // блок try catch чтобы отлавливать возможные ошибки
    try {
        await sequelize.authenticate()  //устанавливает подключение к базе данных
        await sequelize.sync() //сверяет состояние базы данных со схемой данных
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`)) //у app вызываем функцию listen, в которой указываем какой порт должен прослушивать наш сервер
    } catch (e) {
        console.log(e)
    }
}

start()