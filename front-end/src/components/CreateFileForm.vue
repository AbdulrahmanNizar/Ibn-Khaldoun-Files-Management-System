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
import axios from "axios";

const router = useRouter();
const route = useRoute();
const userId = ref<string | any>(localStorage.getItem("UserId"));
const tirm = ref<string | any>(route.params.tirm);
const subject = ref<string | any>(route.params.subject);
const subjectNameInArabic = getSubjectNameInArabic(subject.value);
const newFileTitle = ref<string>("");
const newFileDescription = ref<string>("");
const currentFileId = ref<string>("");
const showSaveUserFileError = ref<boolean>(false);
const saveUserFileError = ref<string>("");
let file: any;
const showRequestError = ref<boolean>(false);
const requestError = ref<string>("");

const fieldsAreReady = computed((): boolean => {
  if (
    newFileTitle.value != "" &&
    newFileDescription.value != "" &&
    file != ""
  ) {
    return false;
  } else {
    return true;
  }
});

const uploadFile = async (event: any): Promise<void> => {
  try {
    file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      `http://192.168.1.241:3000/users-files-management/createUserFile/${userId.value}`,
      formData
    );

    if (response.data.statusCode >= 200 && response.data.statusCode < 300) {
      currentFileId.value = response.data.data.fileId;
    } else {
      showSaveUserFileError.value = true;
      saveUserFileError.value = response.data.message;

      setTimeout(() => {
        showSaveUserFileError.value = false;
      }, 3000);
    }
  } catch (err) {
    console.log(err);
  }
};

const createFile = async (): Promise<void> => {
  try {
    if (
      newFileTitle.value != "" &&
      newFileDescription.value != "" &&
      file != ""
    ) {
      const requestOptions: RequestOptionsInterface | any = {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: userId.value,
          fileTitle: newFileTitle.value,
          fileDescription: newFileDescription.value,
          userFileId: currentFileId.value,
          tirm: tirm.value,
          subject: subject.value,
        }),
      };

      const response = await fetch(
        "http://192.168.1.241:3000/files-management/createFile",
        requestOptions
      );
      const data = await response.json();

      if (data.statusCode >= 200 && data.statusCode < 300) {
        router.push({ path: `/files/${tirm.value}/${subject.value}` });
      } else {
        showRequestError.value = true;
        requestError.value = data.message;
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
