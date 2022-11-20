<template>
  <div ref="chartDiv"></div>
</template>

<script>
import { onMounted, onUpdated, ref } from 'vue'
import Plotly from 'plotly.js-dist/plotly'

export default {
  props: ['data'],
  setup(props) {
    const chartDiv = ref(null);

    const buildChart = () => {
      const config = {
        displayModeBar: false, // this is the line that hides the bar.
      };

      Plotly.newPlot(chartDiv.value, props.data.data, props.data.layout, config);
    }

    onMounted(() => {
      buildChart()
    })

    onUpdated(() => {
      buildChart()
    })

    return {
      chartDiv
    }
  }
}
</script>

<style>

</style>