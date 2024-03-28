const express = require('express');
const router = express.Router()

const { NewsEndpoint } = require('../service/news/endpoint');
const { ActiveEndpoint } = require('../service/activity/endpoint');
const { RelateEndpoint } = require('../service/relation/endpoint');

// const { ImgEndpoint } = require('../service/image/endpoint');
// const {ImgProcess } = require('../service/image/process')

// /** Image router CRUD */

// const storage = multer.diskStorage({
//    destination: (req, file, callback) => {
//        callback(null, path.join(__dirname, '../service/image/upload'));
//    },
//    filename: (req, file, callback) => {
//        callback(null, file.originalname);
//    }
// });

// const upload = multer({
//    storage: storage,
//    fileFilter: (req, file, callback) => {
//        const ext = path.extname(file.originalname).toLowerCase();
//        const allowedExtensions = ['.png', '.jpg', '.gif', '.jpeg'];

//        if (allowedExtensions.includes(ext)) {
//            callback(null, true);
//        } else {
//            callback(new Error('[WARNING]Only images are allowed'));
//        }
//    },
//    limits: {
//        fileSize: 1024 * 1024 * 5// 5MB
//    }
// });

// router.post("/upload-new-images", upload.single("file"), new ImgEndpoint().addImagesEndpoint,
//    (error, req, res, next) => {
//        if (error) {
//            console.log(`[ERROR] ${error.message}`)
//           return res.status(400).send({ error: error.message }) 
//        }
//        else {
//            new ImgEndpoint().addImagesEndpoint
//        }
//    });

// router.get("/picture-view", new ImgEndpoint().viewAllEndpoint)
// router.get("/picture-view/:imageId", new ImgEndpoint().viewPictureEndpoint)
// router.get("/delete-picture/:imageId",new ImgEndpoint().deletePictureEndpoint)

// router.get('/', (req, res) => {
//     if (req.user) {
//         axios.get(`http://localhost:3000/picture-view`)
//             .then(response => {
//                 const pictureData = response.findInfo;
//                 res.render('index.ejs', { user: req.user, image: pictureData });
//             })
//             .catch(error => {
//                 console.error('Failed to fetch picture data', error)
//             });
//     } else {
//         res.render('index.ejs', { user: req.user, image: null });
//     }
// });

// router.get('/', async (req, res) => {
//    if (req.user) {
//        const userId = req.user.googleId
//        const imageInfo = await new ImgProcess().viewAllProcess(userId, res)
//        return res.render('index.ejs', { user: req.user , image: imageInfo })
//    }
//    else {
//        return res.render('index.ejs', { user: req.user })
//    }                                          
// })

// Green Section





const News = require('../models/News');


router.get('/hello', async (req, res) => {
   return res.status(200).send({ message: "Hello World!" })
})

// Create a new news item
router.post('/news', new NewsEndpoint().addNewsEndpoint);

// // Create a new news item
// router.post('/news', async (req, res) => {
//     const news = new News(req.body);
//     await news.save();
//     res.status(201).send(news);
//  });

// Get all news items
router.get('/news', async (req, res) => {
   const newsItems = await News.find({});
   res.send(newsItems);
});

// Get a news item by ID
router.get('/news/:id', async (req, res) => {
   const news = await News.findById(req.params.id);
   if (!news) return res.status(404).send('News not found');
   res.send(news);
});

router.put('/news/:id', new NewsEndpoint().updateNewsEndpoint)

//  // Update a news item by ID
//  router.put('/news/:id', async (req, res) => {
//     const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!news) return res.status(404).send('News not found');
//     res.send(news);
//  });

// Delete a news item by ID
router.delete('/news/:id', async (req, res) => {
const news = await News.findByIdAndDelete(req.params.id);
if (!news) return res.status(404).send('News not found');
res.send(news);
});

router.get('/news/search/:id', async (req, res) => {
const newsId  = req.params.id;
if (!newsId) {
   return res.status(400).send('Topic is required');
}

try {
   const newsItem = await News.findOne({ newsId: newsId });
   if (!newsItem) {
   return res.status(404).send('News item not found');
   }
   res.send({ id: newsItem._id });
} catch (error) {
   res.status(500).send('Error searching news item');
}
});







const Activity = require('../models/Activity');


router.get('/hello', async (req, res) => {
return res.status(200).send({ message: "Hello World!" })
})

// Create a new news item
router.post('/activity', new ActiveEndpoint().addActiveEndpoint);

// // Create a new news item
// router.post('/news', async (req, res) => {
//     const news = new News(req.body);
//     await news.save();
//     res.status(201).send(news);
//  });

// Get all news items
router.get('/activity', async (req, res) => {
const newsItems = await News.find({});
res.send(newsItems);
});

// Get a news item by ID
router.get('/activity/:id', async (req, res) => {
const news = await News.findById(req.params.id);
if (!news) return res.status(404).send('News not found');
res.send(news);
});

router.put('/activity/:id', new ActiveEndpoint().updateActiveEndpoint)

//  // Update a news item by ID
//  router.put('/news/:id', async (req, res) => {
//     const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!news) return res.status(404).send('News not found');
//     res.send(news);
//  });

// Delete a news item by ID
router.delete('/activity/:id', async (req, res) => {
const news = await News.findByIdAndDelete(req.params.id);
if (!news) return res.status(404).send('News not found');
res.send(news);
});

router.get('/activity/search/:id', async (req, res) => {
const newsId  = req.params.id;
if (!newsId) {
   return res.status(400).send('Topic is required');
}

try {
   const newsItem = await News.findOne({ newsId: newsId });
   if (!newsItem) {
      return res.status(404).send('News item not found');
   }
   res.send({ id: newsItem._id });
} catch (error) {
   res.status(500).send('Error searching news item');
}
});





const Relation = require('../models/Relation');


router.get('/hello', async (req, res) => {
   return res.status(200).send({ message: "Hello World!" })
})

// Create a new news item
router.post('/relation', new RelateEndpoint().addRelateEndpoint);

// // Create a new news item
// router.post('/news', async (req, res) => {
//     const news = new News(req.body);
//     await news.save();
//     res.status(201).send(news);
//  });

// Get all news items
router.get('/relation', async (req, res) => {
   const newsItems = await News.find({});
   res.send(newsItems);
});

// Get a news item by ID
router.get('/relation/:id', async (req, res) => {
   const news = await News.findById(req.params.id);
   if (!news) return res.status(404).send('News not found');
   res.send(news);
});

router.put('/relation/:id', new RelateEndpoint().updateRelateEndpoint)

//  // Update a news item by ID
//  router.put('/news/:id', async (req, res) => {
//     const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!news) return res.status(404).send('News not found');
//     res.send(news);
//  });

// Delete a news item by ID
router.delete('/relation/:id', async (req, res) => {
   const news = await News.findByIdAndDelete(req.params.id);
   if (!news) return res.status(404).send('News not found');
   res.send(news);
});

router.get('/relation/search/:id', async (req, res) => {
   const newsId  = req.params.id;
   if (!newsId) {
      return res.status(400).send('Topic is required');
   }
   
   try {
      const newsItem = await News.findOne({ newsId: newsId });
      if (!newsItem) {
         return res.status(404).send('News item not found');
      }
      res.send({ id: newsItem._id });
   } catch (error) {
      res.status(500).send('Error searching news item');
   }
   });
      
module.exports = router;