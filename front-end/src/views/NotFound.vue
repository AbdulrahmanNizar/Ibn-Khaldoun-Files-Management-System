<template>
  <div
    class="h-100 d-flex flex-column justify-content-center align-items-center"
  >
    <h3>لم يتم التعرف على الصفحة</h3>
    <router-link :to="{ path: '/main' }" class="btn btn-primary btn-lg mt-4"
      >العودة الى الصفحة الرئيسية</router-link
    >
  </div>
</template>

<script setup lang="ts"></script>
