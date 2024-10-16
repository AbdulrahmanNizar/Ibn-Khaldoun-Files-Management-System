<template>
  <div
    class="w-100 d-flex flex-column justify-content-center align-items-center p-3"
  >
    <div
      class="w-100 d-flex flex-column justify-content-end align-items-end p-3"
    >
      <h3 class="mb-2 me-4 text-end">
        تعديل على ملف في مادة {{ subjectNameInArabic }}
      </h3>

      <button
        class="btn btn-primary btn-sm w-25 me-2 mt-1 d-flex flex-row justify-content-center align-items-center"
        @click="goBack"
      >
        عودة
      </button>

      <hr class="w-100" />
    </div>

    <div
      class="w-100 d-flex flex-row justify-content-end align-items-end row mb-2"
    >
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
          v-model="updatedFileDescription"
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
          v-model="updatedFileTitle"
        />
      </div>

      <hr class="w-100" />
    </div>

    <div
      class="w-100 d-flex flex-row justify-content-center align-items-center mt-2"
    >
      <button
        class="btn btn-primary w-50"
        @click="updateFile"
        :disabled="fieldsAreReady"
      >
        تعديل
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getSubjectNameInArabic } from "@/helpers/GetSubjectInArabic";
import { RequestOptionsInterface } from "@/interfaces/RequestOptionsInterface";

const router = useRouter();
const route = useRoute();
const userId = ref<string | null>(localStorage.getItem("UserId"));
const tirm = ref<string | any>(route.params.tirm);
const subject = ref<string | any>(route.params.subject);
const fileId = ref<string | any>(route.params.fileId);
const subjectNameInArabic = getSubjectNameInArabic(subject.value);
const updatedFileTitle = ref<string>("");
const updatedFileDescription = ref<string>("");

const fieldsAreReady = computed((): boolean => {
  if (updatedFileTitle.value != "" && updatedFileDescription.value != "") {
    return false;
  } else {
    return true;
  }
});

const updateFile = async (): Promise<void> => {
  try {
    if (updatedFileTitle.value != "" && updatedFileDescription.value != "") {
      const requestOptions: RequestOptionsInterface | any = {
        method: "PATCH",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileId: fileId.value,
          fileTitle: updatedFileTitle.value,
          fileDescription: updatedFileDescription.value,
        }),
      };

      const response = await fetch(
        "http://192.168.1.241:3000/files-management/updateFile",
        requestOptions
      );
      const data = await response.json();
      if (data.statusCode >= 200 && data.statusCode < 300) {
        router.push({ path: `/files/${tirm.value}/${subject.value}` });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const goBack = () => {
  router.go(-1);
};
</script>
