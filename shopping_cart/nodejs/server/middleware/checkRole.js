const jwt = require('jsonwebtoken');

module.exports = function(role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: "You haven' t got the authorisation"})
            }
            const decoder = jwt.verify(token, process.env.SECRET_KEY)
            if (decoder.role !== role) {
                return res.status(403).json({message: "Acces denied"})
            }
            req.user = decoder
            next()
        } catch (error) {
            res.status(401).json({message: "You haven' t got the authorisation"})
        }  
    };
};










