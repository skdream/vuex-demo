<template>
  <div class="panel">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <Toaster></Toaster>
  </div>
</template>

<script>
  import store from './vuex/store'
  import NavBar from './components/Navbar'
  import Toaster from './components/Toaster'
  export default {
    store,
    components: { NavBar,Toaster }
  }
</script>
