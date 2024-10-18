<template>
  <div
    class="rounded p-3 position-absolute d-flex flex-column justify-content-center align-items-center bg-primary bg-gradient text-white"
    style="width: 64%; top: 30%; left: 18%; z-index: 1"
  >
    <h3 class="my-2 fw-bold">اشتراك سنوي</h3>
    <hr class="text-white w-100" />

    <h4>99.99 ريال/سنة</h4>
    <hr class="text-white w-100" />

    <h5 class="mb-1">الدفع عن طريق</h5>
    <h5>STC Pay</h5>

    <hr class="text-white w-100" />

    <h5>الرقم: 0563968814</h5>
    <hr class="text-white w-100" />

    <button
      class="btn btn-outline-light w-50 mt-3"
      @click="closeSubscriptionCard"
    >
      اغلاق
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();

const closeSubscriptionCard = (): void => {
  store.commit("showSubscriptionCard");
};
</script>
