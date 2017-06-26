<template>
  <div id="home" class="container">
  <div class="row">
  <ul class="list-group">
      <template v-for="(value, word) in withheld" >
      <b-button-toolbar>
      <b-form-checkbox 
        key="word.id" 
        :checked="value"
        ></b-form-checkbox>
      <a 
        href="javascript:void(0)" 
        @click="clicked(word)">
        {{word}}
      </a> 
      <icon name="trash" v-if="isDuplicate(word)"></icon>
      </b-button-toolbar>
      </template>
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
import Getter from './helper'

import 'vue-awesome/icons/star'
import 'vue-awesome/icons/home'
import 'vue-awesome/icons/trash'

@Component
export default class App extends Vue {
  msg: string = 'Celebrity';
  seen: boolean = true;
  
  @Getter('WITHHELD') withheld: Array<string>
  @Getter('NAMES') listName: Array<string>
  @Getter('COUNTER') counter: number
  @Getter('DUPLIATE') duplicate: Array<string>
  clicked(word : string): void {
    //this.$store.commit('REMOVE')
    this.$store.commit('REMOVE_NAME', word)
    console.log(this.listName)
    //this.names.splice(this.names.indexOf(word),1)
    console.log(word)
    console.log(this.withheld)
  }

  isDuplicate(word : string) : boolean{
    return this.duplicate.indexOf(word) == -1
  }

  inputName:string=""
}
</script>
<style scoped>
  h3 {
    text-align:center;
  }
  .active {

  }
</style>
