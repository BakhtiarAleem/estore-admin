import { createWebHistory, createRouter } from 'vue-router'
import store from './store'

import LoginView from './pages/auth/Login.vue'
import DashboardView from './pages/Dashboard.vue'
import RevenueAnalysisView from './pages/RevenueAnalysis.vue'
import InventoryManagementView from './pages/InventoryManagement.vue'
import ProductRegistrationView from './pages/ProductRegistration.vue'

const routes = [
  { path: '/', name:'login', component: LoginView, meta: { layout: 'auth', requiredAuth: false, title: 'Login' } },
  { path: '/dashboard', name:'dashboard', component: DashboardView, meta: { layout: 'default', requiredAuth: true, title: 'Dashboard' } },
    { path: '/revenue-analysis', name:'revenue', component: RevenueAnalysisView, meta: { layout: 'default', requiredAuth: true, title: 'Revenue Analysis' } },
      { path: '/inventory-management', name:'inventory', component: InventoryManagementView, meta: { layout: 'default', requiredAuth: true, title: 'Inventory Management' } },
        { path: '/product-registration', name:'addProduct', component: ProductRegistrationView, meta: { layout: 'default', requiredAuth: true, title: 'Product Registration' } },
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

