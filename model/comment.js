const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Model is created
const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
        maxlength: 1000,
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: Date.now,
    }
})

//Now export this model to mongoDB
module.exports = mongoose.model("Comment", commentSchema);

// In MongoDb database it will store as a "books" by default instead of "Book"
