const Course = require('../model/Course');
const { multipleMongooseToObject } = require('../../util//mongooes');

class MeController{
    // [GET] me/stored/courses
    storedCourses(req, res, next) {        
        Course.find({})
            .then(courses =>  res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next);

    }

    // [GET] me/trash/courses
    stashCourses(req, res, next) {        
        Course.findDeleted({})
            .then(courses =>  res.render('me/trash-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next);
    }
};

module.exports = new MeController;