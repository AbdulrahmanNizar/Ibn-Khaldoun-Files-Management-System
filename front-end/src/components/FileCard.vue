<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 150 }"
    :visibleOnce="{ opacity: 1, y: 0 }"
    class="card text-bg-primary mt-1 shadow"
    style="width: 18rem"
    v-for="fileDetail in fileInfo"
  >
    <img :src="base64OfUserFiles" class="card-img-top" alt="File image" />
    <div class="card-body">
      <h5 class="card-title text-end">{{ fileDetail.fileTitle }}</h5>
      <p class="card-text text-end">
        {{ fileDetail.fileDescription }}
      </p>

      <hr class="w-100" />

      <div class="w-100 btn-group">
        <router-link
          :to="{
            path: '/updateFile/' + tirm + '/' + subject + '/' + fileDetail._id,
          }"
          class="w-100 btn btn-outline-light"
          >تعديل</router-link
        >
        <button
          class="w-100 btn btn-outline-light"
          @click="deleteFile(fileDetail._id)"
        >
          حذف
        </button>
      </div>
      <a
        :href="base64OfUserFiles"
        class="w-100 btn btn-outline-light mt-1"
        download
        >تحميل</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { RequestOptionsInterface } from "@/interfaces/RequestOptionsInterface";
import { ref } from "vue";
import { useRoute } from "vue-router";

const props = defineProps(["fileId"]);
const route = useRoute();
const tirm = ref<string | any>(route.params.tirm);
const subject = ref<string | any>(route.params.subject);
const fileInfo = ref<any>([]);
const base64OfUserFiles = ref<string>("");

const getFileInfo = async (): Promise<void> => {
  try {
    const response = await fetch(
      `http://192.168.1.241:3000/files-management/getFileInfo/${props.fileId}`
    );
    const data = await response.json();

    if (data.statusCode >= 200 && data.statusCode < 300) {
      fileInfo.value.push(data.data);

      const firstPartOfBase64String: string = "data:";
      const secondPartOfBase64String: string = fileInfo.value[0].file.type;
      const lastPartOfBase64FString =
        firstPartOfBase64String +
        secondPartOfBase64String +
        ";base64," +
        fileInfo.value[0].file.buffer;

      base64OfUserFiles.value = lastPartOfBase64FString;
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteFile = async (fileId: string): Promise<void> => {
  try {
    const requestOptions: RequestOptionsInterface | any = {
      method: "DELETE",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fileId: fileId,
      }),
    };

    const response = await fetch(
      "http://192.168.1.241:3000/files-management/deleteFile",
      requestOptions
    );
    const data = await response.json();
    if (data.statusCode >= 200 && data.statusCode < 300) {
      window.location.reload();
    }
  } catch (err) {
    console.log(err);
  }
};

getFileInfo();
</script>
