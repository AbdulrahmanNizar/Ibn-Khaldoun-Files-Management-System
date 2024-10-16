<template>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const JwtToken = ref<string | null>(localStorage.getItem("JwtToken"));

onMounted(async (): Promise<void> => {
  try {
    if (route.path != "/login" && route.path != "/signup") {
      if (JwtToken.value != "") {
        const requestOptions: any = {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: JwtToken.value,
          }),
        };

        const response = await fetch(
          "http://192.168.1.241:3000/registration/validateTheAuthToken",
          requestOptions
        );
        const data = await response.json();
        if (data.name == "JsonWebTokenError") {
          localStorage.clear();
          router.push({ path: "/login" });
        }
      } else {
        localStorage.clear();
        router.push({ path: "/login" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");

#app {
  font-family: "Rubik";
  height: 100vh;
  box-sizing: border-box;
  scroll-behavior: smooth;
  direction: ltr;
}

.route-enter-from {
  opacity: 0;
}

.route-enter-to {
  opacity: 1;
}

.route-enter-active {
  transition: all 0.7s ease;
}

.route-leave-from {
  opacity: 1;
}

.route-leave-to {
  opacity: 0;
}

.route-leave-active {
  transition: all 0.7s ease;
}

.fadeError-enter-from {
  opacity: 0;
}

.fadeError-enter-to {
  opacity: 1;
}

.fadeError-enter-active {
  transition: all 0.7 ease;
}

.fadeError-leave-from {
  opacity: 1;
}

.fadeError-leave-to {
  opacity: 0;
}

.fadeError-leave-active {
  transition: all 0.7 ease;
}
</style>
