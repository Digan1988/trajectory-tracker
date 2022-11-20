import { nextTick } from 'vue'
import { createWebHashHistory, createRouter } from "vue-router"
import ParamsForm from "@/views/ParamsForm.vue"
import ReportCharts from "@/views/ReportCharts.vue"
import NotFound from "@/views/NotFound"

const routes = [
    {
      path: "/",
      name: "ParamsForm",
      component: ParamsForm
    },
    {
      path: '/report',
      name: "Report",
      component: ReportCharts
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound
    },
  ];

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  router.afterEach(() =>{
    nextTick(() => {
      document.title = "Управление и отслеживание траектории движения гидромоторной насадки"
    })
  })
  
  export default router;