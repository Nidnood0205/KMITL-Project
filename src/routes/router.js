const express = require('express');
const router = express.Router()

const { NewsEndpoint } = require('../service/news/endpoint');
const { ActiveEndpoint } = require('../service/activity/endpoint');
const { RelateEndpoint } = require('../service/relation/endpoint');
const { ApplyEndpoint } = require('../service/apply/endpoint');
const { LoginEndpoint } = require('../service/login/endpoint');


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




const Apply = require('../models/Apply');


router.get('/hello', async (req, res) => {
   return res.status(200).send({ message: "Hello World!" })
})

// Create a new news item
router.post('/apply', new ApplyEndpoint().addApplyEndpoint);

// // Create a new news item
// router.post('/news', async (req, res) => {
//     const news = new News(req.body);
//     await news.save();
//     res.status(201).send(news);
//  });

// Get all news items
router.get('/apply', async (req, res) => {
   const newsItems = await News.find({});
   res.send(newsItems);
});

// Get a news item by ID
router.get('/apply/:id', async (req, res) => {
   const news = await News.findById(req.params.id);
   if (!news) return res.status(404).send('News not found');
   res.send(news);
});

router.put('/apply/:id', new ApplyEndpoint().updateApplyEndpoint)

//  // Update a news item by ID
//  router.put('/news/:id', async (req, res) => {
//     const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!news) return res.status(404).send('News not found');
//     res.send(news);
//  });

// Delete a news item by ID
router.delete('/apply/:id', async (req, res) => {
   const news = await News.findByIdAndDelete(req.params.id);
   if (!news) return res.status(404).send('News not found');
   res.send(news);
});

router.get('/apply/search/:id', async (req, res) => {
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



const Login = require('../models/Login');


router.get('/hello', async (req, res) => {
   return res.status(200).send({ message: "Hello World!" })
})

// Create a new news item
router.post('/login', new LoginEndpoint().addLoginEndpoint);

// // Create a new news item
// router.post('/news', async (req, res) => {
//     const news = new News(req.body);
//     await news.save();
//     res.status(201).send(news);
//  });

// Get all news items
router.get('/login', async (req, res) => {
   const newsItems = await News.find({});
   res.send(newsItems);
});

// Get a news item by ID
router.get('/login/:id', async (req, res) => {
   const news = await News.findById(req.params.id);
   if (!news) return res.status(404).send('News not found');
   res.send(news);
});

router.put('/login/:id', new LoginEndpoint().updateLoginEndpoint)

//  // Update a news item by ID
//  router.put('/news/:id', async (req, res) => {
//     const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!news) return res.status(404).send('News not found');
//     res.send(news);
//  });

// Delete a news item by ID
router.delete('/login/:id', async (req, res) => {
   const news = await News.findByIdAndDelete(req.params.id);
   if (!news) return res.status(404).send('News not found');
   res.send(news);
});

router.get('/login/search/:id', async (req, res) => {
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