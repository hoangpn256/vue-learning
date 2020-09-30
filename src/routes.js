import Vue from 'vue'
import VueRouter from 'vue-router';

import PublicLayout from "@/layouts/App";
import AdminLayout from "@/layouts/Admin";
// public component
import Image from "@/view/client/images/index";
import ImageDetail from "@/view/client/images/_id";
import About from "@/components/client/About";
import ServerError from "@/components/client/ServerError";
//admin component
const routes = [
  {
    path: "/",
    name: "home",
    component: PublicLayout,
    children: [
      {
        path: "/",
        component: Image
      },
      {
        path: "/images/:id",
        name: 'imageDetail',
        component: ImageDetail
      },
      {
        path: "/about",
        component: About
      },
      {
        path: "/500",
        component: ServerError
      }
    ]
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminLayout
  }
];

Vue.use(VueRouter);

const router = new VueRouter({
  linkExactActiveClass: "active",
  mode: "history",
  routes
});

export default router;
