<template>
  <div class="menu">
    <h1 @click="resetAll(), activeNav = -1" :class="-1 === activeNav ?  'isActive' : ''">villa theoreme</h1>
    <div class="menu__nav">
      <div class="menu__nav__nav_btn">
        <div class="menu__nav__nav_btn__button" @click="switchFloor(0), activeNav = 0" :class="0 === activeNav ?  'isActive' : ''">GF |</div>
        <div class="menu__nav__nav_btn__button" @click="switchFloor(1), activeNav = 1" :class="1 === activeNav ?  'isActive' : ''">1st F |</div>
        <div class="menu__nav__nav_btn__button" @click="switchFloor(2), activeNav = 2" :class="2 === activeNav ?  'isActive' : ''">2nd F |</div>
        <div class="menu__nav__nav_btn__button" @click="switchFloor(2.5), activeNav = 2.5" :class="2.5 === activeNav ?  'isActive' : ''">2nd 1/2 F |</div>
        <div class="menu__nav__nav_btn__button" @click="switchFloor(3), activeNav = 3" :class="3 === activeNav ?  'isActive' : ''">3rd F |</div>
        <div class="menu__nav__nav_btn__button" @click="switchFloor(4), activeNav = 4" :class="4 === activeNav ?  'isActive' : ''">4th F</div>
      </div>
      <div class="menu__nav__nav_btn">
        <div class="menu__nav__nav_btn__button is" @click="switchTime(600, 1200), activeNav = 600" :class="600 === activeNav ?  'isActive' : ''" >morning |</div>
        <div class="menu__nav__nav_btn__button is" @click="switchTime(1200, 1400), activeNav = 1200" :class="1200 === activeNav ?  'isActive' : ''" >noon |</div>
        <div class="menu__nav__nav_btn__button is" @click="switchTime(1400, 2000), activeNav = 1400" :class="1400 === activeNav ?  'isActive' : ''" >afternoon |</div>
        <div class="menu__nav__nav_btn__button is" @click="switchTime(2000, 5059), activeNav = 2000" :class="2000 === activeNav ?  'isActive' : ''" >night</div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

#app {
  @font-face {
  font-family: "Calibri Light";
  src: url("/fonts/calibri_light.eot");
  src: url("/fonts/calibri_light.eot?#iefix") format("embedded-opentype"),
    url("/fonts/calibri_light.woff") format("woff"),
    url("/fonts/calibri_light.ttf") format("truetype"),
    url("/fonts/calibri_light.svg#CustomFont") format("svg");
}
  font-family: Calibri Light, "Roboto Mono", sans-serif, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
}

.menu {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2;

  &__nav {
    background-color: white;

    &__nav_btn {
      margin-top: 0.2rem;
      display: flex;
      flex-direction: row;
      text-align: left;

      &__button {
        margin-bottom: 3px;
        cursor: pointer;
      }:active {
        background-color: yellow;
      }
    }
  }
}

.isActive {
  width: fit-content;
  background-color: yellow;
}

h1 {
  cursor: pointer;
  text-align: left;
  background-color: white;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
}
</style>

<script>
import store from './store/index';

export default {
  data() {
    return {
      limL: store.getters.getCurrentTime.limL,
      activeNav: -1,
    };
  },

  computed: {},

  methods: {
    switchFloor: (floorSelected) => {
      const currentTime = {
        limL: null,
        limH: null,
      };
      store.dispatch('setCurrentTime', currentTime);
      store.dispatch('setCurrentFloor', floorSelected);
    },

    switchTime: (limL, limH) => {
      const currentTime = {
        limL,
        limH,
      };
      store.dispatch('setCurrentFloor', null);
      store.dispatch('setCurrentTime', currentTime);
    },

    resetAll: () => {
      const currentTime = {
        limL: null,
        limH: null,
      };
      store.dispatch('setCurrentFloor', null);
      store.dispatch('setCurrentTime', currentTime);
    },
  },
};
</script>
