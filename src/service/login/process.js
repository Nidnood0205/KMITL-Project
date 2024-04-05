const Login = require('../../models/Login');
const Relation = require('../../models/Login');
const { loginModel } = require('./repository');
class LoginProcess {

    addLoginProcess = async (loginModel, res) => {

        const NewsObj = new Login({
            loginId: loginModel.relateId,
            username: loginModel.topic,
            name: loginModel.date,
            department: loginModel.detail,
            year: loginModel.category,
            createdAt: new Date(),
        })

        await NewsObj.save();
        return res.status(201).send(NewsObj);
        // return res.status(201).send({ response: "Create News Success" });
    }

    updateLoginProcess = async (loginModel, res) => {
        // console.log(RelationSchema.relateId);
        // const news = await News.findByIdAndUpdate(id, RelationSchema, { new: true });
        // if (!news) return res.status(404).send('News not found');
        // return res.send(news);
        // return res.status(200).send({ response: "Update News Success" });
        // return res.status(200).send({ response: RelationSchema.id });
        
        
        const findNews = await Login.findOne({ _id: loginModel.id });
        if (findNews) {
            findNews.username = loginModel.username
            findNews.password = loginModel.password || findNews.password;
 
            await findNews.save();
            return res.status(200).send(findNews);
        }
        else {
            return res.status(404).send({ response: "Not Found News" });
        }
    }

  
   }


module.exports = {
    LoginProcess
}
