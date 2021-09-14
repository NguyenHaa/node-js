const Course = require('../model/Course');
const { multipleMongooseToObject } = require('../../util//mongooes');

class MeController{
    // [POST] /courses/store
    storedCourses(req, res, next) {        
    //    res.render('me/stored-courses');
        Course.find({})
            .then(courses =>  res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next)

    }
};

module.exports = new MeController;