const mongoose = require('mongoose');

const connectMongo = async() => {
    await mongoose.connect("mongodb://localhost:27017/inotbookdb")
}

module.exports = connectMongo