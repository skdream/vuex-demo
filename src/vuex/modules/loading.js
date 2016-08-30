/**
 * Created by jyj02736 on 2016/8/30.
 */
import {LOADING_TOPICS, LOADED_TOPICS} from '../types'

const state = {
  loading:true
}

const mutations = {
  [LOADING_TOPICS] (state) {
    state.loading = false
  },
  [LOADED_TOPICS] (state) {
    state.loading = true
  }
}

export default{
  state,
  mutations
}
