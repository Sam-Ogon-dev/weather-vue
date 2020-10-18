import Vue from 'vue'
import VueRouter from 'vue-router'
import Forecast from "../components/Forecast";
import DayInDetail from "../components/DayInDetail";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Forecast,
    exact: true
  },
  {
    path: '/:index',
    name: "DayInDetail",
    component: DayInDetail,
    exact: true,
    props: true
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
