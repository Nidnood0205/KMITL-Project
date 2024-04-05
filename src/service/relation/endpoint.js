const { RelateProcess } = require('./process');
const repo = require('./repository')

class RelateEndpoint {

    constructor() {
        this.relateModel = repo.relateModel
        this.RelationSchema = repo.RelationSchema
    }

    addRelateEndpoint = (req, res) => {
        this.relateModel.relateId = req.body.relateId
        this.relateModel.topic = req.body.topic
        this.relateModel.date = req.body.date
        this.relateModel.detail = req.body.detail
        this.relateModel.category = req.body.category
        this.relateModel.image = req.body.image
        this.relateModel.link = req.body.link

        console.log(req.body.image)
        
        new RelateProcess().addRelateProcess(this.relateModel,res)
    }

    updateRelateEndpoint = (req, res) => {
        this.relateModel.id = req.params.id 
        this.relateModel.topic = req.body.topic
        this.relateModel.date = req.body.date
        this.relateModel.detail = req.body.detail
        this.relateModel.category = req.body.category
        this.relateModel.image = req.body.image
        this.relateModel.link = req.body.link

        console.log(req.body.image)
        new RelateProcess().updateRelateProcess(this.relateModel,res)
    }
}

module.exports = {
    RelateEndpoint
}