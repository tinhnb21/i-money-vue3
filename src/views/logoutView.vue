<template>
  <div>Logout page...</div>
</template>

<script>
import { useRouter } from "vue-router";
import { useLogout } from "@/composables/useLogout";

export default {
  setup() {
    const router = useRouter();
    const { logout, error } = useLogout();

    async function onLogout() {
      await logout();
      if (!error.value) router.push({ name: "Login", params: {} });
    }

    onLogout();

    return {};
  },
};
</script>
