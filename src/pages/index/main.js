import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import VueRouter from 'vue-router'
import index from '@/pages/index/views/index'
import '@/icons'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)
Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: index
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#index')