import { computed } from 'vue'

const use3DChart = (series) => {
    const chart = computed(() => { 
        const layout = {
          scene: {
            camera: {
              center: { x: 0, y: 0, z: 0 }, 
              eye: { x: -1, y: -3, z: 1 }, 
              up: { x: 0, y: 0, z: 1 }
            },
            xaxis: {
              showticklabels: false,
              range: [0, 1000],
              linecolor: 'rgb(51,153,255)',
              linewidth: 3
            },
            yaxis: {
              showticklabels: false,
              range: [0, 360],
              linecolor: 'rgb(51,153,255)',
              linewidth: 3
            },
            zaxis: {
              showticklabels: false,
              range: [0, 1000],
              linecolor: 'rgb(51,153,255)',
              linewidth: 3
            },
            aspectratio: {
              x: 1.4,
              y: 1.4,
              z: 1.4
            }
          },
          showlegend: false
        }
  
        return { layout, data: series }
      })

    return chart
}

export default use3DChart