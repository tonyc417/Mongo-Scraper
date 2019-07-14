var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NewPost = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

var News = mongoose.model("News", NewPost);

module.exports = News;