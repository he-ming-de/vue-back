import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Homes from "../views/Homes"
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
        name: "Homes",
        component: Homes,
        meta: {
          title: '首页',
          parentPath: '/index'
        }
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
        path: '/goods/index',
        name: 'goods',
        component: () => import('../views/Goods'),
        meta: {
          title: '商品',
          parentPath: '/goods'
        }
      }
    ]
  },
  {
    path: '',
    component: Home,
    children: [
      {
        path: '/goods/adimd/added',
        name: 'added',
        component: () => import('../views/added/Added'),
        meta: {
          title: '添加商品',
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
        path: '/order/index',
        name: 'order',
        component: () => import('../views/Order'),
        meta: {
          title: '订单',
          parentPath: '/order'
        }
      }
    ]
  },
  {
    path: '',
    component: Home,
    children: [
      {
        path: '/order/man/management',
        name: 'management',
        component: () => import('../views/management/Management'),
        meta: {
          title: '订单管理',
          parentPath: '/order'
        }
      }
    ]
  },
  {
    path: '/marketing',
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
    path: '/Member',
    redirect: '/Member/index'
  },
  {
    path: '',
    component: Home,
    children: [
      {
        path: '/Member/index',
        name: 'Member',
        component: () => import('../views/Member'),
        meta: {
          title: '会员',
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
