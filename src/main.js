import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import configRouter from './routes'
import App from './App'


Vue.use(VueRouter)
Vue.config.warnExpressionErrors = false


const router = new VueRouter({
  history: false,
  saveScrollPosition: true,
  suppressTransitionError: true
})

sync(store, router)

configRouter(router)

router.redirect({
  '*':'index'
})

router.start(Vue.extend(App),'#app')

window.router = router
