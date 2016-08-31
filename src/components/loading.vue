<template>
    <div  v-if="loading" class="loading">
      <span>loading...</span>

    </div>
</template>
<style>
    .loading{
      background-color: #000;
      width: 100%;
      height: 100%;
      opacity: .6;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .loading span{
      text-align: center;
      color: #fff;
      width: 100%;
      display: inline-block;
      position: absolute;
      top: 50%;
    }
</style>
<script>
    import {isLoading} from '../vuex/getters'
    export default{
      vuex:{
        getters:{
          loading: isLoading
        }
      }

    }
</script>
