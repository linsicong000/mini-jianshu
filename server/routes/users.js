/**
 * 用户管理相关逻辑
 */

const Router = require('koa-router')
const userModel = require('../model/user');

const router = new Router({
    prefix: '/v1/users',
})

// 获取自己的信息
// get /v1/users/myInfo
router.get('/myInfo', async (ctx, next) => {
    const {userId = '62adb40d97af6327652104f2'} = ctx.request.header;

    try {
        const user = await userModel.findById(userId);

        const detail = await userModel.findById(userId);

        ctx.body = detail;
    } catch (e) {
        ctx.status = 500;
        ctx.body = { message: e }
    }
})

// 根据用户ID获取用户信息
// get /v1/users/getUserById
router.get('/getUserById', async (ctx, next) => {
    const { id } = ctx.query;

    if (!id) {
        ctx.status = 400;
        ctx.body = { message: 'id is not correct' };
    } else {
        try {
            const detail = await userModel.findById(id);

            ctx.body = detail;
        } catch (e) {
            ctx.status = 500;
            ctx.body = { message: e }
        }
    }
})

// 获取推荐作者
// get /v1/users/recommend
router.get('/recommend', async (ctx, next) => {
    const {userId = '62adb40d97af6327652104f2'} = ctx.request.header;

    try {
        const user = await userModel.findById(userId);

        const {follow} = user;
        follow.push(userId);

        const recommendList = await userModel.find({'_id': { $nin: follow }}).limit(4);

        ctx.body = recommendList;
    } catch (e) {
        ctx.status = 500;
        ctx.body = { message: e }
    }
})

// 关注用户
// post /v1/users/follow
router.post('/follow', async (ctx, next) => {
    const {userId = '62adb40d97af6327652104f2'} = ctx.request.header;
    const {follow: follows} = ctx.request.body;

    try {
        const updateResult = await userModel.updateMany(
            { "_id": userId },
            {
                $addToSet: {
                    follow: {
                        $each: follows
                    }
                }
            }
        )

        ctx.body = updateResult;
    } catch (e) {
        ctx.status = 500;
        ctx.body = { message: e }
    }
})

module.exports = router
