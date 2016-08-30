<template>
  <div>
    <div class="inner no-padding">
      <div id="topic_list">df
       <div> <topics :topic-list="topicList"></topics></div>
      </div>
    </div>
    </div>
</template>

<script>
  import {getTopics} from '../vuex/actions'

  import Topics from './topics.vue'
  import NavBar from './Navbar'
  import Toaster from './Toaster'

  export default {
    vuex: {
      getters: {
        topicList:getTopics
      },
      actions:{getTopics}
    },
    route:{
      data({ to: { params:{ tab } }}){
        this.getgetTopics(tab)
      }
    },
    components:{
      topics:Topics,
      NavBar,
      Toaster
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
