import Vue from 'vue'
import VueRouter from 'vue-router'
import Study from '../views/Study/Study.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Study',
    component: Study
  }
]

const router = new VueRouter({
  routes
})

export default router
