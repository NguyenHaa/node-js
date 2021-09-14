module.exports = {
    multipleMongooseToObject: function (mongooes) {
        return mongooes.map(mongooe => mongooe.toObject());
    },
    mongooseToObject: function (mongooe) {
        return mongooe ? mongooe.toObject() : mongooe;
    }
};