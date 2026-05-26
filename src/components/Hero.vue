<template>
  <div :class="`container ${showNavbarOnly ? 'nav-only' : ''}`" >
    <Navbar />
  </div>

</template>

<script>
import Navbar from './Navbar.vue';

export default {
  components: {
    Navbar
  },
  computed: {
    showNavbarOnly() {
      if(this.$route.name != 'Homepage') {
        return true
      }
      return false
    }
  }
}
</script>

<style scoped>
.container {
  background: #2d68f6;
  height: 65vh;
}

.nav-only {
  height: fit-content;
}
</style>