<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from '@/components/Header.vue'
import { useMainStore } from '@/stores/index';
import { onBeforeMount } from 'vue';

onBeforeMount(() => {
    const mainStore = useMainStore();

    mainStore.initUser();
});

</script>

<template>
    <section class="main">
        <Header></Header>
        <router-view></router-view>
    </section>
</template>

<style>
.main {
    width: 100%;
    height: 100vh;
}

body {
    min-width: 960px;
    margin: 0;
}

p {
    margin: 0 0 20px 0;
    word-break: break-word;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
}
</style>
