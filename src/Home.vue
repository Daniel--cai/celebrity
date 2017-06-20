<template>
  <div id="home" class="container">
  <div class="row">
  <ul class="list-group">
      <b-form-checkbox v-for="name in listName" key="name.id" >
      {{name}}
  </b-form-checkbox>
  </ul>
  </div>
    <div class="row">

    <b-btn class="col md-2"><icon name="check" scale="2"></icon></b-btn> 
    <b-btn  class="col md-2"><icon name="close" scale="2"></icon></b-btn>
    <b-btn router-link to="/"  class="col md-2"><icon name="home" scale="2"></icon></b-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component, { createDecorator } from 'vue-class-component'
import { mapGetters, mapState } from 'vuex'

import 'vue-awesome/icons/check'
import 'vue-awesome/icons/home'
import 'vue-awesome/icons/close'

function Getter (getterType) {
  return createDecorator((options, key) => {
    if (!options.computed) options.computed = {}
    options.computed[key] = function () {
      return this.$store.getters[getterType]
    }
  })
}

function Dispatch (mutationType, payload){
  return createDecorator((options,key)=>{
      if (!options.methods) options.methods = {}
      options.methods[key] = function(){
        return this.$store.commit(mutationType, payload)
      }
  })
}

@Component
export default class App extends Vue {
  msg: string = 'Celebrity';
  seen: boolean = true;
  @Getter('NAMES') listName: Array<string>
  @Getter('COUNTER') counter: number;
  clicked(){
    if (this.inputName){
      this.$store.commit('ADD_NAME', {name:this.inputName})
    }
    this.inputName = ""
  }
  inputName:string=""
}
</script>
<style scoped>
  h3 {
    text-align:center;
  }
</style>
