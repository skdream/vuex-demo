<template>
    <div class="inner no-padding">
      <div id="topic_list">
       <topics :items='topicList'></topics>
      </div>
    </div>
</template>

<script>
  import {getTopics} from '../vuex/actions'
  import {getTopicsData} from '../vuex/getters'
  import Topics from './topics.vue'


  export default {
    data(){
      return{
        name:345
      }
    },
    vuex: {
      actions:{
        getTopics
      },
      getters: {
        topicList:getTopicsData
      }
    },
    route:{
      data({ to: { params:{ tab = 'all', page = 1 }} }){

        const curPage = page;
        const curTab = tab;
        this.getTopics(curTab,curPage)
      }
    },
    created(){
      this.getTopics();
      // console.log(this.topicList)
    },
    components:{
      topics:Topics
    }
  }
</script>


<style scoped>
h1 {
  color: #42b983;
}
</style>
