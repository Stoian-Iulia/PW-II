require("dotenv").config()
const express = require('express') //с помощью require можно импортировать какие то модули в файл, в данном случае express

const PORT = process.env.PORT || 5000 //получаем порт из переменной окружения, если эта переменная не задана, тогда по умоолчанию будет порт 5000

const app = express() //создаем объект вызвав функцию экспресс, с него бужет начинаться запуск нашего приложения

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)) //у app вызываем функцию listen, в которой указываем какой порт должен прослушивать наш сервер