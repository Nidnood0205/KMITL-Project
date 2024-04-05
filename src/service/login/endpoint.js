const { LoginProcess } = require('./process');
const repo = require('./repository')

class LoginEndpoint {

    constructor() {
        this.loginModel = repo.loginModel
        this.loginSchema = repo.loginSchema
    }

    addLoginEndpoint = (req, res) => {
        this.loginModel.loginId = req.body.loginId
        this.loginModel.username = req.body.username
        this.loginModel.password = req.body.password

        new LoginProcess().addLoginProcess(this.loginModel,res)
    }

    updateLoginEndpoint = (req, res) => {
        this.loginModel.id = req.params.id 
        this.loginModel.username = req.body.username
        this.loginModel.password = req.body.password

        console.log(req.body.image)
        new LoginProcess().updateLoginProcess(this.loginModel,res)
    }
}

module.exports = {
    LoginEndpoint
}