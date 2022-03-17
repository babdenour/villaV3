<template>
  <div class="menu">
    <h1 class="menu__title" @click="resetAll()" :class="navFl === -1 ? 'isActive' : ''">
      villa theoreme
    </h1>
    <div class="menu__nav">
      <div class="menu__nav__nav_btn">
        <div
          class="menu__nav__nav_btn__button"
          :class="navFl === 0 ? 'isActive' : ''"
          @click="switchFloor(0)"
        >
          GF |
        </div>
        <div
          class="menu__nav__nav_btn__button"
          @click="switchFloor(1)"
          :class="navFl === 1 ? 'isActive' : ''"
        >
          1st F |
        </div>
        <div
          class="menu__nav__nav_btn__button"
          @click="switchFloor(2)"
          :class="navFl === 2 ? 'isActive' : ''"
        >
          2nd F |
        </div>
        <div
          class="menu__nav__nav_btn__button"
          @click="switchFloor(2.5)"
          :class="navFl === 2.5 ? 'isActive' : ''"
        >
          2nd 1/2 F |
        </div>
        <div
          class="menu__nav__nav_btn__button"
          @click="switchFloor(3)"
          :class="navFl === 3 ? 'isActive' : ''"
        >
          3rd F |
        </div>
        <div
          class="menu__nav__nav_btn__button"
          @click="switchFloor(4)"
          :class="navFl === 4 ? 'isActive' : ''"
        >
          4th F
        </div>
      </div>
      <div class="menu__nav__nav_btn">
        <div
          class="menu__nav__nav_btn__button is"
          @click="switchTime(600, 1200)"
          :class="navTm === 'morning' ? 'isActive' : ''"
        >
          morning |
        </div>
        <div
          class="menu__nav__nav_btn__button is"
          @click="switchTime(1200, 1400)"
          :class="navTm === 'noon' ? 'isActive' : ''"
        >
          noon |
        </div>
        <div
          class="menu__nav__nav_btn__button is"
          @click="switchTime(1400, 2000)"
          :class="navTm === 'afternoon' ? 'isActive' : ''"
        >
          afternoon |
        </div>
        <div
          class="menu__nav__nav_btn__button is"
          @click="switchTime(2000, 5059)"
          :class="navTm === 'night' ? 'isActive' : ''"
        >
          night
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/index";

// const EM = new EventEmitter();

export default {
  name: "Nav",
  data() {
    return {};
  },

  computed: {
    navFl() {
      return store.getters.getNavHl?.fl;
    },
    navTm() {
      return store.getters.getNavHl?.time;
    },
  },

  methods: {
    switchFloor: (floorSelected) => {
      const currentTime = {
        limL: null,
        limH: null,
      };

      store.dispatch("setCurrentTime", currentTime);
      store.dispatch("setCurrentFloor", floorSelected);
      EM.emit("touchstart");
    },

    switchTime: (limL, limH) => {
      const currentTime = {
        limL,
        limH,
      };
      const navHL = {
        fl: null,
        time: null,
        name: null,
        path: null,
        desc: null,
      };
      store.dispatch("setCurrentFloor", -1);
      store.dispatch("setCurrentTime", currentTime);
      EM.emit("touchstart");
    },

    resetAll: () => {
      const currentTime = {
        limL: null,
        limH: null,
      };
      store.dispatch("setCurrentFloor", -2);
      store.dispatch("setCurrentFloor", -1);
      store.dispatch("setCurrentTime", currentTime);
      EM.emit("touchstart");
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  &__title {
    @font-face {
      font-family: "Albertus";
      src: url("../assets/fonts/AlbertusMTStd.woff") format("woff"),
        url("../assets/fonts/AlbertusMTStdItalic.woff") format("woff"),
        url("../assets/fonts/AlbertusMTStdLight.woff") format("woff");
    }
    font-family: "Albertus";
  }

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
      }
      :active {
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
