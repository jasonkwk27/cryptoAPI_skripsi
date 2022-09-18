import { createRouter, createWebHistory } from 'vue-router'
import HomeAdminView from '../views/admin/HomeAdminView.vue'
import LoginAdminView from '../views/admin/LoginAdminView.vue'
import ApprovedAdminView from '../views/admin/ApprovedAdminView.vue'
import PendingAdminView from '../views/admin/PendingAdminView.vue'
import RegisterUserView from '../views/user/RegisterUserView.vue'
import LoginUserView from '../views/user/LoginUserView.vue'
import HomeUserView from '../views/user/HomeUserView.vue'



const routes = [
  {
    path : '/adm-login',
    name : 'adm-login',
    component : LoginAdminView
  },
  {
    path :'/adm-home',
    name : 'adm-home',
    component : HomeAdminView
  },
  {
    path :'/adm-approved',
    name : 'adm-approved',
    component : ApprovedAdminView
  },
  {
    path :'/adm-pending',
    name : 'adm-pending',
    component : PendingAdminView
  },
  {
    path: '/register',
    name : 'register',
    component : RegisterUserView
  },
  {
    path:'/login',
    name :'login',
    component : LoginUserView
  },{
    path:'/home',
    name :'home',
    component : HomeUserView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
