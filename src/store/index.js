import Vue from 'vue';
import Vuex from 'vuex';
import VueCookies from 'vue-cookies';
import router from '../router'
import axios from '@/axios';
Vue.use(VueCookies);
Vue.use(Vuex);

// 定義一個新的 Vue Store
const store = new Vuex.Store({
    state: {
      loading: false,
      isLogin:false,
      user:null,
    },
    actions:{
      getUser(state){
        const user = Vue.$cookies.get('session');
        if(user){
          router.push(`/home/${user}`);
          state.commit('setLoad');//開始讀取
          axios.get(`user/${user}`).then(function(response){
            state.commit('setUser',response.data);
            state.commit('setLoad');//停止讀取
          });
        }
        else{
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
      setUser(state, data){
        state.user = data;
      },
    }
})
export default store;