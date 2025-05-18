import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ApiPage from '../pages/ApiPage.vue'
import FormPage from '../pages/FormPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/api', name: 'Api', component: ApiPage },
  { path: '/form', name: 'Form', component: FormPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
