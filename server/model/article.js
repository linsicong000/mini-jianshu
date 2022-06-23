/**
 * 文章表
 */
const mongoose = require('../utils/initMongo');

const Schema = mongoose.Schema;
const articleSchema = Schema({
    author: {
        type: String,
    },
    authorName: {
        type: String,
    },
    title: {
        type: String,
    },
    thumbnail: {
        type: String,
    },
    content: {
        type: Array,
    },
    summary: {
        type: String,
    },
    totalText: {
        type: Number,
    },
    publishTime: {
        type: String,
    },
    updateTime: {
        type: String,
    },
    totalPay: {
        type: Number,
    },
    read: {
        type: Array,
    },
    likes: {
        type: Array,
    },
    payers: {
        type: Array,
    },
    comments: {
        type: Array,
    },
    diamonds: {
        type: Number
    },
});

module.exports = mongoose.model('article', articleSchema);