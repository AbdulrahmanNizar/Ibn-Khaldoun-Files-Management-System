<template>
  <div class="h-100" id="parent-element">
    <NavBarForMainSites />

    <div
      class="w-100 mt-2 d-flex flex-row justify-content-between align-items-center p-3"
    >
      <div class="d-flex flex-row justify-content-start align-items-start ms-5">
        <router-link
          class="btn btn-primary d-flex flex-row justify-content-center align-items-center"
          to=""
          ><i class="bi bi-plus-circle me-1"></i> اضافة ملف جديد
        </router-link>
      </div>

      <h3 class="mb-3 fs-2 me-4 text-end">
        مرحبا بك في ملفات مادة {{ subjectInArabic }}
      </h3>
    </div>

    <hr class="w-100" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getSubjectNameInArabic } from "@/helpers/GetSubjectInArabic";
import NavBarForMainSites from "@/components/NavBarForMainSites.vue";

const router = useRouter();
const route = useRoute();
const subject = ref<string | any>(route.params.subject);
const tirm = ref<string | any>(route.params.tirm);

const subjectInArabic = getSubjectNameInArabic(subject.value);
</script>
