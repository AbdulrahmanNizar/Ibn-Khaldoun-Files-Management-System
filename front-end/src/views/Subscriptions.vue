<template>
  <div class="h-100" id="parent-element">
    <NavBarForMainSites />

    <div
      class="d-flex flex-row flex-wrap justify-content-center align-items-center mt-5 p-3 w-100"
    >
      <div
        class="d-flex flex-column justify-content-center align-items-center border border-primary border-2 rounded p-3 shadow mt-2"
        style="width: 60%"
      >
        <h3 class="my-2 w-100 text-center">اضافة مشترك جديد</h3>

        <transition name="fadeError">
          <div
            class="alert alert-danger fade show w-100 text-center"
            role="alert"
            v-show="showErrorForAdmin"
          >
            {{ errorForAdmin }}
          </div>
        </transition>

        <hr class="w-100" />

        <div
          class="d-flex flex-column justify-content-start align-items-start w-100"
        >
          <div
            class="d-flex flex-column justify-content-end align-items-end w-100 mt-2"
          >
            <label for="#nationalIdInput" class="form-label me-2"
              >رقم الهاتف</label
            >
            <input
              type="text"
              id="phoneNumberInput"
              placeholder="رقم الهاتف"
              class="form-control text-end"
              v-model="userPhoneNumber"
            />
          </div>

          <div
            class="w-100 d-flex flex-row justify-content-center align-items-center mt-4"
          >
            <button
              class="btn btn-primary w-75"
              :disabled="theFieldsAreReady"
              @click="addNewSubscriber"
            >
              اضافة
            </button>
          </div>
        </div>
      </div>

      <transition name="fadeShow">
        <div
          class="p-3 bg-primary position-absolute top-50 end-50 rounded"
          style="width: 3%; height: 6%"
          v-show="showLoader"
        >
          <div class="spinner-border text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import NavBarForMainSites from "@/components/NavBarForMainSites.vue";
import { RequestOptionsInterface } from "@/interfaces/RequestOptionsInterface";

const userId = ref<string | null>(localStorage.getItem("UserId"));
const showLoader = ref<boolean>(false);
const userPhoneNumber = ref<string>("");
const showErrorForAdmin = ref<boolean>(false);
const errorForAdmin = ref<string>("");

const theFieldsAreReady = computed((): boolean => {
  if (userPhoneNumber.value != "") {
    return false;
  } else {
    return true;
  }
});

const addNewSubscriber = async (): Promise<void> => {
  try {
    if (userId.value == "6703e1c2a299c9695ba7b2e7") {
      const requestOptions: RequestOptionsInterface | any = {
        method: "PATCH",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userPhoneNumber: userPhoneNumber.value,
        }),
      };

      const response = await fetch(
        "http://192.168.1.241:3000/subscription-management/updateUserSubscription",
        requestOptions
      );
      const data = await response.json();
      if (data.statusCode >= 200 && data.statusCode < 300) {
        console.log("Done!");
      }
    } else {
      showErrorForAdmin.value = true;
      errorForAdmin.value = "لا يمكنك اجراء هذه العملية";

      setTimeout(() => {
        showErrorForAdmin.value = false;
      }, 3000);
    }
  } catch (err) {
    console.log(err);
  }
};
</script>
