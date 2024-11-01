import { createRouter, createWebHashHistory, RouteRecordRaw, RouteMeta } from 'vue-router'

// extend RouteMeta interface to include our custom properties
interface CustomRouteMeta extends RouteMeta {
  title?: string;
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/auth/login/loginIndex.vue'),
    meta: { title: 'Login - Photo Diary' } as CustomRouteMeta
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/homeIndex.vue'),
    meta: { title: 'Home - Photo Diary' } as CustomRouteMeta
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  document.title = (to.meta as CustomRouteMeta).title ?? "Photo Diary";
})

export default router
