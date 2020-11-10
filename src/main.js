import Vue from 'vue'
import { router, store } from '@/adapter'
import App from '@/ui'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
