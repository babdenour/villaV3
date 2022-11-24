<script>
export default {
  name: "Intro",
};
</script>

<template>
  <div class="intro" name="intro">
    <router-link
      to="/home"
      style="
        display: flex;
        flex-direction: column;
        place-content: center;
        place-items: center;
      "
    >
      <img id="manifest-logo" :src="require('../../public/logo.png')" alt="manifeste" />
      <br />
      <div class="manifest-text">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut perferendis minus
        </p>
        <p>suscipit quisquam dicta cumque, incidunt dolor laboriosam? Eius, minu</p>
        <p>suscipit quisquam dicta cumque, incidunt dolor laboriosam? Eius, minu</p>
      </div>
      <br />
      <img
        id="manifest-illu"
        :src="require('../assets/images/4F-04.jpg')"
        alt="manifeste"
      />
    </router-link>
    <br />
    <router-link to="/about" style="position: relative; text-align: center"
      >get more informations <span style="color: blue">about</span> us</router-link
    >
  </div>
</template>

<style lang="scss">
.intro {
  width: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  font-family: "Lucida";
}

#manifest-logo {
  padding: 3px;
  width: 100%;
}

#manifest-illu {
  width: 35%;
}

.manifest-text {
  text-align: center;
  width: 80%;
}
p,
span {
  font-size: 1.8vh;
}

@media (min-width: 651px) and (max-width: 1024px) {
  #manifest-illu {
    width: 40%;
  }
}

@media screen and (max-width: 650px) {
  #manifest-illu {
    width: 70%;
  }
}

</style>
