<template>
    <div class="index">
        <div class="index-main">
            <List />
            <Author />
        </div>
    </div>
</template>

<script setup>
import List from '@/components/List.vue';
import Author from '@/components/Author.vue';

</script>


<style>
.index {
    width: 100%;
    box-sizing: border-box;
    padding-top: 70px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
}

.index-main {
    width: 960px;
    display: flex;
}
</style>