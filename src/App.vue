<template>
  <app-header />
  <router-view />

  <!-- Player -->
  <app-player />

  <auth-modal />
</template>

<script>
import AppPlayer from "@/components/Player.vue";
import AppHeader from "./components/Header.vue";
import AuthModal from "./components/Auth.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AuthModal,
    AppPlayer,
  },
};
</script>

<style></style>
