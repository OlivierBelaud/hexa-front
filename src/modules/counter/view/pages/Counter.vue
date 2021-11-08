<template>
  <h1>This is the Counter page</h1>
  <p>The count is {{ count }}</p>
  <button @click="increment(1)">+</button>
  <button @click="decrement(1)">-</button>
</template>

<script setup>
import useCounter from '../../application/services/useVueCounter'
const { count, increment, decrement } = useCounter()
</script>
