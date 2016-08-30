/**
 * Created by jyj02736 on 2016/8/30.
 */
import {SUCCESS_GET_TOPICS,FAILURE_GET_TOPICS} from '../types'

const state = {
  topics:[]
}

const mutations ={
  [FAILURE_GET_TOPICS] (state) {
    state.topics = []
  },
  [SUCCESS_GET_TOPICS] (state,action) {
    state.topics = action.topics
  }
}

export default {
  state,
  mutations
}
