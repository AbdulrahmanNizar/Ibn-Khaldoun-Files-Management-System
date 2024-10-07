<template>
  <div class="h-100" id="parent-element">
    <NavBarForMainSites />

    <div
      class="w-100 mt-2 d-flex flex-column justify-content-end align-items-end p-3"
    >
      <h3 class="mb-3 fs-2 me-4 text-end">
        قم بأختيار المادة التي تريد ان تضيف لها الملفات
      </h3>

      <hr class="w-100" />
    </div>

    <div
      class="w-100 d-flex flex-row justify-content-center align-items-center p-2"
    >
      <div
        class="btn-group w-75 d-lg-flex flex-row justify-content-center align-items-center d-none"
        v-if="userGradeInEnglish == 'firstGrade'"
      >
        <router-link
          v-for="subject in firstGradeSubjects"
          :to="{ path: '/' + subject }"
          class="btn btn-primary btn-lg"
          >{{ subject }}</router-link
        >
      </div>
      <div
        class="btn-group w-75 d-lg-flex flex-row justify-content-center align-items-center d-none"
        v-if="userGradeInEnglish == 'secondGrade'"
      >
        <router-link
          v-for="subject in secondGradeSubjects"
          :to="{ path: '/' + subject }"
          class="btn btn-primary btn-lg"
          >{{ subject }}</router-link
        >
      </div>
      <div
        class="btn-group w-75 d-lg-flex flex-row justify-content-center align-items-center d-none"
        v-if="userGradeInEnglish == 'thirdGrade'"
      >
        <router-link
          v-for="subject in thirdGradeSubjects"
          :to="{ path: '/' + subject }"
          class="btn btn-primary btn-lg"
          >{{ subject }}</router-link
        >
      </div>
      <div
        class="btn-group w-75 d-lg-flex flex-row justify-content-center align-items-center d-none"
        v-if="userGradeInEnglish == 'forthGrade'"
      >
        <router-link
          v-for="subject in forthGradeSubjects"
          :to="{ path: '/' + subject }"
          class="btn btn-primary btn-lg"
          >{{ subject }}</router-link
        >
      </div>
      <div
        class="btn-group w-75 d-lg-flex flex-row justify-content-center align-items-center d-none"
        v-if="userGradeInEnglish == 'fifthGrade'"
      >
        <router-link
          v-for="subject in fifthGradeSubjects"
          :to="{ path: '/' + subject }"
          class="btn btn-primary btn-lg"
          >{{ subject }}</router-link
        >
      </div>
      <div
        class="btn-group w-75 d-lg-flex flex-row justify-content-center align-items-center d-none"
        v-if="userGradeInEnglish == 'sixthGrade'"
      >
        <router-link
          v-for="subject in sixthGradeSubjects"
          :to="{ path: '/' + subject }"
          class="btn btn-primary btn-lg"
          >{{ subject }}</router-link
        >
      </div>
      <div
        class="btn-group w-75 d-lg-flex flex-row justify-content-center align-items-center d-none"
        v-if="userGradeInEnglish == 'seventhGrade'"
      >
        <router-link
          v-for="subject in seventhGradeSubjects"
          :to="{ path: '/' + subject }"
          class="btn btn-primary btn-lg"
          >{{ subject }}</router-link
        >
      </div>
      <div
        class="btn-group w-75 d-lg-flex flex-row justify-content-center align-items-center d-none"
        v-if="userGradeInEnglish == 'eighthGrade'"
      >
        <router-link
          v-for="subject in eighthGradeSubjects"
          :to="{ path: '/' + subject }"
          class="btn btn-primary btn-lg"
          >{{ subject }}</router-link
        >
      </div>
      <div
        class="btn-group w-75 d-lg-flex flex-row justify-content-center align-items-center d-none"
        v-if="userGradeInEnglish == 'ninethGrade'"
      >
        <router-link
          v-for="subject in ninthGradeSubjects"
          :to="{ path: '/' + subject }"
          class="btn btn-primary btn-lg"
          >{{ subject }}</router-link
        >
      </div>

      <div
        class="btn-group-vertical w-75 d-lg-none d-block"
        v-if="userGradeInEnglish == 'firstGrade'"
      >
        <router-link
          v-for="subject in firstGradeSubjects"
          :to="{ path: '/' + subject }"
          class="btn btn-primary btn-lg"
          >{{ subject }}</router-link
        >
      </div>
      <div
        class="btn-group-vertical w-75 d-lg-none d-block"
        v-if="userGradeInEnglish == 'secondGrade'"
      >
        <router-link
          v-for="subject in secondGradeSubjects"
          :to="{ path: '/' + subject }"
          class="btn btn-primary btn-lg"
          >{{ subject }}</router-link
        >
      </div>
      <div
        class="btn-group-vertical w-75 d-lg-none d-block"
        v-if="userGradeInEnglish == 'thirdGrade'"
      >
        <router-link
          v-for="subject in thirdGradeSubjects"
          :to="{ path: '/' + subject }"
          class="btn btn-primary btn-lg"
          >{{ subject }}</router-link
        >
      </div>
      <div
        class="btn-group-vertical w-75 d-lg-none d-block"
        v-if="userGradeInEnglish == 'forthGrade'"
      >
        <router-link
          v-for="subject in forthGradeSubjects"
          :to="{ path: '/' + subject }"
          class="btn btn-primary btn-lg"
          >{{ subject }}</router-link
        >
      </div>
      <div
        class="btn-group-vertical w-75 d-lg-none d-block"
        v-if="userGradeInEnglish == 'fifthGrade'"
      >
        <router-link
          v-for="subject in fifthGradeSubjects"
          :to="{ path: '/' + subject }"
          class="btn btn-primary btn-lg"
          >{{ subject }}</router-link
        >
      </div>
      <div
        class="btn-group-vertical w-75 d-lg-none d-block"
        v-if="userGradeInEnglish == 'sixthGrade'"
      >
        <router-link
          v-for="subject in sixthGradeSubjects"
          :to="{ path: '/' + subject }"
          class="btn btn-primary btn-lg"
          >{{ subject }}</router-link
        >
      </div>
      <div
        class="btn-group-vertical w-75 d-lg-none d-block"
        v-if="userGradeInEnglish == 'seventhGrade'"
      >
        <router-link
          v-for="subject in seventhGradeSubjects"
          :to="{ path: '/' + subject }"
          class="btn btn-primary btn-lg"
          >{{ subject }}</router-link
        >
      </div>
      <div
        class="btn-group-vertical w-75 d-lg-none d-block"
        v-if="userGradeInEnglish == 'eighthGrade'"
      >
        <router-link
          v-for="subject in eighthGradeSubjects"
          :to="{ path: '/' + subject }"
          class="btn btn-primary btn-lg"
          >{{ subject }}</router-link
        >
      </div>
      <div
        class="btn-group-vertical w-75 d-lg-none d-block"
        v-if="userGradeInEnglish == 'ninethGrade'"
      >
        <router-link
          v-for="subject in ninthGradeSubjects"
          :to="{ path: '/' + subject }"
          class="btn btn-primary btn-lg"
          >{{ subject }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getUserGradeInEnglish } from "@/helpers/GetUserGradeInEnglish";
import NavBarForMainSites from "@/components/NavBarForMainSites.vue";

const userGradeInArabic = ref<string | any>(localStorage.getItem("UserGrade"));
const userGradeInEnglish = ref<string | any>(
  getUserGradeInEnglish(userGradeInArabic.value)
);

const firstGradeSubjects = ref<string[]>([
  "الرياضيات",
  "لغتي",
  "العلوم",
  "الاسلاميات",
  "الانجليزية",
  "الفنية",
  "الحياتية",
]);

const secondGradeSubjects = ref<string[]>([
  "الرياضيات",
  "لغتي",
  "العلوم",
  "الاسلاميات",
  "الانجليزية",
  "الفنية",
  "الحياتية",
]);

const thirdGradeSubjects = ref<string[]>([
  "الرياضيات",
  "لغتي",
  "العلوم",
  "الاسلاميات",
  "الانجليزية",
  "الفنية",
  "الحياتية",
]);

const forthGradeSubjects = ref<string[]>([
  "الرياضيات",
  "لغتي",
  "العلوم",
  "الاسلاميات",
  "الانجليزية",
  "الفنية",
  "الحياتية",
  "الاجتماعيات",
]);

const fifthGradeSubjects = ref<string[]>([
  "الرياضيات",
  "لغتي",
  "العلوم",
  "الاسلاميات",
  "الانجليزية",
  "الفنية",
  "الحياتية",
  "الاجتماعيات",
  "الرقمية",
]);

const sixthGradeSubjects = ref<string[]>([
  "الرياضيات",
  "لغتي",
  "العلوم",
  "الاسلاميات",
  "الانجليزية",
  "الفنية",
  "الحياتية",
  "الاجتماعيات",
  "الرقمية",
]);

const seventhGradeSubjects = ref<string[]>([
  "الرياضيات",
  "لغتي",
  "العلوم",
  "الاسلاميات",
  "الانجليزية",
  "الفنية",
  "الحياتية",
  "الاجتماعيات",
  "الرقمية",
]);

const eighthGradeSubjects = ref<string[]>([
  "الرياضيات",
  "لغتي",
  "العلوم",
  "الاسلاميات",
  "الانجليزية",
  "الفنية",
  "الحياتية",
  "الاجتماعيات",
  "الرقمية",
]);

const ninthGradeSubjects = ref<string[]>([
  "الرياضيات",
  "لغتي",
  "العلوم",
  "الاسلاميات",
  "الانجليزية",
  "الفنية",
  "الحياتية",
  "الاجتماعيات",
  "الرقمية",
  "التفكير",
]);
</script>
