/**
 * Created by jyj02736 on 2016/8/30.
 */

import * as types from './types'

import api from '../api'


export const getTopics = ({dispatch},tab,page) => {

  dispatch(types.LOADING_TOPICS);
  dispatch(types.FAILURE_GET_TOPICS);

  api.getTopics(tab,page).then(response => {
    if(response.ok){
      dispatch(types.LOADED_TOPICS);
      dispatch(types.SUCCESS_GET_TOPICS,response.json().data,tab)
    }
  },response =>{
    dispatch(types.FAILURE_GET_TOPICS)
  })
}


export const showMsg = ({dispatch}, content,type='error') => {
  dispatch(types.SHOW_MSG, {content:content,type:type})
}

export const hideMsg = ({dispatch}) => {
  dispatch(types.HIDE_MSG)
}
