/**
 * 用户表模型
 */

const mongoose = require('../utils/initMongo');

const Schema = mongoose.Schema;
const userSchema = Schema({
    name: {
        type: String,
    },
    avatar: {
        type: String,
    },
    follow: {
        type: Array
    },
    articles: {
        type: Array
    },
    read: {
        type: Array
    },
    diamonds: {
        type: Number
    },
    totalLike: {
        type: Number
    },
    totalPay: {
        type: Number
    },
    diamonds: {
        type: Number
    },
    totalWord: {
        type: Number
    }
});

module.exports = mongoose.model('user', userSchema);