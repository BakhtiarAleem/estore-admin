import { createWebHistory, createRouter } from 'vue-router'
import store from './store'

import LoginView from './pages/auth/Login.vue'
import DashboardView from './pages/Dashboard.vue'
import RevenueAnalysisView from './pages/RevenueAnalysis.vue'
import InventoryManagementView from './pages/InventoryManagement.vue'
import ProductRegistrationView from './pages/ProductRegistration.vue'

const routes = [
  { path: '/', name:'login', component: LoginView, meta: { layout: 'auth', requiredAuth: false } },
  { path: '/dashboard', name:'dashboard', component: DashboardView, meta: { layout: 'default', requiredAuth: true } },
    { path: '/revenue-analysis', name:'revenue', component: RevenueAnalysisView, meta: { layout: 'default', requiredAuth: true } },
      { path: '/inventory-management', name:'inventory', component: InventoryManagementView, meta: { layout: 'default', requiredAuth: true } },
        { path: '/product-registration', name:'addProduct', component: ProductRegistrationView, meta: { layout: 'default', requiredAuth: true } },
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

