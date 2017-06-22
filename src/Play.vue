<template>
  <div id="play" class="container">
    <div class="row" v-if="started">
    <h3>{{displayWord}}</h3>
    <b-btn  @click="score" class="col md-2">Score</b-btn>
    <b-btn  @click="pass" class="col md-2">Pass</b-btn>
    </div>
    <div class="row" v-else>
    <b-btn  @click="clicked" class="col md-2"><icon name="hourglass-start" scale="2"></icon></b-btn>
    </div>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component, { createDecorator } from 'vue-class-component'
    import { mapGetters, mapState } from 'vuex'
    import 'vue-awesome/icons/hourglass-start'
    import Getter from './helper'

    @Component
    export default class Play extends Vue {
        @Getter('STARTED') started: boolean;
        @Getter('NAMES') listName: Array<string>;
        @Getter('WITHHELD') withheld: Dictionary
        displayWord: string = ""
        clicked(){
            this.$store.commit('START', true)
            this.random()
        }
        score(){
            this.$store.commit('ADD_WITHHELD', {
                word: this.displayWord, 
                value: true
            }) 
            this.random()
        }

        finish(){
            this.$router.push('Home')
        }

        random(): void{
            var random = Math.floor(Math.random() * (this.listName.length))
            this.displayWord = this.listName[random]
            this.$store.commit('ADD_WITHHELD', {
                word: this.displayWord, 
                value: false
            })
            
            this.listName.splice(this.listName.indexOf(this.displayWord), 1)
            if (this.listName.length == 0)
                this.finish()
        }
        
        pass(){
            this.random()
        }
    }
</script>