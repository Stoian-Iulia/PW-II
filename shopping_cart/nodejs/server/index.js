const express = require('express') //с помощью require можно импортировать какие то модули в файл, в данном случае express

const PORT = 5000

const app = express() //создаем объект вызвав функцию экспресс, с него бужет начинаться запуск нашего приложения

app.listen(PORT, () => console.log(`Server started on port ${500}`)) //у app вызываем функцию listen, в которой указываем какой порт должен прослушивать наш сервер