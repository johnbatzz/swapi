import Vue from 'vue'
import VueRouter from 'vue-router'
import Public from './public'
Vue.use(VueRouter)

const routes = [...Public]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
