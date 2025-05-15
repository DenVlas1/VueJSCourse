import Vue from 'vue'

// CSS Bootstrap 4 и BootstrapVue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Подключение плагинов
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import App from './App.vue'
Vue.config.productionTip = false

new Vue({ render: h => h(App) }).$mount('#app')
