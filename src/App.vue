<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div>
          <div class="app-title">
            <span class="logo">ООО "Геолайн"</span>
            <h1>Управление и отслеживание траектории движения гидромоторной насадки</h1>
          </div>
        </div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { ElHeader, ElMain, ElContainer } from 'element-plus'

export default {
  name: 'App',
  components: {
    ElHeader,
    ElMain,
    ElContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  background-color: white;
}
html, body{
  margin: 0;
  padding: 0;
  height: 100%;
}
.common-layout{
  display: flex;
  height: 100vh;
}
.app-title {
  display: flex;
  align-items: center;
}
.logo{
  padding: 0 10px;
  font-weight: bold;
}
h1{
  color: #330033;
  font-size: 20px;
}
</style>
