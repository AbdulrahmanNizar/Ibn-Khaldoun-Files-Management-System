import Login from "@/views/Login.vue";
import Main from "@/views/Main.vue";
import NotFound from "@/views/NotFound.vue";
import SignUp from "@/views/SignUp.vue";
import FirstTirm from "@/views/FirstTirm.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import SecondTirm from "@/views/SecondTirm.vue";
import ThirdTirm from "@/views/ThirdTirm.vue";
import Files from "@/views/Files.vue";
import CreateFile from "@/views/CreateFile.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main",
  },
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
  {
    name: "FirstTirm",
    path: "/firstTirm",
    component: FirstTirm,
    meta: {
      needsToken: localStorage.getItem("JwtToken") ? false : true,
    },
  },
  {
    name: "SecondTirm",
    path: "/secondTirm",
    component: SecondTirm,
    meta: {
      needsToken: localStorage.getItem("JwtToken") ? false : true,
    },
  },
  {
    name: "ThirdTirm",
    path: "/thirdTirm",
    component: ThirdTirm,
    meta: {
      needsToken: localStorage.getItem("JwtToken") ? false : true,
    },
  },
  {
    name: "Files",
    path: "/files/:tirm/:subject",
    component: Files,
    meta: {
      needsToken: localStorage.getItem("JwtToken") ? false : true,
    },
  },
  {
    name: "CreateFile",
    path: "/createFile/:tirm/:subject",
    component: CreateFile,
    meta: {
      needsToken: localStorage.getItem("JwtToken") ? false : true,
    },
  },
  {
    name: "NotFound",
    path: "/:pathName(.*)",
    component: NotFound,
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
