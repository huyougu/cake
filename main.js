import App from './App'
import { myRequest } from './util/api'
// #ifndef VUE3
import Vue from 'vue'
import uview from 'uview-ui'
Vue.use(uview)
import NavCustom from 'components/nav-custom.vue'
Vue.component('nav-custom',NavCustom)
import HomeTitle from 'components/home-title.vue'
Vue.component('home-title',HomeTitle)
Vue.prototype.$myRequest=myRequest
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif