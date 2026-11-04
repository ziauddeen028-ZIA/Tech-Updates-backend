const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    publishedAt: {
        type: Date,
        required: true,
    },
    readTime: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ["draft", "published"]
    }

}, {
    timestamps: true,
})

module.exports = mongoose.model('Blog', blogSchema);