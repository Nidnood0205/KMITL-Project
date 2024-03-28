const Relation = require('../../models/Relation');
const { relateModel } = require('./repository');
class RelateProcess {

    addRelateProcess = async (relateModel, res) => {
        console.log("process: " + relateModel.image)

        const NewsObj = new News({
            relateId: relateModel.relateId,
            topic: relateModel.topic,
            date: relateModel.date,
            detail: relateModel.detail,
            category: relateModel.category,
            image: relateModel.image,
            link: relateModel.link,
            createdAt: new Date(),
        })

        console.log(NewsObj)

        await NewsObj.save();
        return res.status(201).send(NewsObj);
        // return res.status(201).send({ response: "Create News Success" });
    }

    updateRelateProcess = async (relateModel, res) => {
        // console.log(RelationSchema.relateId);
        // const news = await News.findByIdAndUpdate(id, RelationSchema, { new: true });
        // if (!news) return res.status(404).send('News not found');
        // return res.send(news);
        // return res.status(200).send({ response: "Update News Success" });
        // return res.status(200).send({ response: RelationSchema.id });
        
        console.log(relateModel.id)
        console.log(relateModel.detail);
        
        
        const findNews = await News.findOne({ _id: relateModel.id });
        if (findNews) {
            findNews.topic = relateModel.topic
            findNews.date = relateModel.date || findNews.date;
            findNews.detail = relateModel.detail || findNews.detail;
            findNews.category = relateModel.category || findNews.category;
            findNews.image = relateModel.image || findNews.image;
            findNews.link = relateModel.link || findNews.link;

            await findNews.save();
            return res.status(200).send(findNews);
        }
        else {
            return res.status(404).send({ response: "Not Found News" });
        }
    }

  
   }


module.exports = {
    RelateProcess
}
