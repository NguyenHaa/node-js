const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

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

// add plugin for soft delete
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
    overrideMethods: 'all',
    deletedAt: true 
});

module.exports = mongoose.model('courses', Course);