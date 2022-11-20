<script>
export default {
  name: "Intro",
};
</script>

<template>
  <div class="intro" name="intro">
    <router-link to="/home" style=" display: flex;
  flex-direction: column; place-content: center;
  place-items: center;">
      <img id="manifest-logo" src="../../public/logo.svg" alt="manifeste" />
      <div class="manifest-text">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut perferendis minus
        </p>
        <p>suscipit quisquam dicta cumque, incidunt dolor laboriosam? Eius, minu</p>
        <p>s optio itaque magni quam porro maxime nihil ipsa voluptas a!</p>
      </div>
      <img id="manifest-illu" src="../assets/about.png" alt="manifeste" />
    </router-link>
    <br />
    <br />
    <router-link to="/about">get more informations about us</router-link>
  </div>
</template>

<style lang="scss">
.intro {
  width: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
}

#manifest-logo {
  width: 30%;
}

#manifest-illu {
  width: 50%;
}

.manifest-text {
  text-align: center;
  width: 80%;
}
</style>
