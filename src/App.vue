<template>
  <div id="app">
    
    <Home></Home>
  </div>
</template>

<script>
import Home from "./components/home.vue";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
body {
  @apply font-sans antialiased bg-gray-200;
}
</style>
