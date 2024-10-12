<template>
  <div
    class="card text-bg-primary"
    style="width: 18rem"
    v-for="fileDetail in fileInfo"
  >
    <img
      :src="fileDetail.file"
      class="card-img-top"
      alt="File image"
      style="cursor: pointer; z-index: 0"
      @click="showImage"
    />
    <div class="card-body">
      <h5 class="card-title text-end">{{ fileDetail.fileTitle }}</h5>
      <p class="card-text text-end">
        {{ fileDetail.fileDescription }}
      </p>
    </div>

    <img
      :src="fileDetail.file"
      alt="File image"
      v-if="showBigImage"
      style="
        cursor: pointer;
        width: 178%;
        right: -36%;
        cursor: pointer;
        z-index: 1;
        top: -35%;
      "
      class="position-absolute rounded"
      @click="showImage"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const props = defineProps(["fileId"]);
const route = useRoute();
const tirm = route.params.tirm;
const subject = route.params.subject;
const fileInfo = ref<any>([]);
const showBigImage = ref<boolean>(false);

const getFileInfo = async (): Promise<void> => {
  try {
    const response = await fetch(
      `http://192.168.1.241:3000/files-management/getFileInfo/${props.fileId}`
    );
    const data = await response.json();

    if (data.statusCode >= 200 && data.statusCode < 300) {
      fileInfo.value.push(data.data);
    }
  } catch (err) {
    console.log(err);
  }
};

const showImage = () => {
  showBigImage.value = !showBigImage.value;
};

getFileInfo();
</script>
