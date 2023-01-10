const apiError = require('../error/apiError');

module.exports = function (err, req, res, next) {  //функция next передает управление следующему в цепочке moddleware
    if (err instanceof apiError) {
        return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message: "Unexpected error"});
};