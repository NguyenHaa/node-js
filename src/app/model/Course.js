const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
// const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: {type: String},
    description: {type: String},
    image: {type: String},
    videoId: {type: String},
    slug: {type: String, slug: 'name', unique: true},
    level: {type: String}
}, {
    timestamps: true
});

module.exports = mongoose.model('courses', Course);