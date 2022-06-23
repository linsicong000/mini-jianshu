// 数据仓库
import { defineStore } from 'pinia';
import axios from 'axios';

export const useMainStore = defineStore('main', {
    state: () => ({
        user: {},
    }),
    getters: {
        getUser: (state) => {
            return state.user;
        }
    },
    actions: {
        async initUser() {
            const res = await axios.get('/api/v1/users/myInfo');

            if (res.status === 200) {
                console.log(this)
                this.$patch({
                    user: res.data
                })
                // this.user = res.data;
            }
        },
    },
  })