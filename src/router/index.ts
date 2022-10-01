import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BlogPostView from '../views/BlogPostView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  },
  { 
    path: '/blog/:id',
    name: 'blogpost',
    component: () => import('../views/BlogPostView.vue'),
    props: true
  },
  { 
    path: '/blog/categories/:category',
    name: 'blogcategory',
    component: () => import('../views/BlogFilterView.vue'),
    props: true
  },
  { 
    path: '/blog/date/:category',
    name: 'blogdate',
    component: () => import('../views/BlogFilterView.vue'),
    props: true
  }
  // {
  //   path: '/store',
  //   name: 'store',
  //   component: () => import('../views/StoreView.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app')!.scrollIntoView();
  }
})

export default router
