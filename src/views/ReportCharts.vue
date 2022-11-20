<template>
  <div class="report-cont">
    <div>
      <el-button plain @click="back">Назад</el-button>
      <el-button type="success" plain @click="report">Отчет</el-button>
    </div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <LineChart :data="chart1"/>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <LineChart :data="chart2" />
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <LineChart :data="chart3"/>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <Line3DChart :data="chart4"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {computed } from 'vue'
import {useStore} from "vuex"
import { ElButton, ElRow, ElCol } from 'element-plus'
import router from '@/router'
import LineChart from '@/components/Chart/LineChart.vue'
import Line3DChart from '@/components/Chart/Line3DChart.vue'

export default {
    components: {
    ElButton,
    LineChart,
    Line3DChart,
    ElRow, 
    ElCol
  },
  setup(){
    const store = useStore()

    const chart1 = computed(() => {
      const h1 = store.state.layersParams.h1
      const h3 = store.state.layersParams.h3
      const series1 = {
        x: [0, 1000],
        y: [h1, h1],
        mode: 'lines'
      }

      const series2 = {
        x: [0, 700],
        y: [h3, h3],
        mode: 'lines',
        type: 'scatter',
        line: {
          color: 'rgb(255,51,51)',
          width: 2
        }
      }

      const layout = {
        xaxis: {
          range: [0, 1000],
          title: { 
            text: 'X'
          },
          showticklabels: false,
          linecolor: 'rgb(51,153,255)',
          linewidth: 3
        },
        yaxis: {
          range: [0, -2000],
          title: { 
            //text: 'Z',
          },
          showticklabels: true,
          showticksuffix: "last",
          ticksuffix: " Z",
          linecolor: 'rgb(51,153,255)',
          linewidth: 3
        },
        showlegend: false
      }

      return { layout, data: [series1, series2] }
    })

    const chart2 = computed(() => {
      const angle = store.state.layersParams.sidecutAngle
      const series1 = {
        x: [0, 700],
        y: [0, angle],
        mode: 'lines',
        line: {
          color: 'rgb(255,51,51)',
          width: 2
        }
      }

      const layout = {
        xaxis: {
          range: [0, 1000],
          title: { 
            text: 'X'
          },
          showticklabels: false,
          linecolor: 'rgb(51,153,255)',
          linewidth: 3
        },
        yaxis: {
          range: [0, 360],
          title: { 
            //text: 'Z',
          },
          showticklabels: true,
          showticksuffix: "last",
          ticksuffix: " Y",
          linecolor: 'rgb(51,153,255)',
          linewidth: 3
        },
        showlegend: false
      }

      return { layout, data: [series1] }
    })

    const chart3 = computed(() => {
      const h1 = store.state.layersParams.h1
      const h3 = store.state.layersParams.h3
      const series1 = {
        x: [0, 1000],
        y: [h1, h1],
        mode: 'lines'
      }

      const series2 = {
        x: [0, 600],
        y: [h3, h3],
        mode: 'lines',
        type: 'scatter',
        line: {
          color: 'rgb(255,51,51)',
          width: 2
        }
      }

      const layout = {
        xaxis: {
          range: [0, 1000],
          title: { 
            text: 'Y'
          },
          showticklabels: false,
          linecolor: 'rgb(51,153,255)',
          linewidth: 3
        },
        yaxis: {
          range: [0, -2000],
          title: { 
            //text: 'Z',
          },
          showticklabels: true,
          showticksuffix: "last",
          ticksuffix: " Z",
          linecolor: 'rgb(51,153,255)',
          linewidth: 3
        },
        showlegend: false
      }

      return { layout, data: [series1, series2] }
    })

    const chart4 = computed(() => {
      const angle = store.state.layersParams.sidecutAngle
      const series1 = {
        x: [0, 700],
        y: [0, angle],
        z: [0, angle],
        opacity: 1,
        type: 'scatter3d',
        mode: 'lines',
        line: {
          color: 'rgb(255,51,51)',
          width: 6,
          reversescale: false
        }
      }

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

      return { layout, data: [series1] }
    })

    const back =() => {
        router.push('/')
    }

    const report = () => {
      console.log('Отчет');
    }

    return {
      chart1,
      chart2,
      chart3,
      chart4,
      back,
      report
    }
  }
}
</script>

<style>
.report-cont{
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>