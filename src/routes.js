import { createWebHistory, createRouter } from 'vue-router'
import store from './store'

import LoginView from './pages/auth/Login.vue'
import DashboardView from './pages/Dashboard.vue'

const routes = [
  { path: '/', name:'login', component: LoginView, meta: { layout: 'auth', requiredAuth: false } },
  { path: '/dashboard', name:'dashboard', component: DashboardView, meta: { layout: 'default', requiredAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated
  if(to.meta.requiredAuth && !isAuthenticated){
    next('/')
  }
  else if(to.path === '/' && isAuthenticated){
    next('/dashboard')
  }
  else{
    next()
  }
})

export default router

