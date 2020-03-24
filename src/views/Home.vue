<template>
  <div class="home">
    <div class="container py-2">
      <div class="card-deck mb-2">
        <card-component></card-component>
        <card-component></card-component>
        <card-component></card-component>
      </div>
      <div class="card-deck">
        <card-component></card-component>
        <card-component></card-component>
        <card-component></card-component>
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card/card";

export default {
  name: "Home",
  components: {
    "card-component": card
  }
};
</script>

<style lang="sass" scoped>
@import  '../assets/sass/variables.sass'

.home
  height: 100vh - ($header-height + $footer-height)
</style>
