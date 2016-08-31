<template>
    <div class="cell" v-for="topic in items">
     <a class="user_avatar pull-left">
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
       <a class="last_time pull-right">
        <span class="last_active_time">{{topic.last_reply_at  | timeToNow}}</span>
      </a>
      <div class="topic_title_wrapper">
      <span class="put_top" v-if="topic.top">置顶</span>
        <span class="put_good" v-if="topic.good">精华</span>
       <a class="topic_title" >
          {{topic.title}}
        </a>
      </div>
    </div>
</template>


<style>
</style>
<script>
  export default {
    props: ['items']
  };
</script>
