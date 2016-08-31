/**
 * Created by jyj02736 on 2016/8/30.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import middlewares from './middleware'
import loading from './modules/loading'
import topics from './modules/topics'
import showmsg from './modules/showmsg'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug

export default new Vuex.Store({
  modules: {
    loading,
    topics,
    showmsg
  },
  strict: debug,
  middlewares
})
