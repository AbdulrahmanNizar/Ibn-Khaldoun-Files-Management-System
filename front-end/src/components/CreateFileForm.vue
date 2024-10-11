<template>
  <div
    class="w-100 d-flex flex-column justify-content-center align-items-center p-3"
  >
    <div
      class="w-100 d-flex flex-column justify-content-end align-items-end p-3"
    >
      <h3 class="mb-2 me-4">انشاء ملف جديد لمادة {{ subjectNameInArabic }}</h3>
      <hr class="w-100" />
    </div>

    <div
      class="w-100 d-flex flex-row justify-content-end align-items-end row mb-2"
    >
      <div
        class="d-flex flex-column justify-content-end align-items-end col-md-4 col-6 p-3 mb-2"
      >
        <label for="fileInput" class="form-label me-2">الملف</label>
        <input
          type="file"
          id="fileInput"
          class="form-control text-end"
          placeholder="الملف"
          @change="uploadFile"
        />
      </div>

      <div
        class="d-flex flex-column justify-content-end align-items-end col-md-4 col-6 p-3 mb-2"
      >
        <label for="fileDescriptionInput" class="form-label me-2"
          >وصف الملف</label
        >
        <input
          type="text"
          id="fileDescriptionInput"
          class="form-control text-end"
          placeholder="وصف الملف"
        />
      </div>

      <div
        class="d-flex flex-column justify-content-end align-items-end col-md-4 col-6 p-3 mb-2"
      >
        <label for="fileTitleInput" class="form-label me-2">عنوان الملف</label>
        <input
          type="text"
          id="fileTitleInput"
          class="form-control text-end"
          placeholder="عنوان الملف"
        />
      </div>

      <hr class="w-100" />
    </div>

    <div
      class="w-100 d-flex flex-row justify-content-center align-items-center mt-2"
    >
      <button class="btn btn-primary w-50" @click="createFile">
        انشاء الملف
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getSubjectNameInArabic } from "@/helpers/GetSubjectInArabic";

const router = useRouter();
const route = useRoute();
const subject = ref<string | any>(route.params.subject);
const subjectNameInArabic = getSubjectNameInArabic(subject.value);
const fileBase64 = ref<string>("");
let file: any;

const uploadFile = (event: any) => {
  file = event.target.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    const readerResult: string | any = reader.result;
    fileBase64.value = readerResult;
  });

  reader.readAsDataURL(file);
};

const createFile = async (): Promise<void> => {};
</script>
