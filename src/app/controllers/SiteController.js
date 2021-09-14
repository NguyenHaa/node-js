const Course = require('../model/Course');
const { multipleMongooseToObject } = require('../../util/mongooes');


class SiteController{

        // [GET] /
    index(req, res, next) {
        Course.find({})
        .then(courses => {
            res.render('home', {
                courses: multipleMongooseToObject(courses)
            })
        })
        .catch(next) 
    }

    search(req, res) {
        // [GET] /search
        res.render('search');
    }
};

module.exports = new SiteController;