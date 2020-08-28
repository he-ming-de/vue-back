import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: "",
    component: Home,
    children: [
      {
        path: "/index",
        name: "Home",
        component: Home,
      }
    ]
  },
  {
    path: '/goods',
    redirect: '/goods/index'
  },
  {
    path: '',
    component: Home,
    children: [
      {
        path: '/Goods/index',
        name: 'Goods',
        component: () => import('../views/Goods'),
        meta: {
          title: '商品',
          parentPath: '/goods'
        }
      }
    ]
  },
  {
    path: '/order',
    redirect: '/order/index'
  },
  {
    path: '',
    component: Home,
    children: [
      {
        path: '/Order/index',
        name: 'Order',
        component: () => import('../views/Order'),
        meta: {
          title: '订单',
          parentPath: '/Order'
        }
      }
    ]
  },
  {
    path: '/Marketing',
    redirect: '/Marketing/index'
  },
  {
    path: '',
    component: Home,
    children: [
      {
        path: '/Marketing/index',
        name: 'Marketing',
        component: () => import('../views/Marketing'),
        meta: {
          title: '营销',
          parentPath: '/Marketing'
        }
      }
    ]
  },
  {
    path: '/Setting',
    redirect: '/Setting/index'
  },
  {
    path: '',
    component: Home,
    children: [
      {
        path: '/Setting/index',
        name: 'Setting',
        component: () => import('../views/Setting'),
        meta: {
          title: '设置',
          parentPath: '/Setting'
        }
      }
    ]
  },
  {
    path: '/System',
    redirect: '/System/index'
  },
  {
    path: '',
    component: Home,
    children: [
      {
        path: '/System/index',
        name: 'System',
        component: () => import('../views/System'),
        meta: {
          title: '系统',
          parentPath: '/System'
        }
      }
    ]
  },
  {
    path: '/System',
    redirect: '/System/index'
  },
  {
    path: '',
    component: Home,
    children: [
      {
        path: '/System/index',
        name: 'Member',
        component: () => import('../views/Member'),
        meta: {
          title: '系统',
          parentPath: '/Member'
        }
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
