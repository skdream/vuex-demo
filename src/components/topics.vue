<template>
  <div >
ee
    {{ JSON.stringify(topicList)}}
    <div class="cell" v-for="topic in topicList">
     <!--  <a class="user_avatar pull-left" v-link="{path:'topic',params:{id:topic.id}}" >
        <img :src="topic.author.avatar_url" title="{{ topic.author.loginname}}">
      </a> -->
      <span class="reply_count pull-left">
        <span class="count_of_replies" title="回复数">
          {{topic.reply_count}}
        </span>
        <span class="count_seperator">/</span>
        <span class="count_of_visits" title="点击数">
          {{topic.visit_count}}
        </span>
      </span>
     <!--  <a class="last_time pull-right" v-link="{name:'topic',params:{name:topic.id +'#'+  topic.author_id }}">
        <img class="user_small_avatar" :src="">
        <span class="last_active_time">{{topic.last_reply_at  | timeToNow}}</span>
      </a> -->
      <div class="topic_title_wrapper">
        <span class="put_top">{{ topic.top?'置顶':''}}</span>
      <!--   <a class="topic_title" v-link="{path:'topic',params:{id:{{topic.id}}" title="{{topic.title}}">
          {{topic.title}}
        </a> -->
      </div>
    </div>
  </div>
</template>


<style>
</style>
<script>
  export default {
    props: ['topicList']
  };
</script>
