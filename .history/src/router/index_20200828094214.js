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
