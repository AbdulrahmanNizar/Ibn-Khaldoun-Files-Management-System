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
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
      />

      <div
        class="d-flex flex-column justify-content-center align-items-center border border-primary border-2 rounded p-3 shadow mt-2"
        style="width: 60%"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
      >
        <h3 class="my-2 w-100 text-center">انشاء حساب</h3>

        <div class="w-100 btn-group mt-2">
          <button
            class="btn btn-primary w-50"
            @click="switchMood('schoolInfo')"
            v-if="showSchoolInfoInputs == true"
          >
            المعلومات المدرسية
          </button>

          <button
            class="btn btn-outline-primary w-50"
            @click="switchMood('schoolInfo')"
            v-else="showSchoolInfoInputs"
          >
            المعلومات المدرسية
          </button>

          <button
            class="btn btn-primary w-50"
            @click="switchMood('userInfo')"
            v-if="showUserInfoInputs == true"
          >
            المعلومات الشخصية
          </button>

          <button
            class="btn btn-outline-primary w-50"
            @click="switchMood('userInfo')"
            v-else="showUserInfoInputs"
          >
            المعلومات الشخصية
          </button>
        </div>

        <transition name="fadeError">
          <div
            class="alert alert-danger w-100 text-center mt-2"
            role="alert"
            v-if="showErrorForInvalidEmail"
          >
            {{ errorForInvalidEmail }}
          </div>
        </transition>
        <transition name="fadeError">
          <div
            class="alert alert-danger w-100 text-center mt-2"
            role="alert"
            v-if="showErrorForInvalidPassword"
          >
            {{ errorForInvalidPassword }}
          </div>
        </transition>

        <hr class="w-100" />

        <div
          class="d-flex flex-column justify-content-start align-items-start w-100"
          v-if="showUserInfoInputs"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
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
              <option value="اختيار المرحلة" selected>اختيار المرحلة</option>
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
              <option value="اختيار الصف" selected>اختيار الصف</option>
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
              <option v-show="sixthGrade" value="6/3">6/3</option>
              <option v-show="seventhGrade" value="1/1">1/1</option>
              <option v-show="seventhGrade" value="1/2">1/2</option>
              <option v-show="seventhGrade" value="1/3">1/3</option>
              <option v-show="eightthGrade" value="2/1">2/1</option>
              <option v-show="eightthGrade" value="2/2">2/2</option>
              <option v-show="eightthGrade" value="2/3">2/3</option>
              <option v-show="ninethGrade" value="3/1">3/1</option>
              <option v-show="ninethGrade" value="3/2">3/2</option>
              <option v-show="ninethGrade" value="3/3">3/3</option>
              <option v-show="tenthGrade" value="1/1">1/1</option>
              <option v-show="tenthGrade" value="1/2">1/2</option>
              <option v-show="tenthGrade" value="1/3">1/3</option>
              <option v-show="eleventhGrade" value="2/1">2/1</option>
              <option v-show="eleventhGrade" value="2/2">2/2</option>
              <option v-show="eleventhGrade" value="2/3">2/3</option>
              <option v-show="twelfthGrade" value="3/1">3/1</option>
              <option v-show="twelfthGrade" value="3/2">3/2</option>
              <option v-show="twelfthGrade" value="3/3">3/3</option>
            </select>
          </div>
        </div>

        <div
          class="d-flex flex-column justify-content-start align-items-start w-100"
          v-if="showSchoolInfoInputs"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
        >
          <div
            class="d-flex flex-column justify-content-end align-items-end w-100 mt-2"
          >
            <label for="#schoolCity" class="form-label me-2">المنطقة</label>
            <input
              type="text"
              id="schoolCity"
              placeholder="المدينة"
              class="form-control text-end"
              value="الرياض"
              readonly
            />
          </div>

          <div
            class="d-flex flex-column justify-content-end align-items-end w-100 mt-2"
          >
            <label for="#school" class="form-label me-2">المدرسة</label>
            <select
              id="school"
              class="form-select text-end"
              v-model="userSchool"
            >
              <option value="المدرسة" selected>المدرسة</option>
              <option value="ابن خلدون">ابن خلدون</option>
            </select>
          </div>

          <div
            class="d-flex flex-column justify-content-end align-items-end w-100 mt-2"
          >
            <label for="#branch" class="form-label me-2">الفرع</label>
            <select
              id="branch"
              class="form-select text-end"
              v-model="userSchoolBranch"
            >
              <option value="الفرع" selected>الفرع</option>
              <option value="المنار" v-show="ibnKhaldounSchoolsBranches">
                المنار
              </option>
              <option value="عرقة" v-show="ibnKhaldounSchoolsBranches">
                عرقة
              </option>
              <option value="النفل" v-show="ibnKhaldounSchoolsBranches">
                النفل
              </option>
              <option value="الياسمين" v-show="ibnKhaldounSchoolsBranches">
                الياسمين
              </option>
            </select>
          </div>

          <div
            class="d-flex flex-column justify-content-end align-items-end w-100 mt-2"
          >
            <label for="#gradeSection" class="form-label me-2">القسم</label>
            <select
              id="gradeSection"
              class="form-select text-end"
              v-model="userGradeSection"
            >
              <option value="القسم" selected>القسم</option>
              <option value="ابتدائي">ابتدائي</option>
              <option value="متوسط">متوسط</option>
              <option value="ثانوي">ثانوي</option>
              <option value="عالمي">عالمي</option>
            </select>
          </div>

          <div
            class="d-flex flex-column justify-content-end align-items-end w-100 mt-2"
          >
            <label for="#userSex" class="form-label me-2">النوع</label>
            <select id="userSex" class="form-select text-end" v-model="userSex">
              <option value="النوع">النوع</option>
              <option value="بنين">بنين</option>
              <option value="بنات">بنات</option>
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
</template>

<script setup lang="ts">
import { RequestOptionsInterface } from "@/interfaces/RequestOptionsInterface";
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import NavBarForRigestration from "@/components/NavBarForRigestration.vue";

const router = useRouter();
const userGrade = ref<string>("اختيار المرحلة");
const userClass = ref<string>("اختيار الصف");
const username = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const userNationalId = ref<string>("");
const userPhoneNumber = ref<string>("");
const showErrorForInvalidEmail = ref<boolean>(false);
const errorForInvalidEmail = ref<string>("");
const showErrorForInvalidPassword = ref<boolean>(false);
const errorForInvalidPassword = ref<string>("");
const showLoader = ref<boolean>(false);
const showUserInfoInputs = ref<boolean>(true);
const showSchoolInfoInputs = ref<boolean>(false);
const userSchool = ref<string>("المدرسة");
const userSchoolBranch = ref<string>("الفرع");
const userGradeSection = ref<string>("القسم");
const userSex = ref<string>("النوع");

onMounted((): void => {
  if (localStorage.getItem("JwtToken")) {
    router.push({ path: "/main" });
  }
});

const switchMood = (inputsType: string) => {
  if (inputsType == "userInfo") {
    showUserInfoInputs.value = true;
    showSchoolInfoInputs.value = false;
  } else if (inputsType == "schoolInfo") {
    showUserInfoInputs.value = false;
    showSchoolInfoInputs.value = true;
  }
};

const firstGrade = computed((): boolean => {
  return userGrade.value.includes("الاول ابتدائي");
});

const secondGrade = computed((): boolean => {
  return userGrade.value.includes("الثاني ابتدائي");
});

const thirdGrade = computed((): boolean => {
  return userGrade.value.includes("الثالث ابتدائي");
});

const forthGrade = computed((): boolean => {
  return userGrade.value.includes("الرابع ابتدائي");
});

const fifthGrade = computed((): boolean => {
  return userGrade.value.includes("الخامس ابتدائي");
});

const sixthGrade = computed((): boolean => {
  return userGrade.value.includes("السادس ابتدائي");
});

const seventhGrade = computed((): boolean => {
  return userGrade.value.includes("الاول متوسط");
});

const eightthGrade = computed((): boolean => {
  return userGrade.value.includes("الثاني متوسط");
});

const ninethGrade = computed((): boolean => {
  return userGrade.value.includes("الثالث متوسط");
});

const tenthGrade = computed((): boolean => {
  return userGrade.value.includes("الاول ثانوي");
});

const eleventhGrade = computed((): boolean => {
  return userGrade.value.includes("الثاني ثانوي");
});

const twelfthGrade = computed((): boolean => {
  return userGrade.value.includes("الثالث ثانوي");
});

const ibnKhaldounSchoolsBranches = computed(() => {
  return userSchool.value.includes("ابن خلدون");
});

const theFieldsAreReady = computed((): boolean => {
  if (
    username.value != "" &&
    password.value != "" &&
    userNationalId.value != "" &&
    userPhoneNumber.value != "" &&
    userGrade.value != "اختيار المرحلة" &&
    userClass.value != "اختيار الصف" &&
    userGradeSection.value != "القسم" &&
    userSchool.value != "المدرسة" &&
    userSchoolBranch.value != "الفرع" &&
    userSex.value != "النوع"
  ) {
    return false;
  } else {
    return true;
  }
});

const signup = async (): Promise<void> => {
  try {
    if (password.value.length >= 7) {
      if (email.value.includes("@")) {
        const requestOptions: RequestOptionsInterface | any = {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value,
            userNationalId: userNationalId.value,
            userPhoneNumber: userPhoneNumber.value,
            userGrade: userGrade.value,
            userClass: userClass.value,
            userSchool: userSchool.value,
            userSchoolBranch: userSchoolBranch.value,
            userGradeSection: userGradeSection.value,
            userSex: userSex.value,
            userSchoolPlace: "الرياض",
          }),
        };

        showLoader.value = true;
        const response = await fetch(
          "http://192.168.1.241:3000/registration/signup",
          requestOptions
        );
        const data = await response.json();
        if (data.statusCode >= 200 && data.statusCode < 300) {
          showLoader.value = false;

          localStorage.setItem("UserId", data.data.userId);
          localStorage.setItem("Username", data.data.username);
          localStorage.setItem("JwtToken", data.data.token);
          localStorage.setItem("Subscription", "");

          router.push({ path: "/main" });
          setTimeout(() => {
            window.location.reload();
          }, 10);
        } else {
          showLoader.value = false;
        }
      } else {
        showErrorForInvalidEmail.value = true;
        errorForInvalidEmail.value = "يجب ان يكون الايميل يحتوي على علامة @";
        setTimeout(() => {
          showErrorForInvalidEmail.value = false;
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
