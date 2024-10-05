<template>
  <div class="h-100">
    <nav class="navbar navbar-expand-lg bg-primary bg-gradient mb-5">
      <div
        class="container-fluid d-flex flex-column justify-content-between align-items-center w-100"
      >
        <a class="navbar-brand fs-2 text-white" href="#">انجازاتي المدرسية</a>
        <div
          class="d-flex flex-row justify-content-center align-items-center btn-group mt-2 w-25"
        >
          <router-link to="" class="btn btn-outline-light"
            >انشاء حساب</router-link
          >
          <router-link to="" class="btn btn-outline-light"
            >تسجيل دخول</router-link
          >
        </div>
      </div>
    </nav>

    <div
      class="d-flex flex-row flex-wrap justify-content-around align-items-center mt-5 p-3 w-100"
    >
      <img
        src="@/images/tiny-people-carrying-key.avif"
        alt="people carrying a login key"
        class="img-fluid"
      />

      <div
        class="d-flex flex-column justify-content-center align-items-center border border-primary rounded p-3"
        style="width: 60%"
      >
        <h3 class="mb-0 mt-2 w-100 text-center">انشاء حساب</h3>
        <hr class="w-100" />

        <div
          class="d-flex flex-column justify-content-start align-items-start w-100"
        >
          <div
            class="d-flex flex-column justify-content-end align-items-end w-100 mt-2"
          >
            <label for="#usernameInput" class="form-label me-2"
              >اسم المستخدم</label
            >
            <input
              type="text"
              id="usernameInput"
              placeholder="اسم المستخدم"
              class="form-control text-end"
              v-model="username"
            />
          </div>

          <div
            class="d-flex flex-column justify-content-end align-items-end w-100 mt-2"
          >
            <label for="#emailInput" class="form-label me-2"
              >الايميل (اختياري)</label
            >
            <input
              type="email"
              id="emailInput"
              placeholder="الايميل"
              class="form-control text-end"
              v-model="email"
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
            <label for="#phoneNumberInput" class="form-label me-2"
              >رقم الجوال</label
            >
            <input
              type="text"
              id="phoneNumberInput"
              placeholder="رقم الجوال"
              class="form-control text-end"
              v-model="userPhoneNumber"
            />
          </div>

          <div
            class="d-flex flex-column justify-content-end align-items-end w-100 mt-2"
          >
            <label for="#gradeSelector" class="form-label me-2"
              >اختيار المرحلة</label
            >
            <select
              class="form-select text-end"
              id="gradeSelector"
              v-model="userGrade"
            >
              <option value="اختيار المرحلة" disabled selected>
                اختيار المرحلة
              </option>
              <option value="الاول ابتدائي">الاول ابتدائي</option>
              <option value="الثاني ابتدائي">الثاني ابتدائي</option>
              <option value="الثالث ابتدائي">الثالث ابتدائي</option>
              <option value="الرابع ابتدائي">الرابع ابتدائي</option>
              <option value="الخامس ابتدائي">الخامس ابتدائي</option>
              <option value="السادس ابتدائي">السادس ابتدائي</option>
              <option value="الاول متوسط">الاول متوسط</option>
              <option value="الثاني متوسط">الثاني متوسط</option>
              <option value="الثالث متوسط">الثالث متوسط</option>
              <option value="الاول ثانوي">الاول ثانوي</option>
              <option value="الثاني ثانوي">الثاني ثانوي</option>
              <option value="الثالث ثانوي">الثالث ثانوي</option>
            </select>
          </div>

          <div
            class="d-flex flex-column justify-content-end align-items-end w-100 mt-2"
          >
            <label for="#classSelector" class="form-label me-2"
              >اختيار الصف</label
            >
            <select
              class="form-select text-end"
              id="classSelector"
              v-model="userClass"
            >
              <option value="اختيار الصف" selected disabled>اختيار الصف</option>
              <option v-show="firstGrade" value="1/1">1/1</option>
              <option v-show="firstGrade" value="1/2">1/2</option>
              <option v-show="firstGrade" value="1/3">1/3</option>
              <option v-show="secondGrade" value="2/1">2/1</option>
              <option v-show="secondGrade" value="2/2">2/2</option>
              <option v-show="secondGrade" value="2/3">2/3</option>
              <option v-show="thirdGrade" value="3/1">3/1</option>
              <option v-show="thirdGrade" value="3/2">3/2</option>
              <option v-show="thirdGrade" value="3/3">3/3</option>
              <option v-show="forthGrade" value="4/1">4/1</option>
              <option v-show="forthGrade" value="4/2">4/2</option>
              <option v-show="forthGrade" value="4/3">4/3</option>
              <option v-show="fifthGrade" value="5/1">5/1</option>
              <option v-show="fifthGrade" value="5/2">5/2</option>
              <option v-show="fifthGrade" value="5/3">5/3</option>
              <option v-show="sixthGrade" value="6/1">6/1</option>
              <option v-show="sixthGrade" value="6/2">6/2</option>
              <option v-show="sixthGrade" value="6/2">6/3</option>
              <option v-show="seventhGrade" value="6/3">1/1</option>
              <option v-show="seventhGrade" value="6/3">1/2</option>
              <option v-show="seventhGrade" value="6/3">1/3</option>
              <option v-show="eightthGrade" value="6/3">2/1</option>
              <option v-show="eightthGrade" value="6/3">2/2</option>
              <option v-show="eightthGrade" value="6/3">2/3</option>
              <option v-show="ninethGrade" value="6/3">3/1</option>
              <option v-show="ninethGrade" value="6/3">3/2</option>
              <option v-show="ninethGrade" value="6/3">3/3</option>
              <option v-show="tenthGrade" value="6/3">1/1</option>
              <option v-show="tenthGrade" value="6/3">1/2</option>
              <option v-show="tenthGrade" value="6/3">1/3</option>
              <option v-show="eleventhGrade" value="6/3">2/1</option>
              <option v-show="eleventhGrade" value="6/3">2/2</option>
              <option v-show="eleventhGrade" value="6/3">2/3</option>
              <option v-show="twelfthGrade" value="6/3">3/1</option>
              <option v-show="twelfthGrade" value="6/3">3/2</option>
              <option v-show="twelfthGrade" value="6/3">3/3</option>
            </select>
          </div>
        </div>

        <div
          class="w-100 d-flex flex-row justify-content-center align-items-center mt-4"
        >
          <button
            class="btn btn-primary w-75"
            :disabled="theFieldsAreReady"
            @click="signup"
          >
            انشاء
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RequestOptionsInterface } from "@/interfaces/RequestOptionsInterface";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const userGrade = ref<string>("اختيار المرحلة");
const userClass = ref<string>("اختيار الصف");
const username = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const userNationalId = ref<string>("");
const userPhoneNumber = ref<string>("");

const firstGrade = computed(() => {
  return userGrade.value.includes("الاول ابتدائي");
});

const secondGrade = computed(() => {
  return userGrade.value.includes("الثاني ابتدائي");
});

const thirdGrade = computed(() => {
  return userGrade.value.includes("الثالث ابتدائي");
});

const forthGrade = computed(() => {
  return userGrade.value.includes("الرابع ابتدائي");
});

const fifthGrade = computed(() => {
  return userGrade.value.includes("الخامس ابتدائي");
});

const sixthGrade = computed(() => {
  return userGrade.value.includes("السادس ابتدائي");
});

const seventhGrade = computed(() => {
  return userGrade.value.includes("الاول متوسط");
});

const eightthGrade = computed(() => {
  return userGrade.value.includes("الثاني متوسط");
});

const ninethGrade = computed(() => {
  return userGrade.value.includes("الثالث متوسط");
});

const tenthGrade = computed(() => {
  return userGrade.value.includes("الاول ثانوي");
});

const eleventhGrade = computed(() => {
  return userGrade.value.includes("الثاني ثانوي");
});

const twelfthGrade = computed(() => {
  return userGrade.value.includes("الثالث ثانوي");
});

const theFieldsAreReady = computed(() => {
  if (
    username.value != "" &&
    password.value != "" &&
    userNationalId.value != "" &&
    userPhoneNumber.value != "" &&
    userGrade.value != "اختيار المرحلة" &&
    userClass.value != "اختيار الصف"
  ) {
    return false;
  } else {
    return true;
  }
});

const signup = async (): Promise<void> => {
  try {
    const requestOptions: RequestOptionsInterface = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: 0,
    };
  } catch (err) {
    console.log(err);
  }
};
</script>
