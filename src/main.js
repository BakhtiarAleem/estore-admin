import './assets/scss/main.scss'

import { createApp } from 'vue'
import VueApexCharts from 'vue3-apexcharts';
import App from './App.vue'
import router from './routes'
import store from './store'

createApp(App).use(router).use(store).use(VueApexCharts).mount('#app')
