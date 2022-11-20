<template>
  <div class="params-form">
    <div>
      <el-button type="success" plain @click="build">Построить</el-button>
      <el-button plain @click="next">Далее</el-button>
    </div>
    <div class="row">
      <div class="cell">
        <el-form
          label-position="top"
          label-width="100px"
          :model="form"
          style="flex-grow: 1"
        >
          <el-form-item label="Глубина кровли h1, м" required>
            <el-input v-model="form.h1" type="number"/>
          </el-form-item>
          <el-form-item label="Глубина подошвы h2, м" required>
            <el-input v-model="form.h2" type="number"/>
          </el-form-item>
          <el-form-item label="Глубина входа зарезки h3, м" required>
            <el-input v-model="form.h3" type="number"/>
          </el-form-item>
          <el-form-item label="Глубина входа в пласт h4, м" required>
            <el-input v-model="form.h4" type="number"/>
          </el-form-item>
          <el-form-item label="Направление зарезки, °" required>
            <el-input v-model="form.sidecutAngle" type="number"/>
          </el-form-item>
        </el-form>
      </div>
      <div class="cell">
        <LayerChart :params="layerChartParams"/>
      </div>
    </div>
    <div class="row">
      <div class="cell">
        <LineChart />
      </div>
      <div class="cell">
        <el-switch v-model="loadFromSensor"
          class="mb-2"
          active-text="Загрузка с датчика"
          inactive-text="Загрузка архива"
        />
        <el-upload v-if="!loadFromSensor" v-model:file-list="uploadFile" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15">
          <el-button type="primary">Выберите файл</el-button>
        </el-upload>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, computed } from 'vue'
import {useStore} from "vuex"
import router from '@/router'
import { ElButton, ElForm, ElFormItem, ElInput, ElSwitch, ElUpload } from 'element-plus'
import LineChart from '@/components/Chart/LineChart.vue'
import LayerChart from '@/components/Chart/LayerChart.vue'

export default {
  components: {
    ElButton,
    ElForm, 
    ElFormItem, 
    ElInput,
    ElSwitch,
    ElUpload,
    LineChart,
    LayerChart
  },
  setup() {
    const store = useStore()

    const form = reactive({
      h1: store.state.layersParams.h1,
      h2: store.state.layersParams.h2,
      h3: store.state.layersParams.h3,
      h4: store.state.layersParams.h4,
      sidecutAngle: store.state.layersParams.sidecutAngle
    })

    const loadFromSensor = ref(true)
    const uploadFile = ref([])
  
    const build = () => {
      store.commit('setLayersParams', {
          h1: +form.h1,
          h2: +form.h2,
          h3: +form.h3,
          h4: +form.h4,
          sidecutAngle: +form.sidecutAngle
      })
    }

    const next = () => {
      router.push('/report')
    }

    var layerChartParams = computed(() => {
      //console.log(store.state.layersParams);
      return store.state.layersParams
    })

    return {
      form,
      loadFromSensor,
      uploadFile,
      layerChartParams,
      build,
      next
    }
  }
}
</script>

<style>
.params-form{
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