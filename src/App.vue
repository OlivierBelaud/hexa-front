<template>
  <Header/>
  <main>
    <router-view />
  </main>
</template>

<script setup>
  import Header from './modules/core/view/components/Header.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
main {
  text-align: center;
  margin-top: 60px;
}
</style>
