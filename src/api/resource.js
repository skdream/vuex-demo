/**
 * Created by jyj02736 on 2016/8/30.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'

Vue.use(VueResource);


Vue.http.options.crossOrigin = true;
Vue.http.options.credentials = false;
Vue.http.options.xhr = {withCredentials:true}
Vue.http.options.emulateJSON = true;

/*
Vue.http.interceptors.push({
  request (request) {
    request.headers = request.headers || {}
    return request
  },
  response (response) {
    return response
  }
})
*/
export const GetTopicsApi = Vue.resource(API_ROOT + 'topics');
