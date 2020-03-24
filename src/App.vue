<template>
  <div id="app">
    <header-component></header-component>
    <router-view />
    <footer-component></footer-component>
  </div>
</template>

<script>
import header from '@/components/header/header'
import footer from "@/components/footer/footer";

export default {
  name: "app",
  components: {
    "header-component": header,
    "footer-component": footer,
  }
};
</script>

<style lang="sass">

</style>
