import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/', redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: () => import('./views/Home.vue')
    // TODO 好友、讨论组、频道 管理页面
    // TODO 好友聊天页面
  }, {
    path: '/login',
    name: 'login',
    component: () => import('./views/Login.vue')
  }, {
    path: '/register',
    name: 'register',
    component: () => import('./views/Register.vue')
  }, {
    path: '/theme',
    component: () => import('./views/Theme.vue')
  }, {
    path: '/:pathMatch(.*)*',
    component: () => import('element-plus').then(({ ElEmpty }) => ElEmpty),
    props: { description: '访问到了不存在的页面' }
  }]
})

export default router
