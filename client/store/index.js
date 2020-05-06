import Vue from 'vue'
import vuex from 'vuex'
import * as types from './mutation-types'
Vue.use(vuex);
const store = new vuex.Store({
    state: {
        PassWord:'111111',
    },
    getters: {
      
    },
    mutations: {
        [types.CHANGE_PASSWORD](state,newPassWord){
            state.PassWord = newPassWord
        }

    },
    actions: {

    }

})
export default store