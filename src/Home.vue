<template>
  <div id="home" class="container">
  <div class="row">
  <ul class="list-group">
      <b-form-checkbox 
        v-for="(value, word) in withheld" 
        key="name.id" 
        :checked="value"
        >
      {{word}}
  </b-form-checkbox>
  </ul>
  </div>
    <div class="row">

    <b-btn class="col md-2"><icon name="star" scale="2"></icon></b-btn> 
    <b-btn  class="col md-2"><icon name="trash" scale="2"></icon></b-btn>
    <b-btn router-link to="/"  class="col md-2 btn-success"><icon name="home" scale="2"></icon></b-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component, { createDecorator } from 'vue-class-component'
import { mapGetters, mapState } from 'vuex'

import 'vue-awesome/icons/star'
import 'vue-awesome/icons/home'
import 'vue-awesome/icons/trash'

function Getter (getterType : string) {
  return createDecorator((options, key) => {
    if (!options.computed) options.computed = {}
    options.computed[key] = function () {
      return this.$store.getters[getterType]
    }
  })
}
@Component
export default class App extends Vue {
  msg: string = 'Celebrity';
  seen: boolean = true;
  
  @Getter('WITHHELD') withheld: Array<string>
  @Getter('COUNTER') counter: number;
  clicked(): void {
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
