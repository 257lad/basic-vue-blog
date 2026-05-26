<template>
  <Hero />
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import Hero from './components/Hero.vue';

export default {
  components: {
    Hero
  }
}
</script>