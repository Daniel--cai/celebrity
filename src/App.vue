<template>
  <div id="app" class="container">
    <h3>{{msg}}   <b-badge>{{listName.length}}</b-badge></h3>
    <b-form-input type="text" v-model="inputName" placeholder="Enter a name"></b-form-input>
  
    <b-btn  @click="clicked"  :disabled="inputName ? false : true">Add</b-btn>
    <b-btn  @click="clicked" :variant="'primary'" :disabled="listName.length ==0 ? true : false">Play</b-btn>
  
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
 

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component, { createDecorator } from 'vue-class-component'
import { mapGetters, mapState } from 'vuex'

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
  @Getter('COUNTER') counter: Number;
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
