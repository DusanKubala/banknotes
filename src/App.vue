<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <banknote-card></banknote-card>
</template>

<script>
import BanknoteCard from "./components/BanknoteCard.vue"

export default {
  name: 'App',
  components: [
    BanknoteCard
  ]
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
