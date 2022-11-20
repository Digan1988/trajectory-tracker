<template>
  <div ref="chartDiv"></div>
</template>

<script>
import { onMounted, ref } from 'vue'
import Plotly from 'plotly.js-dist/plotly'

export default {
  setup() {
    const chartDiv = ref(null);

    onMounted(() => {
      const trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter'
      };

      const trace2 = {
        x: [1, 2, 3, 4],
        y: [16, 5, 11, 9],
        type: 'scatter'
      };

      var data = [trace1, trace2];

      const layout = {}; // It's a stub, put layout config here.

      const config = {
        displayModeBar: false, // this is the line that hides the bar.
      };

      Plotly.newPlot(chartDiv.value, data, layout, config);
    });

    return {
      chartDiv
    }
  }
}
</script>

<style>

</style>