<template>
  <nav class="navbar navbar-dark bg-dark">
    <router-link to="/" class="logo-link">ByNoTask</router-link>
  </nav>
</template>

<script>
export default {
  name: "header-component"
};
</script>

<style lang="sass">
@import  '../../assets/sass/variables.sass'

nav
  height: $header-height
$color: white
.logo-link
  color: $color
  &:hover
    color: $color
    text-decoration: none
</style>