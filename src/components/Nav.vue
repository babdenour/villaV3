<template>
  <div class="menu">
    <!-- <img
      @click="resetAll()"
      :class="navFl === -1 ? 'isActive' : ''"
      src="../../public/logo.svg"
      alt="theoreme editions"
    /> -->
    <h1 @click="resetAll()"
      class="menu__title"
      :class="navFl === -1 ? 'isActive' : ''">THEOREME</h1>
    <div class="menu__nav">
      <div class="menu__nav__nav_btn">
        <div
          class="menu__nav__nav_btn__button"
          :class="navFl === 0 ? 'isActive' : ''"
          @click="switchFloor(0)"
        >GF</div>
        <div
          class="menu__nav__nav_btn__button"
          @click="switchFloor(1)"
          :class="navFl === 1 ? 'isActive' : ''"
        >1st F</div>
        <div
          class="menu__nav__nav_btn__button"
          @click="switchFloor(2)"
          :class="navFl === 2 ? 'isActive' : ''"
        >2nd F</div>
        <div
          class="menu__nav__nav_btn__button"
          @click="switchFloor(2.5)"
          :class="navFl === 2.5 ? 'isActive' : ''"
        >2nd 1/2 F</div>
        <div
          class="menu__nav__nav_btn__button"
          @click="switchFloor(3)"
          :class="navFl === 3 ? 'isActive' : ''"
        >3rd F</div>
        <div
          class="menu__nav__nav_btn__button"
          @click="switchFloor(4)"
          :class="navFl === 4 ? 'isActive' : ''"
        >4th F</div>
      </div>
      <div class="menu__nav__nav_btn">
        <div
          class="menu__nav__nav_btn__button"
          @click="switchTime(1)"
          :class="navTm === 'morning' ? 'isActive' : ''"
        >morning</div>
        <div
          class="menu__nav__nav_btn__button"
          @click="switchTime(2)"
          :class="navTm === 'noon' ? 'isActive' : ''"
        >noon</div>
        <div
          class="menu__nav__nav_btn__button"
          @click="switchTime(3)"
          :class="navTm === 'afternoon' ? 'isActive' : ''"
        >afternoon</div>
        <div
          class="menu__nav__nav_btn__button"
          @click="switchFloor(9)"
          :class="furn === 9 ? 'isActive' : ''"
        >furniture</div>
        <a :href="linkUrl" target="_blank" id="info" :class="linkUrl === undefined && furn !== 9 ? 'infoD' : 'info'">get info</a>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/index";

function scrollToTop() {
  document.querySelector("#top").scrollIntoView({ behavior: "smooth" });
};

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
    furn() {
      return store.getters.getCurrentFloor;
    },
    linkUrl() {
      return store.getters.getNavHl?.link;
    },
  },

  methods: {
    switchFloor: (floorSelected) => {
      store.dispatch("setCurrentFloor", floorSelected);
      store.dispatch("setTimeIndex", 0);
      scrollToTop();
    },

    switchTime: (timeIndex) => {
      store.dispatch("setCurrentFloor", -1);
      store.dispatch("setTimeIndex", timeIndex);
      scrollToTop();
    },

    resetAll: () => {
      store.dispatch("setCurrentFloor", -2);
      store.dispatch("setCurrentFloor", -1);
      store.dispatch("setTimeIndex", 0);
      scrollToTop();
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

  &__nav {
    background-color: white;
    margin-bottom: 0.5rem;
    &__nav_btn {
      margin: 0.2rem 0;
      display: flex;
      flex-direction: row;
      text-align: left;

      &__button {
        margin-bottom: 0.3vw;
        margin-right: 0.55rem;
        cursor: pointer;
        opacity: 0.5;
        width: fit-content;
        height: fit-content;
      }
      :active {
        background-color: yellow;
      }
    }
  }
}
.isActive {
  width: fit-content;
  height: fit-content;
  opacity: 1;
  font-weight: bold;
  // background-color: rgb(255, 255, 159);
}

h1 {
 font-family: "Villa";
 text-align: center;
}

.infoD {
  display: none;
}
.info {
  width: fit-content;
  font-size: 0.7rem;
  margin: 1vw -0.9vw 0 3vh;
  text-decoration: underline;
  cursor: pointer;
  color: black;
}

@media only screen and (min-width: 575px) {
  .menu {
    width: 46%;
    left: 27%;
    right: 27%;
    font-size: 2vh;

    &__nav {
      margin: 1rem;
    }
  }
}

@media only screen and (min-width: 1500px) {
  .menu {
    width: 40%;
    left: 30%;
    right: 30%;
    font-size: 2vh;
    margin-top: -1vw;
h1 {
  margin: -1vw 0;
}
    &__nav {
      margin: 0vw 0 0 3vw;
      padding: -1vw;
    }
  }
}

</style>
