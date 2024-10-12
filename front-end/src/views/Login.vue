<template>
  <div class="h-100">
    <NavBarForRigestration />

    <div
      class="d-flex flex-row flex-wrap justify-content-around align-items-center mt-5 p-3 w-100"
    >
      <img
        src="@/images/tiny-people-carrying-key.avif"
        alt="people carrying a login key"
        class="img-fluid rounded"
      />

      <div
        class="d-flex flex-column justify-content-center align-items-center border border-primary border-2 rounded p-3 shadow mt-2"
        style="width: 60%"
      >
        <h3 class="my-2 w-100 text-center">تسجيل الدخول</h3>
        <transition name="fadeError">
          <div
            class="alert alert-danger w-100 text-center mt-2"
            role="alert"
            v-if="showErrorForInvalidPassword"
          >
            {{ errorForInvalidPassword }}
          </div>
        </transition>
        <transition name="fadeError">
          <div
            class="alert alert-danger w-100 text-center mt-2"
            role="alert"
            v-if="showErrorForLogin"
          >
            {{ errorForLogin }}
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
              >رقم الهوية</label
            >
            <input
              type="text"
              id="nationalIdInput"
              placeholder="رقم الهوية"
              class="form-control text-end"
              v-model="userNationalId"
            />
          </div>

          <div
            class="d-flex flex-column justify-content-end align-items-end w-100 mt-2"
          >
            <label for="#passwordInput" class="form-label me-2"
              >كلمة المرور</label
            >
            <input
              type="password"
              id="passwordInput"
              placeholder="كلمة المرور"
              class="form-control text-end"
              v-model="password"
            />
          </div>

          <div
            class="w-100 d-flex flex-row justify-content-center align-items-center mt-4"
          >
            <button
              class="btn btn-primary w-75"
              :disabled="theFieldsAreReady"
              @click="login"
            >
              تسجيل الدخول
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
import { RequestOptionsInterface } from "@/interfaces/RequestOptionsInterface";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import NavBarForRigestration from "@/components/NavBarForRigestration.vue";

const router = useRouter();
const password = ref<string>("");
const userNationalId = ref<string>("");
const showErrorForInvalidPassword = ref<boolean>(false);
const errorForInvalidPassword = ref<string>("");
const showErrorForLogin = ref<boolean>(false);
const errorForLogin = ref<string>("");
const showLoader = ref<boolean>(false);

onMounted((): void => {
  if (localStorage.getItem("JwtToken")) {
    router.push({ path: "/main" });
  }
});

const theFieldsAreReady = computed((): boolean => {
  if (password.value != "" && userNationalId.value != "") {
    return false;
  } else {
    return true;
  }
});

const login = async (): Promise<void> => {
  try {
    if (password.value.length > 6) {
      const requestOptions: RequestOptionsInterface | any = {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userNationalId: userNationalId.value,
          password: password.value,
        }),
      };

      showLoader.value = true;
      const response = await fetch(
        "http://192.168.1.241:3000/registration/login",
        requestOptions
      );
      const data = await response.json();
      if (data.statusCode >= 200 && data.statusCode < 300) {
        showLoader.value = false;

        localStorage.setItem("UserId", data.data.userId);
        localStorage.setItem("Username", data.data.username);
        localStorage.setItem("JwtToken", data.data.token);

        router.push({ path: "/main" });
        window.location.reload();
      } else {
        showLoader.value = false;

        showErrorForLogin.value = true;
        errorForLogin.value = data.message;

        setTimeout(() => {
          showErrorForLogin.value = false;
        }, 3000);
      }
    } else {
      showErrorForInvalidPassword.value = true;
      errorForInvalidPassword.value =
        "يجب ان تكون كلمة المرور على الاقل 7 احرف";

      setTimeout(() => {
        showErrorForInvalidPassword.value = false;
      }, 3000);
    }
  } catch (err) {
    console.log(err);
  }
};
</script>

<style>
.fadeError-enter-from,
.fadeShow-enter-from {
  opacity: 0;
}

.fadeError-enter-to,
.fadeShow-enter-to {
  opacity: 1;
}

.fadeError-enter-active,
.fadeShow-enter-active {
  transition: all 0.7s ease;
}

.fadeError-leave-from,
.fadeShow-leave-from {
  opacity: 1;
}

.fadeError-leave-to,
.fadeShow-leave-to {
  opacity: 0;
}

.fadeError-leave-active,
.fadeShow-leave-active {
  transition: all 0.7s ease;
}
</style>
