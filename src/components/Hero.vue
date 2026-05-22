<template>
  <div class="container">
      <Navbar />
      
</div>

</template>

<script>
import Navbar from './Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>

<style scoped>
.container {
    background: #2d68f6;
    height: 65vh;

    padding: 10px 60px;
}
</style>