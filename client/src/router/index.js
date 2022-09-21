import { createRouter, createWebHistory } from 'vue-router'
import HomeAdminView from '../views/admin/HomeAdminView.vue'
import ApprovedAdminView from '../views/admin/ApprovedAdminView.vue'
import PendingAdminView from '../views/admin/PendingAdminView.vue'
import RegisterUserView from '../views/user/RegisterUserView.vue'
import LoginView from '../views/user/LoginView.vue'
import HomeUserView from '../views/user/HomeUserView.vue'
import PersonalInfoView from '../views/user/PersonalInfoView.vue'
import AddApiView from '../views/user/AddApiView.vue'
import ApiInfoView from '../views/user/ApiInfoView.vue'



const routes = [
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
    component : LoginView
  },
  {
    path:'/home',
    name :'home',
    component : HomeUserView
  },
  {
    path:'/personal-info',
    name :'personal-info',
    component : PersonalInfoView
  },
  {
    path:'/add-api',
    name :'add-api',
    component : AddApiView
  },
  {
    path:'/api-info',
    name :'api-info',
    component : ApiInfoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
