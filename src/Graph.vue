<template>
  <div id='graph'>
  </div>
</template>
<script lang="ts">
import * as d3 from 'd3';
import Vue from 'vue'
import Component, { createDecorator } from 'vue-class-component'
import { mapGetters, mapState } from 'vuex'
import Getter from './helper'

@Component
export default class App extends Vue {
  mounted() {

    var parent = d3.select('div#graph');
    var radius = 100
    var border = 10
    var twoPi = Math.PI * 2;
    var color: string = '#E1499A'
    var elapse: number = 8
    var duration: number = 40
    var progress:number = elapse/duration
    setTimeout(function(){ duration++ }, 3000);
    var arc = d3.arc()
      .startAngle(0)
      .innerRadius(radius)
      .outerRadius(radius - border)
      .cornerRadius(5)

    var svg = parent.append('svg')
      .attr('width', 300)
      .attr('height', 300)
      .append('g')
      .attr('transform', 'translate(' + 300 / 2 + ',' + 300 / 2 + ')')
    var path = svg.append('path')
      .attr('class', 'background')
      .attr('fill', '#ccc')
      .attr('fill-opacity', 0.5)
      .attr('d', arc.endAngle(twoPi))
    var foreground = svg.append('path')
    .attr('class', 'foreground')
    .attr('fill', color)
    .attr('fill-opacity', 1)
    .attr('d', arc.endAngle(twoPi * progress))

  }
} 
</script>

<style scoped>
	svg {
		margin: 25px;
	}
</style>