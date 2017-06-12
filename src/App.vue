<template>
  <div id="app" v-bind:title="hover">
    <h1 v-if="seen">{{msg}}</h1>
    <b-alert show>
      Hello
    </b-alert>
  </div>
</template>

<script>
export default {
  name: 'apps',
  data () {
    return {
      msg: 'Celebrity',
      hover: 'hello',
      seen: true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
a {
  color: #42b983;
}
</style>
