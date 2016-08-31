/**
 * Created by jyj02736 on 2016/8/30.
 */

import Home from './components/Home.vue'
import Comments from './components/Comments'

export default  (router) => router.map({
    '/':{
      name:'home',
      component:Home
    },
    '/tab/:tab/page/:page':{
      name:'tab',
      title:'精华',
      component:Home
    },
    '/comment':{
      component:Comments
    }
  })



// router.beforeEach((transition)=>{
//   transition.next()
// })



