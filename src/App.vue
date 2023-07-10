<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { PUBLIC_LAYOUT } from "@/constants";

import { fireStoreCore } from "./configs/firebase";

export default {
  setup() {
    async function getTransactions() {
      const response = await fireStoreCore.collection("transactions").get();
      const data = response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      console.log(data);
    }

    getTransactions();

    const route = useRoute();
    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout"),
    };
  },
};
</script>
