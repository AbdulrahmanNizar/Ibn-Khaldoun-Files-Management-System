<template>
  <div class="h-100" id="parent-element">
    <NavBarForMainSites />

    <div
      class="w-100 mt-1 d-flex flex-column justify-content-end align-items-end p-1"
    >
      <h3 class="mb-2 fs-3 me-4 text-end">
        مرحبا بك في ملفات مواد الفصل الدراسي الثالث
      </h3>

      <p class="mb-1 mt-2 fs-5 me-4 text-end">
        قم بأختيار المادة التي تريد ان تضيف لها الملفات
      </p>

      <button
        class="btn btn-primary btn-sm w-25 me-2 mt-1 d-flex flex-row justify-content-center align-items-center"
        @click="goBack"
      >
        عودة
      </button>

      <hr class="w-100" />
    </div>

    <div
      class="w-100 d-flex flex-row justify-content-center align-items-center p-1"
    >
      <div
        class="btn-group w-75 d-lg-flex flex-row justify-content-center align-items-center d-none"
        v-if="userGrade == 'firstGrade'"
      >
        <router-link
          v-for="subject in firstGradeSubjects"
          :to="{ path: '/files/thirdTrim/' + subject.en }"
          class="btn btn-primary btn-lg"
          v-motion
          :initial="{ opacity: 0, y: 150 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          >{{ subject.ar }}</router-link
        >
      </div>
      <div
        class="btn-group w-75 d-lg-flex flex-row justify-content-center align-items-center d-none"
        v-if="userGrade == 'secondGrade'"
      >
        <router-link
          v-for="subject in secondGradeSubjects"
          :to="{ path: '/files/thirdTrim/' + subject.en }"
          class="btn btn-primary btn-lg"
          v-motion
          :initial="{ opacity: 0, y: 150 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          >{{ subject.ar }}</router-link
        >
      </div>
      <div
        class="btn-group w-75 d-lg-flex flex-row justify-content-center align-items-center d-none"
        v-if="userGrade == 'thirdGrade'"
      >
        <router-link
          v-for="subject in thirdGradeSubjects"
          :to="{ path: '/files/thirdTrim/' + subject.en }"
          class="btn btn-primary btn-lg"
          v-motion
          :initial="{ opacity: 0, y: 150 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          >{{ subject.ar }}</router-link
        >
      </div>
      <div
        class="btn-group w-75 d-lg-flex flex-row justify-content-center align-items-center d-none"
        v-if="userGrade == 'forthGrade'"
      >
        <router-link
          v-for="subject in forthGradeSubjects"
          :to="{ path: '/files/thirdTrim/' + subject.en }"
          class="btn btn-primary btn-lg"
          v-motion
          :initial="{ opacity: 0, y: 150 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          >{{ subject.ar }}</router-link
        >
      </div>
      <div
        class="btn-group w-75 d-lg-flex flex-row justify-content-center align-items-center d-none"
        v-if="userGrade == 'fifthGrade'"
      >
        <router-link
          v-for="subject in fifthGradeSubjects"
          :to="{ path: '/files/thirdTrim/' + subject.en }"
          class="btn btn-primary btn-lg"
          v-motion
          :initial="{ opacity: 0, y: 150 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          >{{ subject.ar }}</router-link
        >
      </div>
      <div
        class="btn-group w-75 d-lg-flex flex-row justify-content-center align-items-center d-none"
        v-if="userGrade == 'sixthGrade'"
      >
        <router-link
          v-for="subject in sixthGradeSubjects"
          :to="{ path: '/files/thirdTrim/' + subject.en }"
          class="btn btn-primary btn-lg"
          v-motion
          :initial="{ opacity: 0, y: 150 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          >{{ subject.ar }}</router-link
        >
      </div>
      <div
        class="btn-group w-75 d-lg-flex flex-row justify-content-center align-items-center d-none"
        v-if="userGrade == 'seventhGrade'"
      >
        <router-link
          v-for="subject in seventhGradeSubjects"
          :to="{ path: '/files/thirdTrim/' + subject.en }"
          class="btn btn-primary btn-lg"
          v-motion
          :initial="{ opacity: 0, y: 150 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          >{{ subject.ar }}</router-link
        >
      </div>
      <div
        class="btn-group w-75 d-lg-flex flex-row justify-content-center align-items-center d-none"
        v-if="userGrade == 'eighthGrade'"
      >
        <router-link
          v-for="subject in eighthGradeSubjects"
          :to="{ path: '/files/thirdTrim/' + subject.en }"
          class="btn btn-primary btn-lg"
          v-motion
          :initial="{ opacity: 0, y: 150 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          >{{ subject.ar }}</router-link
        >
      </div>
      <div
        class="btn-group w-75 d-lg-flex flex-row justify-content-center align-items-center d-none"
        v-if="userGrade == 'ninethGrade'"
      >
        <router-link
          v-for="subject in ninthGradeSubjects"
          :to="{ path: '/files/thirdTrim/' + subject.en }"
          class="btn btn-primary btn-lg"
          v-motion
          :initial="{ opacity: 0, y: 150 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          >{{ subject.ar }}</router-link
        >
      </div>

      <div
        class="btn-group-vertical w-75 d-lg-none d-block"
        v-if="userGrade == 'firstGrade'"
      >
        <router-link
          v-for="subject in firstGradeSubjects"
          :to="{ path: '/files/thirdTrim/' + subject.en }"
          class="btn btn-primary btn-lg"
          v-motion-fade
          >{{ subject.ar }}</router-link
        >
      </div>
      <div
        class="btn-group-vertical w-75 d-lg-none d-block"
        v-if="userGrade == 'secondGrade'"
      >
        <router-link
          v-for="subject in secondGradeSubjects"
          :to="{ path: '/files/thirdTrim/' + subject.en }"
          class="btn btn-primary btn-lg"
          v-motion-fade
          >{{ subject.ar }}</router-link
        >
      </div>
      <div
        class="btn-group-vertical w-75 d-lg-none d-block"
        v-if="userGrade == 'thirdGrade'"
      >
        <router-link
          v-for="subject in thirdGradeSubjects"
          :to="{ path: '/files/thirdTrim/' + subject.en }"
          class="btn btn-primary btn-lg"
          v-motion-fade
          >{{ subject.ar }}</router-link
        >
      </div>
      <div
        class="btn-group-vertical w-75 d-lg-none d-block"
        v-if="userGrade == 'forthGrade'"
      >
        <router-link
          v-for="subject in forthGradeSubjects"
          :to="{ path: '/files/thirdTrim/' + subject.en }"
          class="btn btn-primary btn-lg"
          v-motion-fade
          >{{ subject.ar }}</router-link
        >
      </div>
      <div
        class="btn-group-vertical w-75 d-lg-none d-block"
        v-if="userGrade == 'fifthGrade'"
      >
        <router-link
          v-for="subject in fifthGradeSubjects"
          :to="{ path: '/files/thirdTrim/' + subject.en }"
          class="btn btn-primary btn-lg"
          v-motion-fade
          >{{ subject.ar }}</router-link
        >
      </div>
      <div
        class="btn-group-vertical w-75 d-lg-none d-block"
        v-if="userGrade == 'sixthGrade'"
      >
        <router-link
          v-for="subject in sixthGradeSubjects"
          :to="{ path: '/files/thirdTrim/' + subject.en }"
          class="btn btn-primary btn-lg"
          v-motion-fade
          >{{ subject.ar }}</router-link
        >
      </div>
      <div
        class="btn-group-vertical w-75 d-lg-none d-block"
        v-if="userGrade == 'seventhGrade'"
      >
        <router-link
          v-for="subject in seventhGradeSubjects"
          :to="{ path: '/files/thirdTrim/' + subject.en }"
          class="btn btn-primary btn-lg"
          v-motion-fade
          >{{ subject.ar }}</router-link
        >
      </div>
      <div
        class="btn-group-vertical w-75 d-lg-none d-block"
        v-if="userGrade == 'eighthGrade'"
      >
        <router-link
          v-for="subject in eighthGradeSubjects"
          :to="{ path: '/files/thirdTrim/' + subject.en }"
          class="btn btn-primary btn-lg"
          v-motion-fade
          >{{ subject.ar }}</router-link
        >
      </div>
      <div
        class="btn-group-vertical w-75 d-lg-none d-block"
        v-if="userGrade == 'ninethGrade'"
      >
        <router-link
          v-for="subject in ninthGradeSubjects"
          :to="{ path: '/files/thirdTrim/' + subject.en }"
          class="btn btn-primary btn-lg"
          v-motion-fade
          >{{ subject.ar }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { getUserGradeInEnglish } from "@/helpers/GetUserGradeInEnglish";
import NavBarForMainSites from "@/components/NavBarForMainSites.vue";

const store = useStore();
const router = useRouter();
const userId = ref<string | null>(localStorage.getItem("UserId"));
const userInfo = ref<any>([]);
const userGrade = ref<string | any>("");

const getUserInfo = async (): Promise<void> => {
  try {
    const response = await fetch(
      `http://192.168.1.241:3000/users-management/getUserInfo/${userId.value}`
    );
    const data = await response.json();

    if (data.statusCode >= 200 && data.statusCode < 300) {
      userInfo.value.push(data.data);
      const userGradeInArabic = data.data.grade;
      const userGradeInEnglish = getUserGradeInEnglish(userGradeInArabic);

      userGrade.value = userGradeInEnglish;
    }
  } catch (err) {
    console.log(err);
  }
};

const goBack = () => {
  router.go(-1);
};

const firstGradeSubjects = ref<any[]>([
  {
    en: "math",
    ar: "الرياضيات",
  },
  {
    en: "arabic",
    ar: "لغتي",
  },
  {
    en: "scince",
    ar: "العلوم",
  },
  {
    en: "islamic",
    ar: "الاسلاميات",
  },
  {
    en: "english",
    ar: "الانجليزية",
  },
  {
    en: "art",
    ar: "الفنية",
  },
  {
    en: "life skills",
    ar: "الحياتية",
  },
]);

const secondGradeSubjects = ref<any[]>([
  {
    en: "math",
    ar: "الرياضيات",
  },
  {
    en: "arabic",
    ar: "لغتي",
  },
  {
    en: "scince",
    ar: "العلوم",
  },
  {
    en: "islamic",
    ar: "الاسلاميات",
  },
  {
    en: "english",
    ar: "الانجليزية",
  },
  {
    en: "art",
    ar: "الفنية",
  },
  {
    en: "life skills",
    ar: "الحياتية",
  },
]);

const thirdGradeSubjects = ref<any[]>([
  {
    en: "math",
    ar: "الرياضيات",
  },
  {
    en: "arabic",
    ar: "لغتي",
  },
  {
    en: "scince",
    ar: "العلوم",
  },
  {
    en: "islamic",
    ar: "الاسلاميات",
  },
  {
    en: "english",
    ar: "الانجليزية",
  },
  {
    en: "art",
    ar: "الفنية",
  },
  {
    en: "life skills",
    ar: "الحياتية",
  },
]);

const forthGradeSubjects = ref<any[]>([
  {
    en: "math",
    ar: "الرياضيات",
  },
  {
    en: "arabic",
    ar: "لغتي",
  },
  {
    en: "scince",
    ar: "العلوم",
  },
  {
    en: "islamic",
    ar: "الاسلاميات",
  },
  {
    en: "english",
    ar: "الانجليزية",
  },
  {
    en: "art",
    ar: "الفنية",
  },
  {
    en: "life skills",
    ar: "الحياتية",
  },
  {
    en: "social studies",
    ar: "الاجتماعيات",
  },
]);

const fifthGradeSubjects = ref<any[]>([
  {
    en: "math",
    ar: "الرياضيات",
  },
  {
    en: "arabic",
    ar: "لغتي",
  },
  {
    en: "scince",
    ar: "العلوم",
  },
  {
    en: "islamic",
    ar: "الاسلاميات",
  },
  {
    en: "english",
    ar: "الانجليزية",
  },
  {
    en: "art",
    ar: "الفنية",
  },
  {
    en: "life skills",
    ar: "الحياتية",
  },
  {
    en: "computer skills",
    ar: "الرقمية",
  },
  {
    en: "social studies",
    ar: "الاجتماعيات",
  },
]);

const sixthGradeSubjects = ref<any[]>([
  {
    en: "math",
    ar: "الرياضيات",
  },
  {
    en: "arabic",
    ar: "لغتي",
  },
  {
    en: "scince",
    ar: "العلوم",
  },
  {
    en: "islamic",
    ar: "الاسلاميات",
  },
  {
    en: "english",
    ar: "الانجليزية",
  },
  {
    en: "art",
    ar: "الفنية",
  },
  {
    en: "life skills",
    ar: "الحياتية",
  },
  {
    en: "computer skills",
    ar: "الرقمية",
  },
  {
    en: "social studies",
    ar: "الاجتماعيات",
  },
]);

const seventhGradeSubjects = ref<any[]>([
  {
    en: "math",
    ar: "الرياضيات",
  },
  {
    en: "arabic",
    ar: "لغتي",
  },
  {
    en: "scince",
    ar: "العلوم",
  },
  {
    en: "islamic",
    ar: "الاسلاميات",
  },
  {
    en: "english",
    ar: "الانجليزية",
  },
  {
    en: "art",
    ar: "الفنية",
  },
  {
    en: "life skills",
    ar: "الحياتية",
  },
  {
    en: "computer skills",
    ar: "الرقمية",
  },
  {
    en: "social studies",
    ar: "الاجتماعيات",
  },
]);

const eighthGradeSubjects = ref<any[]>([
  {
    en: "math",
    ar: "الرياضيات",
  },
  {
    en: "arabic",
    ar: "لغتي",
  },
  {
    en: "scince",
    ar: "العلوم",
  },
  {
    en: "islamic",
    ar: "الاسلاميات",
  },
  {
    en: "english",
    ar: "الانجليزية",
  },
  {
    en: "art",
    ar: "الفنية",
  },
  {
    en: "life skills",
    ar: "الحياتية",
  },
  {
    en: "computer skills",
    ar: "الرقمية",
  },
  {
    en: "social studies",
    ar: "الاجتماعيات",
  },
]);

const ninthGradeSubjects = ref<any[]>([
  {
    en: "math",
    ar: "الرياضيات",
  },
  {
    en: "arabic",
    ar: "لغتي",
  },
  {
    en: "scince",
    ar: "العلوم",
  },
  {
    en: "islamic",
    ar: "الاسلاميات",
  },
  {
    en: "english",
    ar: "الانجليزية",
  },
  {
    en: "art",
    ar: "الفنية",
  },
  {
    en: "life skills",
    ar: "الحياتية",
  },
  {
    en: "computer skills",
    ar: "الرقمية",
  },
  {
    en: "critical thinking",
    ar: "التفكير",
  },
  {
    en: "social studies",
    ar: "الاجتماعيات",
  },
]);

getUserInfo();
</script>
