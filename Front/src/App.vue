<template>
  <div id="app">
    <v-app>
      <Navbar v-if="!$route.meta.hide" />
      <v-main>
        <router-view />
      </v-main>
      <vue-snotify></vue-snotify>
    </v-app>
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";
export default {
  name: "App",
  components: { Navbar },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import './styles/globals';
</style>
