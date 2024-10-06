import Login from "@/views/Login.vue";
import Main from "@/views/Main.vue";
import SignUp from "@/views/SignUp.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    name: "SignUp",
    path: "/signup",
    component: SignUp,
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "Main",
    path: "/main",
    component: Main,
    meta: {
      needsToken: localStorage.getItem("JwtToken") ? false : true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.needsToken) {
    next("/login");
  } else {
    next();
  }
});

export default router;
