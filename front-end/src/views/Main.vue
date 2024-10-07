<template>
  <div class="h-100" id="parent-element">
    <NavBarForMainSites />

    <div
      class="mt-4 w-100 d-flex flex-column justify-content-end align-items-end p-3"
    >
      <h3 class="mb-0 fs-2 me-4 text-end">مرحبا {{ username }}</h3>
      <p class="fs-4 me-4 my-3 text-end">
        يمكنك هنا اختيار الفصل الذي تريد ادارة ملفاتك فيه
      </p>

      <hr class="w-100" />
    </div>

    <div
      class="w-100 row d-flex flex-md-row flex-column justify-content-around align-items-center p-3 mt-3"
    >
      <router-link
        :to="{ path: '/firstTirm' }"
        class="btn btn-primary btn-lg p-2 col-md-4 col-6 mt-3 tirms-buttons d-md-none d-block"
      >
        الفصل الدراسي الاول
      </router-link>

      <router-link
        to=""
        class="btn btn-primary btn-lg p-2 col-md-4 col-6 mx-1 mt-3 tirms-buttons"
      >
        الفصل الدراسي الثاني
      </router-link>

      <router-link
        :to="{ path: '/firstTirm' }"
        class="btn btn-primary btn-lg p-2 col-md-4 col-6 mt-3 tirms-buttons d-md-block d-none"
      >
        الفصل الدراسي الاول
      </router-link>

      <router-link
        to=""
        class="btn btn-primary btn-lg p-2 col-md-4 col-6 mt-3 tirms-buttons"
      >
        الفصل الدراسي الثالث
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavBarForMainSites from "@/components/NavBarForMainSites.vue";

const username = ref<string | null>(localStorage.getItem("Username"));
</script>

<style>
.tirms-buttons {
  transition: 0.8s ease;
}

.tirms-buttons:hover {
  box-shadow: 5px 1px 50px blue;
}

#parent-element {
  background-image: linear-gradient(to right bottom, white, rgb(234, 142, 240));
}
</style>
