<template>
  <div  class="panel">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <loading></loading>
  </div>
</template>

<script>
  import store from './vuex/store'
  import NavBar from './components/Navbar'
  import loading from './components/loading'

  export default {
    store,
    components: { NavBar,loading }
  }
</script>
