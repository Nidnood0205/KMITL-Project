const { ActiveProcess } = require('./process');
const repo = require('./repository')

class ActiveEndpoint {

    constructor() {
        this.activeModel = repo.activeModel
        this.activeSchema = repo.activeSchema
    }

    addActiveEndpoint = (req, res) => {
        this.activeModel.activeId = req.body.activeId
        this.activeModel.topic = req.body.topic
        this.activeModel.date = req.body.date
        this.activeModel.detail = req.body.detail
        this.activeModel.category = req.body.category
        this.activeModel.image = req.body.image
        this.activeModel.link = req.body.link

        console.log(req.body.image)

        new ActiveProcess().addActiveProcess(this.activeModel,res)
    }

    updateActiveEndpoint = (req, res) => {
        this.activeModel.id = req.params.id 
        this.activeModel.topic = req.body.topic
        this.activeModel.date = req.body.date
        this.activeModel.detail = req.body.detail
        this.activeModel.category = req.body.category
        this.activeModel.image = req.body.image
        this.activeModel.link = req.body.link

        console.log(req.body.image)
        new ActiveProcess().updateActiveProcess(this.activeModel,res)
    }
}

module.exports = {
    ActiveEndpoint
}