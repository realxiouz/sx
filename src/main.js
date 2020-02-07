import Vue from 'vue'
import App from './App'
import { http } from '@/common/js/request'
import NavBar from './components/nav-bar'

import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$http = http

import '@/common/js/prototype'

Vue.component('NavBar', NavBar)

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
