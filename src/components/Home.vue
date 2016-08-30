<template>
  <div>
    <div class="inner no-padding">
      <div id="topic_list">
       <topics :topic-list='topicList'></topics>
      </div>
    </div>
    </div>
</template>

<script>
  import {getTopics} from '../vuex/actions'

  import {getTopicsData} from '../vuex/getters'

  import Topics from './topics.vue'
  import store from '../vuex/store'


  export default {
    vuex: {
      getters: {
        topicList:getTopicsData
      },
      actions:{
        getTopics
      }
    },
    route:{
      data({ to: { params:{ tab } }}){
        this.getTopics(tab)
      }
    },
    ready(){
       this.getTopics();
       console.log(this.topicList)
    },
    components:{
      topics:Topics
    },
    store
  }
</script>


<style scoped>
h1 {
  color: #42b983;
}
</style>
