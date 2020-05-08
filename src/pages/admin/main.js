import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import index from '@/pages/admin/views/index.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
var routes=[
  {
    path: '/',
    name: 'about',
    component:index
  }
]
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#admin')
