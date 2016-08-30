<template>
  <div v-for="(i, topic) in topicList">
    <div class="cell">
      <a class="user_avatar pull-left" v-link="{path:'topic',params:{id:topic.id}" >
        <img :src="topic.author.avatar_url" title="{{ topic.author.loginname}}">
      </a>
  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      {{topic.reply_count}}
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title="点击数">
      {{topic.visit_count}}
    </span>
  </span>
      <a class="last_time pull-right" href="{{ '/topic/'+topic.id '#'+  topic.author_id }}">
        <img class="user_small_avatar" :src="https://avatars.githubusercontent.com/u/552081?v=3&amp;s=120">
        <span class="last_active_time">3 小时前</span>
      </a>
      <div class="topic_title_wrapper">
        <span class="put_top">{{ topic.top?'置顶':''}}</span>
        <a class="topic_title" v-link="{path:'topic',params:{id:topic.id}"title="{{topic.title}}">
          {{topic.title}}
        </a>
      </div>
    </div>
  </div>
</template>
<style>
</style>
<script>

</script>
