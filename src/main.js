// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSlideBar from 'vue-slide-bar'
import {Checkbox, Radio} from 'vue-checkbox-radio'
import Swatches from 'vue-swatches'
import "vue-swatches/dist/vue-swatches.min.css"

Vue.config.productionTip = false
Vue.component('vue-slide-bar', VueSlideBar),
Vue.component('checkbox', Checkbox),
Vue.component('radio', Radio),
Vue.component('swatches', Swatches)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
