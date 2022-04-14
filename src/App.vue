<template>
  <Nav />
  <router-view />
</template>

<style lang="scss">
@font-face {
  font-family: "Lucida";
  src: url("../src/assets/Fonts/Lucida-Console-Regular.ttf") format("ttf");
}
@font-face {
  font-family: "Monaco";
  src: url("../src/assets/Fonts/Monaco.woff") format("woff");
}
@font-face {
  font-family: "Villa";
  src: url("../src/assets/Fonts/Village.ttf") format("ttf");
}

html {
  overflow: hidden;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Lucida", "Monaco", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
}

@media screen and (min-width: 575px) {
  body {
    width: 50%;
    left: 25%;
    right: 25%;
  }
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
