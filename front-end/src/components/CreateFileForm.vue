<template>
  <div
    class="w-100 d-flex flex-column justify-content-center align-items-center p-3"
  >
    <div
      class="w-100 d-flex flex-column justify-content-end align-items-end p-3"
    >
      <h3 class="mb-2 me-4 text-end">
        انشاء ملف جديد لمادة {{ subjectNameInArabic }}
      </h3>
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
          v-model="newFileDescription"
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
          v-model="newFileTitle"
        />
      </div>

      <hr class="w-100" />
    </div>

    <div
      class="w-100 d-flex flex-row justify-content-center align-items-center mt-2"
    >
      <button
        class="btn btn-primary w-50"
        @click="createFile"
        :disabled="fieldsAreReady"
      >
        انشاء الملف
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
const subjectNameInArabic = getSubjectNameInArabic(subject.value);
const newFileTitle = ref<string>("");
const newFileDescription = ref<string>("");
const fileBase64 = ref<string>("");
let file: any;

const fieldsAreReady = computed((): boolean => {
  if (
    newFileTitle.value != "" &&
    newFileDescription.value != "" &&
    fileBase64.value != ""
  ) {
    return false;
  } else {
    return true;
  }
});

const uploadFile = (event: any) => {
  file = event.target.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    const readerResult: string | any = reader.result;
    fileBase64.value = readerResult;
  });

  reader.readAsDataURL(file);
};

const createFile = async (): Promise<void> => {
  try {
    if (
      newFileTitle.value != "" &&
      newFileDescription.value != "" &&
      fileBase64.value != ""
    ) {
      const requestOptions: RequestOptionsInterface | any = {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: userId.value,
          fileTitle: newFileTitle.value,
          fileDescription: newFileDescription.value,
          file: fileBase64.value,
          subject: subject.value,
          tirm: tirm.value,
        }),
      };

      const response = await fetch(
        "http://192.168.1.241:3000/files-management/createFile",
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
</script>
