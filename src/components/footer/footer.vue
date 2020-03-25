<template>
  <div class="footer bg-dark text-light d-flex align-items-center justify-content-center">
    <p>March 2020</p>
  </div>
</template>

<script>
export default {
  name: "footer-component"
};
</script>

<style lang="sass" scoped>
@import  '../../assets/sass/variables.sass'

.footer
  height: $footer-height
  position: fixed
  left: 0
  bottom: 0
  width: 100%
</style>