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
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    }, 
    isFeatured: {
        type: Boolean,
        default: false
    }, 
    isTrending: {
        type: Boolean,
        default: false
    },
    isPopular: {
        type: Boolean,
        default: false
    },
    isLatest: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Blog', blogSchema);