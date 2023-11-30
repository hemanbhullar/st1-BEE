const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const tagSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength: 50,
    }
})
//Model is created
const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength:255
    },
    content: {
        type: String,
        required: true,
        maxlength:5000
        
    },
    author: {
        type: String,
        required: true
    },
    tags: {
        type: [tagSchema],
        validate: [arrayLimit],
    },
    comments: {
        type: String,
        required: true
    }
})

function arrayLimit(val) {
    return val.length<=50;
}

//Now export this model to mongoDB
module.exports = mongoose.model("post", postSchema);

// In MongoDb database it will store as a "books" by default instead of "Book"
