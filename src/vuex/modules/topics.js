/**
 * Created by jyj02736 on 2016/8/30.
 */
import {SUCCESS_GET_TOPICS,FAILURE_GET_TOPICS} from '../types'

const state = {
  items:[],
  CurrentTab:'all'
}

const mutations ={
  [FAILURE_GET_TOPICS] (state) {
    state.items = []
  },
  [SUCCESS_GET_TOPICS] (state,topics,tab) {
    state.items = topics;
    state.CurrentTab = tab

  }
}

export default {
  state,
  mutations
}
