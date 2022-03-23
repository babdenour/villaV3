<template>
  <Nav />
  <router-view />
</template>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,300,400,700);
@import url("https://fonts.cdnfonts.com/css/albertus-mt-std");

html {
  overflow: hidden;
}

body {
  margin: 0;
  h1 {
    font-family: "Albertus MT Std", sans-serif;
  }
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
}
</style>

<script>
import Nav from "./components/Nav.vue";

export default {
  components: {
    Nav,
  },
};
</script>
