<template>
  <nav class="navbar navbar-expand-lg bg-primary bg-gradient mb-5">
    <div
      class="container-fluid d-flex flex-column justify-content-center align-items-center w-100"
    >
      <router-link
        :to="{ path: '/main' }"
        class="navbar-brand fs-2 text-white"
        href="#"
      >
        انجازاتي المدرسية
      </router-link>
      <div
        class="d-flex flex-row justify-content-center align-items-center mt-2 w-25"
      >
        <button class="w-100 btn btn-outline-light" @click="logout">
          تسجيل خروج
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();
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

const logout = async (): Promise<void> => {
  store.dispatch("logout");
};
</script>
