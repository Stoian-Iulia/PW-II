require("dotenv").config();
const express = require('express');  //с помощью require можно импортировать какие то модули в файл, в данном случае express
const sequelize = require('./database');  //импорт объекта из файла .db
const models = require('./models/entities.js');
const cors = require('cors')  //настроим установленный корс для того чтобы мы молги отправлять запросы с брайзера
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorMiddleware');
const path = require('path');

const PORT = process.env.PORT || 5000  //получаем порт из переменной окружения, если эта переменная не задана, тогда по умоолчанию будет порт 5000
const app = express()  //создаем объект вызвав функцию экспресс, с него будет начинаться запуск нашего приложения

const start = async () => {  //асинхронная функция для подключения к базе данных
    app.use(cors())  //настройка cors чтобы можно было отправлять запрос с браузера
    app.use(express.json())  //чтобы можно было парсить json формат
    app.use(express.static(path.resolve(__dirname, 'resources')))  
    app.use(fileUpload({}))  //для работы с файлами
    app.use('/', router)

//Обработка ошибок, последний Middleware
    app.use(errorHandler);

    // блок try catch чтобы отлавливать возможные ошибки
    try {
        await sequelize.authenticate()  //устанавливает подключение к базе данных
        await sequelize.sync()  //сверяет состояние базы данных со схемой данных
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))  //у app вызываем функцию listen, в которой указываем какой порт должен прослушивать наш сервер
    } catch (e) {
        console.log(e);
    }
}

start();