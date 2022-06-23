/**
 * 文章管理相关逻辑
 */

const Router = require('koa-router');
const articleModel = require('../model/article');
const userModel = require('../model/user');

const router = new Router({
    prefix: '/v1/article'
});

// 获取文章列表
// get /v1/article/getList
// @param start 开始位置
// @param limit 每次取的数量
router.get('/getList', async (ctx, next) => {
    let {start = 0, limit = 10} = ctx.query;
    let result;

    try {
        const articleList = await articleModel.find().limit(limit).skip(start);
        const articleCount = await articleModel.count();

        // 列表结果删除content
        result = {
            total: articleCount,
            list: articleList.map(item => {
                let newResult = item._doc;
                delete newResult.content;
                return newResult;
            })
        }

        ctx.body = result;
    } catch (err) {
        ctx.status = 500;
        ctx.body = {
            message: err
        }
    }
})

// 根据文章id获取文章详情
// get /v1/article/getDetail
// @params id 文章ID
router.get('/getDetail', async (ctx, next) => {
    const { id } = ctx.query;

    if (!id) {
        ctx.status = 400;
        ctx.body = { message: 'id is not correct' };
    } else {
        try {
            const detail = await articleModel.findById(id);

            ctx.body = detail;
        } catch (e) {
            ctx.status = 500;
            ctx.body = { message: e }
        }
    }
})

// 根据作者ID获取文章列表
// get /v1/article/getListByAuthor
// @params authorId 作者ID
router.get('/getListByAuthor', async (ctx, next) => {
    let { authorId } = ctx.query;

    if (!authorId) {
        ctx.status = 400;
        ctx.body = { message: 'authorId is not correct' };
    } else {
        try {
            const authorTextList = await articleModel.find({ author: authorId}).sort([['_id', -1]]).limit(2);

            ctx.body = authorTextList.map(item => {
                const doc = item._doc;
                const {_id, title, read = []} = doc;
                return {
                    title,
                    id: _id,
                    totalRead: read.length
                }
            });
        } catch (e) {
            ctx.status = 500;
            ctx.body = { message: e }
        }
    }
})

// 推荐阅读（随机获取几条）
// get /v1/article/recommend
router.get('/recommend', async (ctx, next) => {
    try {
        const recommendList = await articleModel.aggregate([ { $sample: { size: 3} } ]);

        ctx.body = recommendList.map(item => {
            const {_id, title, read = []} = item;
            return {
                title,
                id: _id,
                totalRead: read.length
            };
        });
    } catch (e) {
        ctx.status = 500;
        ctx.body = { message: e }
    }
})

// 记录文章阅读
// post /v1/article/record
// @param articleId 文章id
router.post('/record', async (ctx, next) => {
    const {userId = '62adb40d97af6327652104f2'} = ctx.request.header;
    const {articleId} = ctx.request.body;

    if (!articleId) {
        ctx.status = 400;
        ctx.body = "articleId is required";
    }

    try {
        // 向文章表插入阅读的用户信息
        const insertArticleResult = await articleModel.updateMany(
            { "_id": articleId },
            {
                $addToSet: {
                    read: userId,
                }
            }
        )
        // 向用户表插入阅读的文章信息
        const insertUserResult = await userModel.updateMany(
            { "_id": userId },
            {
                $addToSet: {
                    read: articleId
                }
            }
        )

        ctx.body = insertArticleResult && insertUserResult ? 'ok': 'error';
    } catch(e) {
        ctx.status = 500;
        ctx.body = { message: e }
    }
})

// 记录文章点赞
// post /v1/article/recordLike
// @param articleId 文章id
router.post('/recordLike', async (ctx, next) => {
    const {userId = '62adb40d97af6327652104f2'} = ctx.request.header;
    const {articleId} = ctx.request.body;

    if (!articleId) {
        ctx.status = 400;
        ctx.body = "articleId is required";
    }

    
    try {
        // 查询这个文章的详情，用于去掉重复点赞
        const article = await articleModel.findById(articleId);
        const { likes } = article['_doc'];
        console.log(likes);
    
        if (likes.includes(userId)) {
            ctx.status = 500;
            ctx.body = 'this user has already like'
        } else {
            // 向文章表插入点赞的用户信息
            const insertArticleResult = await articleModel.updateOne(
                { "_id": articleId },
                {
                    $addToSet: {
                        likes: userId,
                    }
                }
            )
            // 向用户表插入点赞的文章信息
            const insertUserResult = await userModel.updateOne(
                { "_id": userId },
                {
                    $inc: {
                        totalLike: 1
                    }
                }
            )
            ctx.body = insertArticleResult && insertUserResult ? 'ok': 'error';
        }
    } catch(e) {
        ctx.status = 500;
        ctx.body = { message: e }
    }
})

// 记录文章赞赏
// post /v1/article/recordPay
// @param articleId 文章id
router.post('/recordPay', async (ctx, next) => {
    const {userId = '62adb40d97af6327652104f2'} = ctx.request.header;
    const {articleId} = ctx.request.body;

    if (!articleId) {
        ctx.status = 400;
        ctx.body = "articleId is required";
    }

    try {
        // 查询这个文章的详情，用于去掉重复
        // 向文章表插入点赞的用户信息
        const insertArticleResult = await articleModel.updateMany(
            { "_id": articleId },
            {
                $addToSet: {
                    payers: userId,
                },
                $inc: {
                    totalPay: 1,
                    diamonds: 1
                }
            }
        )
        // 向用户表插入点赞的文章信息
        const insertUserResult = await userModel.updateMany(
            { "_id": userId },
            {
                $inc: {
                    totalPay: 1,
                    diamonds: 1
                }
            }
        )

        ctx.body = insertArticleResult && insertUserResult ? 'ok': 'error';
    } catch(e) {
        ctx.status = 500;
        ctx.body = { message: e }
    }
})

module.exports = router