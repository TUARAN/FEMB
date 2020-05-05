import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import VueRouter from 'vue-router'
import list from '@/components/list'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)
Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: list
  },
  {
    path: '/list',
    component: list
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')