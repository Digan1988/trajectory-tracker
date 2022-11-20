import { ref } from 'vue'
import Plotly from 'plotly.js-dist/plotly'

const useChart = () => {
    const chartDiv = ref(null);
    const buildChart = (data) => {
        const layout = {
            xaxis: {
                autorange: false,
                //side: "top",
                visible: false,
                range: [0, 20]
            },
            yaxis: {
                range: [-2000, 0],
                //autorange: true
            },
            showlegend: false
        }; // It's a stub, put layout config here.
  
        const config = {
          displayModeBar: false, // this is the line that hides the bar.
        };
  
        Plotly.newPlot(chartDiv.value, data, layout, config);
    }

    return {
        chartDiv,
        buildChart
    }
}

export default useChart