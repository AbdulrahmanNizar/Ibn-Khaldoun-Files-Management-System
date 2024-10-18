<template>
  <div class="h-100" id="parent-element">
    <NavBarForMainSites />

    <transition name="fadeLeave">
      <SubscriptionCard
        v-if="showSubscriptionCard"
        v-motion
        :initial="{ opacity: 0, y: -50 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
      />
    </transition>

    <div
      class="mt-4 w-100 d-flex flex-column justify-content-end align-items-end p-3"
    >
      <h3 class="mb-0 fs-2 me-4 text-end">مرحبا {{ username }}</h3>
      <p class="fs-4 me-4 my-3 text-end">
        يمكنك هنا اختيار الفصل الذي تريد ادارة ملفاتك فيه
      </p>

      <hr class="w-100" />
    </div>

    <div
      class="w-100 d-flex flex-md-row flex-column justify-content-around align-items-center p-3 mt-3 flex-wrap"
    >
      <button
        v-motion
        :initial="{ opacity: 0, x: 150 }"
        :visibleOnce="{ opacity: 1, x: 0 }"
        class="btn btn-primary btn-lg col-md-4 col-6 p-2 mt-3 tirms-buttons d-md-none d-block"
        @click="checkUserSubscription('/firstTirm')"
      >
        الفصل الدراسي الاول
      </button>

      <button
        v-motion
        :initial="{ opacity: 0, x: -150 }"
        :visibleOnce="{ opacity: 1, x: 0 }"
        class="btn btn-primary btn-lg col-md-4 col-6 p-2 mx-1 mt-3 tirms-buttons d-md-none d-block"
        @click="checkUserSubscription('/secondTirm')"
      >
        الفصل الدراسي الثاني
      </button>

      <button
        v-motion
        :initial="{ opacity: 0, x: 150 }"
        :visibleOnce="{ opacity: 1, x: 0 }"
        class="btn btn-primary btn-lg p-2 col-md-4 col-6 mt-3 tirms-buttons d-md-none d-block"
        @click="checkUserSubscription('/thirdTirm')"
      >
        الفصل الدراسي الثالث
      </button>

      <button
        v-motion
        :initial="{ opacity: 0, x: -150 }"
        :visibleOnce="{ opacity: 1, x: 0 }"
        class="btn btn-primary btn-lg p-2 col-md-4 col-6 mx-1 mt-3 tirms-buttons d-md-block d-none"
        @click="checkUserSubscription('/secondTirm')"
      >
        الفصل الدراسي الثاني
      </button>

      <button
        v-motion
        :initial="{ opacity: 0, x: 150 }"
        :visibleOnce="{ opacity: 1, x: 0 }"
        class="btn btn-primary btn-lg p-2 col-md-4 col-6 mt-3 tirms-buttons d-md-block d-none"
        @click="checkUserSubscription('/firstTirm')"
      >
        الفصل الدراسي الاول
      </button>

      <button
        v-motion
        :initial="{ opacity: 0, y: 150 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        class="btn btn-primary btn-lg p-2 col-md-4 col-6 mt-3 tirms-buttons d-md-block d-none"
        @click="checkUserSubscription('/thirdTirm')"
      >
        الفصل الدراسي الثالث
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import NavBarForMainSites from "@/components/NavBarForMainSites.vue";
import SubscriptionCard from "@/components/SubscriptionCard.vue";
import { RequestOptionsInterface } from "@/interfaces/RequestOptionsInterface";

const store = useStore();
const router = useRouter();
const username = ref<string | null>(localStorage.getItem("Username"));
const userId = ref<string | null>(localStorage.getItem("UserId"));

const showSubscriptionCard = computed(() => {
  return store.state.showOrHideSubscriptionCard;
});

const checkUserSubscription = async (tirm: string): Promise<void> => {
  try {
    const requestOptions: RequestOptionsInterface | any = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId.value,
      }),
    };

    const response = await fetch(
      "http://192.168.1.241:3000/subscription-management/checkUserSubscription",
      requestOptions
    );
    const data = await response.json();
    if (data.statusCode >= 200 && data.statusCode < 300) {
      if (data.data.userSubscription == true) {
        router.push({ path: tirm });
      } else {
        store.commit("showSubscriptionCard");
      }
    }
  } catch (err) {
    console.log(err);
  }
};
</script>

<style>
.tirms-buttons {
  transition: 0.7s ease;
}

.tirms-buttons:hover {
  box-shadow: 5px 1px 50px blue;
}

#parent-element {
  background-image: linear-gradient(to bottom, rgb(234, 142, 240), white);
}
</style>
