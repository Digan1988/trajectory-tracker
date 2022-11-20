<template>
  <div class="report-cont">
    <div>
      <el-button plain @click="back">Назад</el-button>
    </div>
    <div class="row">
      <div class="cell">
        <LineChart />
      </div>
      <div class="cell">
        <LineChart />
      </div>
    </div>
    <div class="row">
      <div class="cell">
        <LineChart />
      </div>
      <div class="cell">
        <LineChart />
      </div>
    </div>
  </div>
</template>

<script>
import { ElButton } from 'element-plus'
import router from '@/router'
import LineChart from '@/components/Chart/LineChart.vue'

export default {
    components: {
    ElButton,
    LineChart
  },
  setup(){
    const back =() => {
        router.push('/')
    }
    return {
        back
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
.row {
  display: flex;
  flex-grow: 1;
}
.cell{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 50%;
}
</style>