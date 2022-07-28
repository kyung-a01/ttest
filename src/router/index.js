import { createRouter, createWebHistory } from 'vue-router'
import main from '../views/2_main.vue'
import mypage from '../views/2_mypage.vue'
import cafe from '../views/2_cafe.vue'
import login from '../views/2_login.vue'
import sub1 from '../views/2_sub1.vue'
import sub2 from '../views/2_sub2.vue'
 


const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: login
  },
  {
    path: '/main',
    name: 'main',
    component: main
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: mypage
  },
  {
    path: '/cafe',
    name: 'cafe',
    component: cafe
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/sub1',
    name: 'sub1',
    component: sub1
  },
  {
    path: '/sub2',
    name: 'sub2',
    component: sub2
  }

 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
