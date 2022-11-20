import { createWebHistory, createRouter } from "vue-router"
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
    history: createWebHistory(),
    routes,
  });
  
  export default router;