<template>
  <div id="app" v-bind:title="hover">
    <h1 >{{msg}}</h1>
    <b-alert show>
      Hello
    </b-alert>
    <b-progress v-model="counter" :precision="1" :show-progress=true :animated=true ></b-progress>
    
    <b-btn :variant="'success'" class="mt-4" @click="clicked">Click me</b-btn>
    
    <b-btn class="mt-4" v-b-modal.writename>Show Modal</b-btn>

    <b-modal id="writename" title="Submit your name" >
      <form>
        <b-form-input type="text" placeholder="Enter your name"></b-form-input>
      </form> 
    </b-modal>
    <b-button-toolbar>
    <b-form-input type="text" placeholder="Enter a name"></b-form-input>
     <b-btn >Add</b-btn>
     </b-button-toolbar>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
function greeter(person: string) {
    return "Helsdgsdglo";
}

@Component({
  props: {
    msg: String,

  }
})
export default class App extends Vue {
  msg: 'Celebrity';
  hover: string = greeter("ddf");
  seen: boolean = true;
  counter: Number = 12;
  clicked(){
    alert('clicked')
  }
}
</script>

