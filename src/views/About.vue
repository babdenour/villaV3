<template>
  <div class="about">
    <h1 class="menu__title"
      :class="navFl === -1 ? 'isActive' : ''">
      <router-link to="/">
      THEOREME</router-link></h1>
    <img src="../assets/about.png" alt="palais">
    <a href="https://github.com/babdenour" target="_blank">dev by Babdenour</a>
  </div>
</template>

<script setup>
// export default {
//   name: "About",
//   data() {
//     return {};
//   },
// }
</script>

<style lang="scss">
  .about {
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    height: 80%;
    // position: absolute;
    // top: 20%;
    & img {
      width: 50vh;
    }
}
</style>
