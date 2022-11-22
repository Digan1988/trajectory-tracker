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
import {useStore} from "vuex"
import { ElButton, ElRow, ElCol } from 'element-plus'
import router from '@/router'
import useChart from '@/use/useChart'
import use3DChart from '@/use/use3DChart'
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

    const h1 = store.state.layersParams.h1
    const h3 = store.state.layersParams.h3
    const angle = store.state.layersParams.sidecutAngle

    const chart1 = useChart([
        {
          x: [0, 1000],
          y: [h1, h1],
          mode: 'lines'
        },
        {
          x: [0, 700],
          y: [h3, h3],
          mode: 'lines',
          type: 'scatter',
          line: {
            color: 'rgb(255,51,51)',
            width: 2
          }
      }
    ], [0, 1000], [0, -2000], "X", " Z")

    const chart2 = useChart([
      {
        x: [0, 700],
        y: [0, angle],
        mode: 'lines',
        line: {
          color: 'rgb(255,51,51)',
          width: 2
        }
      }
    ], [0, 1000], [0, 360], "X", " Y")

    const chart3 = useChart([
      {
        x: [0, 1000],
        y: [h1, h1],
        mode: 'lines'
      },
      {
        x: [0, 600],
        y: [h3, h3],
        mode: 'lines',
        type: 'scatter',
        line: {
          color: 'rgb(255,51,51)',
          width: 2
        }
      }
    ], [0, 1000], [0, -2000], 'Y', " Z")

    const chart4 = use3DChart([
      {
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