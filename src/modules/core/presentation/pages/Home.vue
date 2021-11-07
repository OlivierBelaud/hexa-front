<template>
  <home-header msg="Homepage" />
</template>

<script>
import { defineComponent } from 'vue';
import HomeHeader from '../components/HomeHeader.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HomeHeader
  }
});
</script>
