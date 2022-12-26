<script>
import store from "../store/index";

export default {
  name: "Intro",
  store,
  methods: {
    goHome: () => {
      store.dispatch("setCurrentFloor", 0);
      store.dispatch("setTimeIndex", 0);
    },
  }
};
</script>

<template>
  <div class="intro" name="intro">
    <router-link @click="goHome()" to="/home" style="
        display: flex;
        flex-direction: column;
        place-content: center;
        place-items: center;
      ">
      <img id="manifest-logo" src="../../public/logo.png" alt="manifeste" />
      <br />
      <div class="manifest-text">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut perferendis minus
        </p>
        <p>suscipit quisquam dicta cumque, incidunt dolor laboriosam? Eius, minu</p>
        <p>suscipit quisquam dicta cumque, incidunt dolor laboriosam? Eius, minu</p>
      </div>
      <img id="manifest-illu" src="../assets/images/4F-04.jpg" alt="manifeste" />
    </router-link>
    <br />
    <router-link to="/about">get more informations
      <span style="color: blue; font-size: ">about</span> us</router-link>
  </div>
</template>

<style lang="scss">
.intro {
  padding: 3px;
  width: 98%;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  font-family: "Lucida";
}

#manifest-logo {
  width: 98%;
}

#manifest-illu {
  width: 90%;
}

.manifest-text {
  text-align: center;
  width: 80%;
}

p,
span {
  font-size: 1.8vh;
}
</style>
