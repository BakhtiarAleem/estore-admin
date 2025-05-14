import { createWebHistory, createRouter } from 'vue-router'

import LoginView from './pages/auth/Login.vue'
import DashboardView from './pages/Dashboard.vue'

const routes = [
  { path: '/', component: LoginView, meta: { layout: 'auth' } },
  { path: '/dashboard', component: DashboardView, meta: { layout: 'default' } },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})