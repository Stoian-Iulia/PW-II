class UserController {
    async registration (req, res) {

    }

    async login (req, res) {
        return res.status(200).json({"message": "I will format my code"})
    }

    async check (req, res) {
        
    }
}

module.exports = new UserController()