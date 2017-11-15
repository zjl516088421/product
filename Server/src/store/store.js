import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
    user: null
}

// 定义所需的 mutations
const mutations = {
    login(state,user) {
        state.user=user;
    },
    logout(state) {
        state.user=null;
    }
}

// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})
