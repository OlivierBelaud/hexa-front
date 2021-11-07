<template>
  <home-header msg="Page 1" />
</template>

<script>
import { defineComponent } from 'vue';
import HomeHeader from '../components/HomeHeader.vue';

export default defineComponent({
  name: 'Page1',
  components: {
    HomeHeader
  }
});
</script>
