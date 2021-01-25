<template>
  <div id="app">
    <navbar></navbar>
    <transition name="fade">   
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import navbar from './components/Navbar'

export default {
  components: {
    navbar
  }
}
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;

  html, body {
    margin: 0px!important;
    padding: 0px!important;
  }


@import 'src/assets/scss/navbar.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to
{
  opacity: 0;
}
}
</style>
