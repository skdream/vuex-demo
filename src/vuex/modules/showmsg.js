/**
 * Created by jyj02736 on 2016/8/30.
 */
import {
  SHOW_MSG,
  HIDE_MSG
} from '../types'

const state = {
  message:{
    type: '',
    content: '',
    title: ''
  }
}

const mutations = {
  [SHOW_MSG](state , action){
    state.message = {...action}
  },
  [HIDE_MSG](state, action){
    state.message = {
      type: '',
      content: '',
      title: ''
    }
  }
}

export default {
  state,
  mutations
}
