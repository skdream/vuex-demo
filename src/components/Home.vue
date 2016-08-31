<template>
    <div class="inner no-padding">
      <div id="topic_list">
       <topics :topic-list='topicList'></topics>
        <div v-for ="item in topicList">
          {{item.create_at}}
        </div>
        {{ JSON.stringify( {name:345} ) }}
        dddggs345534
        {{name}}
      </div>
    </div>
</template>

<script>
  import {getTopics} from '../vuex/actions'
  import {getTopicsData} from '../vuex/getters'

  import Topics from './topics.vue'
  import store from '../vuex/store'

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
        topicList:function(){
          aa = getTopicsData();
          console.log(aa);
          return aa;
        }
      }

    },
//    route:{
//      data({ to: { params:{ tab } }}){
//        this.getTopics(tab)
//      }
//    },
    created(){
      this.getTopics();
      // console.log(this.topicList)
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
