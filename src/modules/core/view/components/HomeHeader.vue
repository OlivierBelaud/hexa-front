<template>
  <img alt="Vue logo" :src="logo" />
  <h1>{{ msg }}</h1>
</template>

<script setup>
import logo from '../../../../assets/vue_logo.png'
const props = defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>
