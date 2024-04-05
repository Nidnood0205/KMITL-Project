const Apply = require('../../models/Apply');
const Relation = require('../../models/Apply');
const { applyModel } = require('./repository');
class ApplyProcess {

    addApplyProcess = async (applyModel, res) => {

        const NewsObj = new Apply({
            applyId: applyModel.applyIdeId,
            username: applyModel.username,
            name: applyModel.name,
            department: applyModel.department,
            year: applyModel.year,
            createdAt: new Date(),
        })

        await NewsObj.save();
        return res.status(201).send(NewsObj);
        // return res.status(201).send({ response: "Create News Success" });
    }

    updateApplyProcess = async (applyModel, res) => {
        // console.log(RelationSchema.relateId);
        // const news = await News.findByIdAndUpdate(id, RelationSchema, { new: true });
        // if (!news) return res.status(404).send('News not found');
        // return res.send(news);
        // return res.status(200).send({ response: "Update News Success" });
        // return res.status(200).send({ response: RelationSchema.id });
        
        
        const findNews = await Apply.findOne({ _id: applyModel.id });
        if (findNews) {
            findNews.username = applyModel.username
            findNews.name = applyModel.name || findNews.name;
            findNews.department = applyModel.department || findNews.department;
            findNews.year = applyModel.year || findNews.year;
 
            await findNews.save();
            return res.status(200).send(findNews);
        }
        else {
            return res.status(404).send({ response: "Not Found News" });
        }
    }

  
   }


module.exports = {
    ApplyProcess
}
