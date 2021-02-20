import Vue from 'vue';
import VueCookies from 'vue-cookies';
import router from '@/router'
import axios from '@/axios';
Vue.use(VueCookies);

export default {
    namespaced: true,
    state: {
        loading: false,
        isLogin: false,
        user: null,
    },
    actions: {
        getUser(context) {
            const user = Vue.$cookies.get('session');
            if (user) {
                router.push(`/home/${user}`);
                context.commit('setLoad');//開始讀取
                axios.get(`user/${user}`).then(function (response) {
                    context.commit('setUser', response.data);
                    context.commit('setLoad');//停止讀取
                });
            }
            else {
                router.push(`/`);
            }
        }
    },
    mutations: { // 變動state資料就用mutations中的method 
        // 將state設定為參數
        setLoad(state) {
            // state的isLoading true/false 互轉
            state.loading = !state.loading
        },
        setUser(state, data) {
            state.user = data;
        },
    },
    getters: {
        
    }
}