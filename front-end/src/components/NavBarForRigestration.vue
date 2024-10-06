<template>
  <nav class="navbar navbar-expand-lg bg-primary bg-gradient mb-5">
    <div
      class="container-fluid d-flex flex-column justify-content-center align-items-center w-100"
    >
      <a class="navbar-brand fs-2 text-white" href="#"> انجازاتي المدرسية </a>
      <div
        class="d-flex flex-row justify-content-center align-items-center btn-group mt-2 w-25"
      >
        <router-link
          v-if="loginPage"
          :to="{ path: '/login' }"
          class="btn btn-light"
          >تسجيل دخول</router-link
        >
        <router-link
          v-else="loginPage"
          :to="{ path: '/login' }"
          class="btn btn-outline-light"
          >تسجيل دخول</router-link
        >
        <router-link
          v-if="createAccountPage"
          :to="{ path: '/signup' }"
          class="btn btn-light"
          >انشاء حساب</router-link
        >
        <router-link
          v-else="createAccountPage"
          :to="{ path: '/signup' }"
          class="btn btn-outline-light"
          >انشاء حساب</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const createAccountPage = ref<boolean>(false);
const loginPage = ref<boolean>(false);

onMounted(() => {
  if (route.path == "/signup") {
    createAccountPage.value = true;
    loginPage.value = false;
  } else if (route.path == "/login") {
    loginPage.value = true;
    createAccountPage.value = false;
  }
});
</script>
