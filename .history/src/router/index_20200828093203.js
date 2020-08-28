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
        path: '/goods/index',
        name: 'Commodity',
        component: () => import('../views/Commodity'),
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
        path: '/goods/Order',
        name: 'Order',
        component: () => import('../views/Marketing'),
        meta: {
          title: '订单',
          parentPath: '/goods'
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
