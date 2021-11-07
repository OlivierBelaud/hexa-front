<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/page1">Page 1</router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>

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
