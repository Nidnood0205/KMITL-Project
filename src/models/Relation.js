const mongoose = require('mongoose')

const RelationSchema = new mongoose.Schema({
    relateId: {
      type: String,
      required: true,
    },
    topic: { type: String, required: false },
    date: { type: String, require: false},
    detail: { type: String, required: false },
    category: { type: String, required: false },
    image: { type: String, required: false },
    link: { type: String, required: false},
    createdAt: {
        type: Date,
        default: Date.now,
      },
 });


module.exports = mongoose.model('Relation', RelationSchema)