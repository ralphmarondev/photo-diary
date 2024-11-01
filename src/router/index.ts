import { createRouter, createWebHistory, RouteRecordRaw, RouteMeta } from 'vue-router'

// extend RouteMeta interface to include our custom properties
interface CustomRouteMeta extends RouteMeta {
  title?: string;
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/auth/login/loginIndex.vue'),
    meta: { title: 'Login - Photo Diary' } as CustomRouteMeta
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  document.title = (to.meta as CustomRouteMeta).title ?? "Photo Diary";
})

export default router
