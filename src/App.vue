<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <vue-slide-bar v-model="simpleValue"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      simpleValue: 50
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
