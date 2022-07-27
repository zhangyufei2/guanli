import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/components/Login.vue'),
  },
  {
    path: '/login',
    component: () => import('@/components/Login.vue'),
  },
  {
    path: '/find',
    component: () => import('@/components/Find.vue'), meta: {
      required: false
    },
  },
  {
    path: '/home',
    redirect: '/home/realtime',
  },
  {
    path: '/home',
    component: () => import('@/views/Home.vue'),
    meta: {
      required: true
    },
    children: [
      {
        path: 'customer',
        component: () => import('@/views/dataCenter/Customer.vue'),
        meta: {
          required: true
        },
      },
      {
        path: 'realtime',
        component: () => import('@/views/dataCenter/RealTimes.vue'),
        meta: {
          required: true
        },
      },
      {
        path: 'goodsall',
        component: () => import('@/views/goods/AllGoods.vue'),
        meta: {
          required: true
        },
      },
      {
        path: 'baby',
        component: () => import('@/views/goods/BabyBottle.vue'),
        meta: {
          required: true
        },
      },
      {
        path: 'goodsnew',
        component: () => import('@/views/goods/NewGoods.vue'),
        meta: {
          required: true
        },
      },
      {
        path: 'orderall',
        component: () => import('@/views/order/AllOrders.vue'),
        meta: {
          required: true
        },
      },
      {
        path: 'canceled',
        component: () => import('../views/order/Canceled.vue'),
        meta: {
          required: true
        },
      },
      {
        path: 'drop',
        component: () => import('@/views/order/DropShipping.vue'),
        meta: {
          required: true
        },
      },
      {
        path: 'shipped',
        component: () => import('@/views/order/Shipped.vue'),
        meta: {
          required: true
        },
      },
      {
        path: 'unpaid',
        component: () => import('@/views/order/UnPaid.vue'),
        meta: {
          required: true
        },
      },

      {
        path: 'coupons',
        component: () => import('@/views/promotion/Coupons.vue'),
        meta: {
          required: true
        },
      },
      {
        path: 'new',
        component: () => import('@/views/promotion/NewCoupons.vue'),
        meta: {
          required: true
        },
      },
      {
        path: 'news',
        component: () => import('@/views/promotion/NewSeckill.vue'),
        meta: {
          required: true
        },
      },
      {
        path: 'seckill',
        component: () => import('@/views/promotion/Seckill.vue'),
        meta: {
          required: true
        },
      },
    ]
  },
  {
    path: '/',
    redirect: 'login',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//全局拦截
router.beforeEach((to, from, next) => {
  if (to.meta.required) {
    if (sessionStorage.getItem("token")) {
      next()
    } else {
      // next('/login')
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
});
export default router
