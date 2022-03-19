<template>
  <Nav />
  <router-view />
</template>

<style lang="scss">
html {
  overflow: hidden;
}

body {
  margin: 0;
}

#app {
  @font-face {
    font-family: "Albertus";
    src: url("./assets/fonts/AlbertusMTStd.woff") format("woff"),
      url("./assets/fonts/AlbertusMTStdItalic.woff") format("woff"),
      url("./assets/fonts/AlbertusMTStdLight.woff") format("woff");
  }
  font-family: "Albertus, sans-serif, Arial";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-style: normal;
  font-weight: normal;
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
