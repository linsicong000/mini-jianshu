<template>
    <header class="header">
        <div class="header-logo" @click="jumpIndex()">
            简书
        </div>
    </header>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const router = useRouter();

const jumpIndex = () => {
    router.push({ name: 'Index'});
}

</script>

<style>
.header {
    width: 100%;
    height: 56px;
    display: flex;
    box-sizing: border-box;
    padding: 0 12px;
    border: 1px solid #f0f0f0;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
}

.header-logo {
    color: #ed7259;
    font-size: 28px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;
}
</style>