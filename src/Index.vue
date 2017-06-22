<template>
    <div id="select" class="jumbotron">
      <div class="row">
        <div class="col lg-1">
          <h3>{{msg}}   <b-badge>{{listName.length}}</b-badge></h3>
        </div>
      </div
      <div class="row">
        <div class="col lg-1">
          <b-form-input class="col-md-12" type="text" v-model="inputName" placeholder="Enter a name"></b-form-input>
      
          <b-btn  class="col-sm-4" @click="clicked"  :disabled="inputName ? false : true">Add</b-btn>
          <b-btn  class="col-sm-4" router-link to="/Play" @click="clicked" :variant="'primary'" :disabled="listName.length ==0 ? true : false">Play</b-btn>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component, { createDecorator } from 'vue-class-component'
import { mapGetters, mapState } from 'vuex'
import Getter from './helper'

@Component
export default class Index extends Vue {
  msg: string = 'Celebrity';
  seen: boolean = true;
  inputName:string = ""
  @Getter('NAMES') listName: Array<string>
  @Getter('COUNTER') counter: number;
  clicked() : void {
    if (this.inputName){
      this.$store.commit('ADD_NAME', this.inputName)
    }
    this.inputName = ""
  }
}
</script>
<style scoped>
  h3 {
    text-align:center;
  }
</style>
