/**
 * Created by jyj02736 on 2016/8/30.
 */

import Home from './components/Home.vue'
import Comments from './components/Comments'

export default function (router) {
  router.map({
    '/':{
      name:'home',
      component:Home,
      subRoutes:{
        '/comments':{
          name:'comments',
          component:Comments
        }
      }
    },
    'index':{
      component:Home
    }
  })



// router.beforeEach((transition)=>{
//   transition.next()
// })

}

