<template>
  <router-view />
</template>

<style lang="scss">
@font-face {
  font-family: "Lucida";
  src: url("../src/assets/fonts/Lucida-Console-Regular.ttf") format("ttf");
}
@font-face {
  font-family: "Monaco";
  src: url("../src/assets/fonts/Monaco.woff") format("woff");
}
@font-face {
  font-family: "Village";
  src: url("../src/assets/fonts/Village.ttf") format("ttf");
}

html {
  overflow: hidden;
}

body {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  place-items: center;
}

#app {
  font-family: "Village", "Lucida", "Monaco", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  padding-bottom: 1rem;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  place-items: center;
}

@media screen and (max-width: 1020px) {
  #app {
    width: 100vw;
    height: 100vh;
  }
}

a,
router-link {
  text-decoration: none;
  color: #2c3e50;
}
</style>
