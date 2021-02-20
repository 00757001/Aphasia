import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth'
Vue.use(Vuex);

// 定義一個新的 Vue Store
const store = new Vuex.Store({
    modules: {
      auth,
    }
})

export default store;