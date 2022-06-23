<template>
    <div class="list-item-wrap">
        <div class="list-item-left">
            <div class="list-item-title" @click="jumpDetail(item._id)">
                {{ item.title }}
            </div>
            <div class="list-item-summary">
                {{ item.summary }}...
            </div>
            <div class="list-item-tools">
                <div class="list-item-diamonds">
                    <img src="@/assets/diamond.svg" style="margin-right: 4px" width="13" height="13" />
                    <span>{{ item.diamonds.toFixed(1) }}</span>
                </div>
                <div class="list-item-author">
                    <a>{{ item.authorName }}</a>
                </div> 
                <div class="list-item-comment">
                    <img src="@/assets/comment.svg" style="margin-right: 4px" width="13" height="13" />
                    <span>{{ item.comments.length }}</span>
                </div>
                <div class="list-item-like">
                    <img src="@/assets/like.svg" style="margin-right: 4px" width="13" height="13" />
                    <span>{{ item.likes.length }}</span>
                </div>
                <div class="list-item-pay">
                    <img src="@/assets/pay.svg" style="margin-right: 4px" width="13" height="13" />
                    <span>{{ item.payers.length }}</span>
                </div>
            </div>
        </div>
        <div class="list-item-right" v-if="item.thumbnail">
            <img class="list-item-right-img" :src="item.thumbnail"/>
        </div>
    </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";

const props = defineProps({
    item: Object
})

const router = useRouter();
const jumpDetail = (articleId) => {
    router.push({ name: 'Detail', params: { articleId }});
}

</script>

<style>
.list-item-wrap {
    display: flex;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 20px;
    border-bottom: 1px solid #f0f0f0;
}

.list-item-left {
    flex: 1;
    box-sizing: border-box;
    padding: 15px 15px 15px 0;
}

.list-item-right {
    width: 150px;
    height: 100px;
    margin-top: 20px;
}

.list-item-right img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
}

.list-item-title {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    margin: -7px 0 4px;
    cursor: pointer;
}

.list-item-title:hover {
    text-decoration: underline;
}

.list-item-summary {
    font-size: 13px;
    color: #999;
    line-height: 24px;
    margin: 0 0 8px;
}

.list-item-tools {
    display: flex;
    font-size: 12px;
    font-weight: 400;
    color: #b4b4b4;
}

.list-item-diamonds {
    color: #ea6f5a;
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-right: 10px;
}

.list-item-author:hover, .list-item-comment:hover {
    color: #787878;
}

.list-item-author, .list-item-comment, .list-item-like, .list-item-pay {
    margin-right: 10px;
    display: flex;
    align-items: center;
}

.list-item-comment, .list-item-author {
    cursor: pointer;
}

.list-item-author a {
    color: #999;
}

.list-item-right-img {
    border-radius: 4px;
    border: 1px solid #f0f0f0;
}
</style>