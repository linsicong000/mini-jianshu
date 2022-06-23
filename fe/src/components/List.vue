<template>
    <div class="list-wrap" ref="listRef">
        <div class="list-notes">
            <div class="list-img">
                <img src="@/assets/top.png"/>
            </div>
            <ListItem
                v-for="item in showArr.value"
                :key="item"
                :item="item"
            />
            <div class="list-notes-more" @click="handleMore">阅读更多</div>
        </div>
    </div>
</template>

<script setup>
import ListItem from '@/components/ListItem.vue';
import {inject, reactive, ref, onMounted } from 'vue';
import { message } from 'ant-design-vue';

const $http = inject("$http");
const limit = 5;
let start = ref(0);
let totalNum = ref(0);

let showArr = reactive([]);
let scrollLock = false;

const getListData = async () => {
    const res = await $http.get('/api/v1/article/getList', { params: { start: start.value, limit } });
    const {total, list} = res.data;

    showArr.value = [].concat(showArr.value, list).filter(item => item);
    totalNum.value = total;
    scrollLock = false;
}

const handleMore = async () => {
    message.success('阅读更多')
}

// 初始化
(async () => {
    getListData();
})()

// 监听滚动
onMounted(() => {
    let scrollTop;
    let clientHeight;
    let scrollHeight;

    window.addEventListener('scroll', () => {
        scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        clientHeight = document.body.clientHeight;
        scrollHeight = document.body.scrollHeight;

        const distance = scrollHeight - scrollTop - clientHeight;

        console.log(distance)
        console.log(scrollLock)

        if (distance < 1) {
            if (!scrollLock && start.value < totalNum.value) {
                scrollLock = true;
                start.value += 5;
                getListData();
            }
        }
    }, false);
})
</script>

<style>
.list-wrap {
    flex: 2;
    background-color: #fff;
    margin-right: 5px;
}

.list-img {
    height: 270px;
    box-sizing: border-box;
    padding: 0 20px;
}

.list-img img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
}

.list-notes-more {
    width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    height: 40px;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    color: #fff;
    cursor: pointer;
    box-sizing: border-box;
}
</style>