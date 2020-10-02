import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";
import NotificationService from "@/lib/notification.lib";

import PublicLayout from "@/layouts/App";
import AdminLayout from "@/layouts/Admin";
// public component
import Image from "@/view/client/images/index";
import ImageDetail from "@/view/client/images/_id";
import About from "@/components/client/About";
import ServerError from "@/components/client/ServerError";
import Login from "@/components/Login";

/**
 * Authenticated handle
 * ifAuthenticated
 * ifNotAuthenticated
 */

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters["Auth/isLoggedIn"]) {
    next();
    return;
  }
  NotificationService.alreadyLoggin();
  next("/");
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters["Auth/isLoggedIn"]) {
    next();
    return;
  }
  NotificationService.authenticationError();
  next({ path: "/login" });
};

// router define
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
        path: "/login",
        component: Login,
        beforeEnter: ifNotAuthenticated
      },
      {
        path: "/images/:id",
        name: "imageDetail",
        component: ImageDetail,
        beforeEnter: ifAuthenticated
      },
      {
        path: "/about",
        component: About,
        beforeEnter: ifAuthenticated
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
