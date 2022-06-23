<template>
    <div class="author">
        <div class="author-head">
            <div>推荐作者</div>
            <div class="author-change-btn" @click="changeRecommend(false)">
                <img src="@/assets/cycle.svg" width="12" height="12" style="margin-right: 6px"/>
                <span>换一批</span>
            </div>
        </div>
        <div class="author-list">
            <div
                class="author-item"
                v-for="item in showArr.value"
                :key="item._id"
            >
                <div class="author-logo">
                    <img src="@/assets/top.png" v-if="!item.avatar" alt="user avatar"/>
                    <img :src="item.avatar" v-else alt="user avatar"/>
                </div>
                <div class="author-info">
                    <div class="author-name">
                        {{ item.name }}
                    </div>
                    <div class="author-count">
                        <span>写了{{ item.totalWord > 1000 ? `${(item.totalWord / 1000).toFixed(1)}k` : item.totalWord }}字</span>
                        <span> · </span>
                        <span>{{ item.totalLike > 1000 ? `${(item.totalLike / 1000).toFixed(1)}k` : item.totalLike }}喜欢</span>
                    </div>
                </div>
                <div class="author-like" @click="follow(item._id)">
                    <img src="@/assets/plus.svg" width="12" height="12" />
                    <span>关注</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {inject, reactive, ref} from 'vue';
import { message } from 'ant-design-vue';

const $http = inject("$http");

let showArr = reactive([]);

const changeRecommend = async (first) => {
    const res = await $http.get('/api/v1/users/recommend');
    showArr.value = res.data;

    console.log(!first)

    !first && (message.success('更换成功'));
}

const follow = async (userId) => {
    const res = await $http.post('/api/v1/users/follow', { follow: [userId] });

    if (res.status === 200) {
        message.success('关注成功');
        await changeRecommend(true);
    } else {
        message.error(res.data);
    }
}

// 初始化
(async () => {
    await changeRecommend(true);
})()

</script>

<style>
.author {
    flex: 1;
    font-size: 14px;
    color: #969696;
}

.author-item {
    display: flex;
    width: 100%;
    margin-top: 15px;
}

.author-logo {
    width: 48px;
    height: 48px;
    border-radius: 100%;
    margin-right: 10px;
}

.author-logo img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
}

.author-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
}

.author-name {
    color: #333;
}

.author-count {
    font-size: 12px;
}

.author-head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.author-change-btn {
    cursor: pointer;
    display: flex;
    align-items: center;
}

.author-like {
    color: #42c02e;
    cursor: pointer;
    font-size: 13px;
    width: 50px;
    height: 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
</style>