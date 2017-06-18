<template>
    <div id="select" class="jumbotron">
      <h3>{{msg}}   <b-badge>{{listName.length}}</b-badge></h3>
      <b-form-input class="col-md-12" type="text" v-model="inputName" placeholder="Enter a name"></b-form-input>
      
      <b-btn  class="col-md-4" @click="clicked"  :disabled="inputName ? false : true">Add</b-btn>
      <b-btn  class="col-md-4" router-link to="/Home" @click="clicked" :variant="'primary'" :disabled="listName.length ==0 ? true : false">Play</b-btn>
      
    </div>
   <!--
  <ul class="list-group">
    <li v-for="name in listName" class="list-group-item">
      {{ name }}
    </li>
  </ul>
 <b-progress v-model="counter" :precision="1" :show-progress=true :animated=true ></b-progress>
    
    
    <b-btn class="mt-4" v-b-modal.writename>Show Modal</b-btn>

    <b-modal id="writename" title="Submit your name" >
      <form>
        <b-form-input type="text" placeholder="Enter your name"></b-form-input>
      </form> 
    </b-modal>-->
</template>

<script lang="ts">
import Vue from 'vue'
import Component, { createDecorator } from 'vue-class-component'
import { mapGetters, mapState } from 'vuex'

function Getter (getterType: string) {
  return createDecorator((options, key) => {
    if (!options.computed) options.computed = {}
    options.computed[key] = function () {
      return this.$store.getters[getterType]
    }
  })
}

@Component
export default class Index extends Vue {
  msg: string = 'Celebrity';
  seen: boolean = true;
  @Getter('NAMES') listName: Array<string>
  @Getter('COUNTER') counter: Number;
  clicked() : void {
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
