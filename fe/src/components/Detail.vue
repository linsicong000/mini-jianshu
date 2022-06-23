<template>
    <div class="detail">
        <!-- 左边工具栏 -->
        <div class="detail-left-tools" v-if="article.value">
            <div class="detail-tool-item" @click="handleLike(article.value._id)">
                <div class="detail-like">
                    <img src="@/assets/zan.svg" width="22" height="22"/>
                </div>
                <div class="detail-tool-text">
                    {{ article.value.likes.length }}赞
                </div>
            </div>
            <div class="detail-tool-item" @click="handlePay(article.value._id)">
                <div class="detail-pay">
                    <img src="@/assets/redbag.svg" width="22" height="22"/>
                </div>
                <div class="detail-tool-text">
                    {{ article.value.totalPay }}赞赏
                </div>
            </div>
            <div class="detail-tool-item" @click="handleMore">
                <div class="detail-more">
                    <img src="@/assets/qrcode.svg" width="22" height="22"/>
                </div>
                <div class="detail-tool-text">
                    更多好文
                </div>
            </div>
        </div>
        <!-- 正文 -->
        <div class="detail-content" v-if="author.value">
            <div class="detail-content-title">
                {{ article.value.title }}
            </div>
            <div class="detail-content-info">
                <div class="dci-logo">
                    <img src="@/assets/top.png" width="50" height="50"/>
                </div>

                <div class="dci-detail">
                    <div class="dcid-top">
                        <div class="dcid-name">{{ author.value.name }}</div>
                        <button
                            class="dcid-contact"
                            v-if="mine && !mine.follow.includes(author.value._id)"
                            @click="follow(author.value._id)"
                        >
                            关注
                        </button>
                    </div>
                    <div class="dcid-info">
                        <div class="dcid-diamonds">
                            <img src="@/assets/diamond.svg" style="margin-right: 4px" width="13" height="13" />
                            <span>{{ article.value.diamonds.toFixed(1) }}</span>
                        </div>
                        <span style="margin-right: 10px;">{{ article.value.updateTime }}</span>
                        <span style="margin-right: 10px;">字数 {{ article.value.totalText }}</span>
                        <span style="margin-right: 10px;">阅读 {{ article.value.read.length }}</span>
                    </div>
                </div>
            </div>

            <div class="dcid-content">
                <div
                    class="dcid-content-item"
                    v-for="one in article.value.content"
                    :key="one.value"
                >
                    <p v-if="one.type === 'text'">{{ one.value }}</p>
                    <img v-if="one.type === 'image'" class="dcid-img" src="@/assets/top.png"/>
                </div>
            </div>
        </div>
        <div class="detail-recommend" v-if="author.value">
            <div class="dr-releated">
                <div class="dr-info">
                    <div class="detail-content-info">
                        <div class="dci-logo">
                            <img src="@/assets/top.png" width="50" height="50"/>
                        </div>
    
                        <div class="dci-detail">
                            <div class="dcid-top">
                                <div class="dcid-name">{{ author.value.name }}</div>
                                <button
                                    class="dcid-contact"
                                    v-if="mine && !mine.follow.includes(author.value._id)"
                                    @click="follow(author.value._id)"
                                >
                                    关注
                                </button>
                            </div>
                            <div class="dcid-info">
                                <span style="margin-right: 10px;">总资产 {{ author.value.totalPay }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dr-list">
                    <div
                        class="dr-list-item"
                        v-for="item in authorRecommendList.value"
                        :key="item._id"
                    >
                        <div class="dli-title" @click="jumpDetail(item.id)">
                            {{ item.title }}
                        </div>
                        <div class="dli-count">
                            阅读 {{ item.totalRead }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="dr-list">
                <div class="drl-title">
                    推荐阅读
                </div>
                <div class="dr-list">
                    <div 
                        class="dr-list-item"
                        v-for="one in recommendList.value"
                        :key="one.title"
                    >
                        <div class="dli-title" @click="jumpDetail(one.id)">
                            {{ one.title }}
                        </div>
                        <div class="dli-count">
                            阅读 {{ one.totalRead }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject, reactive } from 'vue';
import { useRoute, useRouter } from "vue-router";
import { useMainStore } from '@/stores/index';
import { storeToRefs } from 'pinia';
import { message } from 'ant-design-vue';

const mainStore = useMainStore();
const {user: mine} = storeToRefs(mainStore);

const $http = inject("$http");
const route = useRoute();
const router = useRouter();
let { articleId } = route.params;

// 文章内容
let article = reactive({});
// 用户信息
let author = reactive({});
// 用户推荐文章列表
let authorRecommendList = reactive({});
// 推荐列表
let recommendList = reactive([]);

const jumpDetail = (articleId) => {
    console.log(1234)
    router.push({ name: 'Detail', params: { articleId }});
    let routerUrl = router.resolve({
        path: '/detail',
        query: {id: articleId}
    });

    window.open(routerUrl.href, '_blank');
}

// 点赞处理函数
const handleLike = async (articleId) => {
    const {_id: mineId} = mine.value;
    const {likes} = article.value;

    if (!likes || likes.includes(mineId)) {
        message.error('you have already liked');
    } else {
        const res = await $http.post('/api/v1/article/recordLike', {articleId});

        if (res.status === 200) {
            article.value.likes.push(mineId);
            message.success('like~');
        }
    }
}
// 赞赏处理函数
const handlePay = async (articleId) => {
    const {_id: mineId} = mine.value;

    const res = await $http.post('/api/v1/article/recordPay', {articleId});

    if (res.status === 200) {
        article.value.totalPay++;
        message.success('pay~');
    }
}

// 更多好文
const handleMore = async () => {
    message.success('download app~');
}

// 关注
const follow = async (userId) => {
    const res = await $http.post('/api/v1/users/follow', { follow: [userId] });

    if (res.status === 200) {
        message.success('关注成功');
        mainStore.initUser();
    } else {
        message.error(res.data);
    }
}

(async () => {
    // 没有文章ID的时候跳转到首页
    if (!articleId) {
        const {id: queryId} = route.query;
        if (queryId) {
            articleId = queryId;
        } else {
            router.push({ name: 'Index' })
        }
    }

    // 查询文章详情
    const res = await $http.get('/api/v1/article/getDetail', { params: { id: articleId }});
    article.value = res.data;

    // 查询用户信息
    const userRes = await $http.get('/api/v1/users/getUserById', { params: { id: res.data.author }});
    author.value = userRes.data;

    // 查询用户推荐列表
    const userRecommendList = await $http.get('/api/v1/article/getListByAuthor', { params: { authorId: res.data.author}});
    authorRecommendList.value = userRecommendList.data;

    // 查询推荐列表
    const recommendRes = await $http.get('/api/v1/article/recommend');
    recommendList.value = recommendRes.data;
})()
</script>


<style>
.detail {
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    padding-top: 70px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    background-color: #f9f9f9;
    padding-bottom: 80px;
}

.detail-left-tools {
    position: fixed;
    left: calc((100vw - 1000px)/2 - 78px);
    top: 216px;
}

.detail-tool-item {
    font-size: 14px;
    color: #969696;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
}

.detail-like, .detail-pay, .detail-more {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 100%;
    margin-bottom: 10px;
    box-shadow: 0 2px 10px rgb(0 0 0 / 5%);
}


.detail-content {
    width: 666px;
    min-width: 666px;
    background-color: #fff;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 32px;
    border-radius: 5px;
}

.detail-content-title {
    font-size: 30px;
    font-weight: 700;
    word-break: break-word;
    margin-top: 32px;
    margin-bottom: 0.5em;
}

.dcid-top {
    display: flex;
    align-items: center;
}

.dcid-name {
    margin-right: 10px;
}

.dcid-contact {
    color: #ec7259;
    background-color: #fff;
    border-radius: 50px;
    box-sizing: border-box;
    padding: 2px 9px;
    cursor: pointer;
    touch-action: manipulation;
    background-image: none;
    border: 1px solid #ec7259;
}

.detail-content-info {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 30px;
}

.dci-logo img {
    border-radius: 100%;
}

.dci-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
}

.dcid-info {
    display: flex;
    color: #969696;
    font-size: 12px;
    align-items: center;
    box-sizing: border-box;
    padding-top: 8px;
}

.dcid-img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    margin-bottom: 20px;
}

.dcid-diamonds {
    color: #ea6f5a;
    margin-right: 10px;
    display: flex;
    align-items: center;
}

.detail-recommend {
    width: 300px;
    min-width: 333px;
    margin-left: 10px;
    position: sticky;
    top: 65px;
}

.dr-releated, .dr-list {
    box-sizing: border-box;
    padding: 16px 10px;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 20px;
}

.dr-list-item {
    margin-bottom: 20px;
}

.dli-title {
    color: #404040;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
}

.dli-title:hover {
    text-decoration: underline;
}

.dli-count {
    font-size: 12px;
    color: #969696;
    line-height: 1.5;
}

.drl-title {
    box-sizing: border-box;
    padding-left: 5px;
    border-left: 4px solid #ec7259;
    margin-left: 10px;
    font-weight: bold;
}
</style>