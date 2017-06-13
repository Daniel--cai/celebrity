<template>
  <div id="app" v-bind:title="hover">
    <h1 v-if="seen">{{msg}}</h1>
    <b-alert show>
      Hello
    </b-alert>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
function greeter(person: string) {
    return "Helsdgsdglo";
}
export default {
  name: 'apps',
  data () {
    return {
      msg: 'Celebrity',
      hover: greeter("ddf"),
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
