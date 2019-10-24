/*
 * @Author: 寒嫣
 * @Date: 2019-10-22 14:02:48
 * @Description: file content
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getter'
import mutations from './mutation'
import actions from './action'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
