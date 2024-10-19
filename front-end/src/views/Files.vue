<template>
  <div class="h-100" id="parent-element">
    <NavBarForMainSites />

    <div
      class="w-100 mt-1 d-flex flex-column justify-content-end align-items-end p-3"
    >
      <h3 class="fs-2 me-4 text-end">
        مرحبا بك في ملفات مادة {{ subjectNameInArabic }}
      </h3>

      <hr class="w-100" />

      <div
        class="d-flex flex-row justify-content-start align-items-start me-4 mt-2 btn-group w-75"
      >
        <button
          class="btn btn-primary d-flex flex-row justify-content-center align-items-center"
          @click="goBack"
        >
          عودة
        </button>
        <router-link
          class="btn btn-primary d-flex flex-row justify-content-center align-items-center"
          :to="{ path: '/createFile/' + tirm + '/' + subject }"
          >اضافة ملف جديد
        </router-link>
      </div>

      <hr class="w-100" />
    </div>

    <div
      class="w-100 mt-1 p-3 d-flex flex-row justify-content-around align-items-center flex-wrap"
    >
      <div v-for="file in userFiles">
        <FileCard :fileId="file._id" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getSubjectNameInArabic } from "@/helpers/GetSubjectInArabic";
import FileCard from "@/components/FileCard.vue";
import NavBarForMainSites from "@/components/NavBarForMainSites.vue";

const router = useRouter();
const route = useRoute();
const userId = ref<string | null>(localStorage.getItem("UserId"));
const subject = ref<string | any>(route.params.subject);
const tirm = ref<string | any>(route.params.tirm);
const subjectNameInArabic = getSubjectNameInArabic(subject.value);
const userFiles = ref<any>([]);

const getFiles = async (): Promise<void> => {
  try {
    const response = await fetch(
      `http://192.168.1.241:3000/files-management/getFiles/${userId.value}/${tirm.value}/${subject.value}`
    );
    const data = await response.json();

    if (data.statusCode >= 200 && data.statusCode < 300) {
      userFiles.value = data.data;
    }
  } catch (err) {
    console.log(err);
  }
};

const goBack = () => {
  router.go(-1);
};

getFiles();
</script>
