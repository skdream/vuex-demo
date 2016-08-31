<template>
  <div class="header">
    <a v-for="tab in topicTabs"  v-link="{name:'tab', params:{tab:tab.ename, page:1} }" class="topic-tab" :class="currentTab === tab.ename?'current-tab':''"> {{ tab.name }}</a>
  </div>
</template>
<style>

</style>
<script>
  import {getCurrentTab} from '../vuex/getters'
export default {

  vuex:{
    getters:{
      currentTab:getCurrentTab
    }
  },
  data(){
    return {
      topicTabs: [{
        name: '全部',
        ename: 'all'
      }, {
        name: '精华',
        ename: 'good'
      }, {
        name: '分享',
        ename: 'share'
      }, {
        name: '问答',
        ename: 'ask'
      }, {
        name: '招聘',
        ename: 'job'
      }]
    }
  }
}
</script>
