import { createMemoryHistory, createRouter } from 'vue-router'

import LoginView from './pages/auth/Login.vue'
import DashoardView from './pages/Dashboard.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/dashboard', component: DashoardView },
]

export default createRouter({
  history: createMemoryHistory(),
  routes,
})