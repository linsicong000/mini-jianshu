import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index';
import axios from 'axios';
import { createPinia } from 'pinia';

import { message } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

app.config.globalProperties.$http = axios;
app.provide('$http', axios);

app.use(createPinia()).use(message).use(router).mount('#app');
