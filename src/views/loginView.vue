<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start: Form -->
      <form @submit.prevent="onSubmit" class="flex-col justify-start space-y-6">
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email Address</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="email"
              placeholder="example@gmail.com"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="password"
              placeholder="Example"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
            type="submit"
          >
            Sign In
          </button>
          <button
            v-if="isPending"
            class="py-3 text-center w-full bg-gray text-white font-bold rounded-lg cursor-not-allowed"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>

      <!-- Start: Error -->
      <div v-if="error" class="text-left text-red mt-4">
        <span>{{ error }}</span>
      </div>

      <!-- Start: Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm a new user.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Register', params: {} }"
            class="text-primary font-bold"
            >Sign Up</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSignIn } from "@/composables/useSignIn";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { error, isPending, signIn } = useSignIn();
    const router = useRouter();

    const email = ref("");
    const password = ref("");

    async function onSubmit() {
      await signIn(email.value, password.value);
      if (!error.value) router.push({ name: "Profile", params: {} });
    }

    return { onSubmit, email, password, error, isPending };
  },
};
</script>
