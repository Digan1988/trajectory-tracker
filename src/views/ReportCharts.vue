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
//import {useStore} from "vuex"
import { ElButton, ElRow, ElCol } from 'element-plus'
import router from '@/router'
import useChart from '@/use/useChart'
import use3DChart from '@/use/use3DChart'
import LineChart from '@/components/Chart/LineChart.vue'
import Line3DChart from '@/components/Chart/Line3DChart.vue'

import mock1 from '@/mock/1.json'
import mock2 from '@/mock/2.json'
import mock3 from '@/mock/3.json'
import mock4 from '@/mock/4.json'

export default {
    components: {
    ElButton,
    LineChart,
    Line3DChart,
    ElRow, 
    ElCol
  },
  setup(){
    //const store = useStore()

    //const h1 = store.state.layersParams.h1
    //const h3 = store.state.layersParams.h3
    //const angle = store.state.layersParams.sidecutAngle

    const chart1 = useChart([
        /*{
          x: [0, 20],
          y: [h1, h1],
          mode: 'lines'
        },*/
        {
          x: mock1.x,
          y: mock1.y,
          mode: 'lines',
          type: 'scatter',
          line: {
            color: 'rgb(255,51,51)',
            width: 2
          }
      }
    ], [Math.min(mock1.x), Math.min(mock1.x)], [Math.min(mock1.y), Math.min(mock1.y)], "X", " Z")

    const chart2 = useChart([
      {
        x: mock2.x,
        y: mock2.y,
        mode: 'lines',
        line: {
          color: 'rgb(255,51,51)',
          width: 2
        }
      }
    ], [Math.min(mock2.x), Math.min(mock2.x)], [Math.min(mock2.y), Math.min(mock2.y)], "X", " Y")

    const chart3 = useChart([
      /*{
        x: [0, 1000],
        y: [h1, h1],
        mode: 'lines'
      },*/
      {
        x: mock3.x,
        y: mock3.y,
        mode: 'lines',
        type: 'scatter',
        line: {
          color: 'rgb(255,51,51)',
          width: 2
        }
      }
    ], [Math.min(mock3.x), Math.min(mock3.x)], [Math.min(mock3.y), Math.min(mock3.y)], "X", " Y")

    const chart4 = use3DChart([
      {
        x: mock4.x,
        y: mock4.y,
        z: mock4.z,
        opacity: 1,
        type: 'scatter3d',
        mode: 'lines',
        line: {
          color: 'rgb(255,51,51)',
          width: 6,
          reversescale: false
        }
      }
    ])

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