const News = require('../../models/Activity');
const { activeModel } = require('./repository');
class ActiveProcess {

    addActiveProcess = async (activeModel, res) => {    

        console.log("process: " + activeModel.image)

        const NewsObj = new News({
            activeId: activeModel.activeId,
            topic: activeModel.topic,
            date: activeModel.date,
            detail: activeModel.detail,
            category: activeModel.category,
            image: activeModel.image,
            link: activeModel.link,
            createdAt: new Date(),
        })

        console.log(NewsObj)

        await NewsObj.save();
        return res.status(201).send(NewsObj);
        // return res.status(201).send({ response: "Create News Success" });
    }

    updateActiveProcess = async (activeModel, res) => {
        // console.log(activeSchema.activeId);
        // const news = await News.findByIdAndUpdate(id, activeSchema, { new: true });
        // if (!news) return res.status(404).send('News not found');
        // return res.send(news);
        // return res.status(200).send({ response: "Update News Success" });
        // return res.status(200).send({ response: activeSchema.id });
        
        console.log(activeModel.id)
        console.log(activeModel.detail);
        
        const findNews = await News.findOne({ _id: activeModel.id });
        if (findNews) {
            findNews.topic = activeModel.topic
            findNews.date = activeModel.date || findNews.date;
            findNews.detail = activeModel.detail || findNews.detail;
            findNews.category = activeModel.category || findNews.category;
            findNews.image = activeModel.image || findNews.image;
            findNews.link = activeModel.link || findNews.link;

            await findNews.save();
            return res.status(200).send(findNews);
        }
        else {
            return res.status(404).send({ response: "Not Found News" });
        }
    }

  
   }


module.exports = {
    ActiveProcess
}
