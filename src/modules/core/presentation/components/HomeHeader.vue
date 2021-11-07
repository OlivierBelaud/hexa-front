<template>
  <img alt="Vue logo" src="../../../../assets/logo.png" />
  <h1>{{ msg }}</h1>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeHeader',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
});
</script>
