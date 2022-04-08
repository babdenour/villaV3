<template>
  <div class="menu">
    <img
      @click="resetAll()"
      :class="navFl === -1 ? 'isActive' : ''"
      src="../../public/logo.svg"
      alt="theoreme editions"
    />
    <h1 class="menu__title">theoreme editions</h1>
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
          @click="switchTime(600, 1200)"
          :class="navTm === 'morning' ? 'isActive' : ''"
        >morning</div>
        <div
          class="menu__nav__nav_btn__button"
          @click="switchTime(1200, 1400)"
          :class="navTm === 'noon' ? 'isActive' : ''"
        >noon</div>
        <div
          class="menu__nav__nav_btn__button"
          @click="switchTime(1400, 2000)"
          :class="navTm === 'afternoon' ? 'isActive' : ''"
        >afternoon</div>
        <div
          class="menu__nav__nav_btn__button"
          @click="switchFloor(9)"
          :class="navTm === 'furniture' ? 'isActive' : ''"
        >furniture</div>
          <a :href="link" target="_blank" id="info" >more info</a>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/index";

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
    // moreInfo() {
      // return store.getters.
    // },
  },

  methods: {
    switchFloor: (floorSelected) => {
      const currentTime = {
        limL: null,
        limH: null,
      };

      store.dispatch("setCurrentTime", currentTime);
      store.dispatch("setCurrentFloor", floorSelected);
      scrollToTop();
    },

    switchTime: (limL, limH) => {
      const currentTime = {
        limL,
        limH,
      };
      store.dispatch("setCurrentFloor", -1);
      store.dispatch("setCurrentTime", currentTime);
      scrollToTop();
    },

    resetAll: () => {
      const currentTime = {
        limL: null,
        limH: null,
      };
      store.dispatch("setCurrentFloor", -2);
      store.dispatch("setCurrentFloor", -1);
      store.dispatch("setCurrentTime", currentTime);
      scrollToTop();
    },

    scrollToTop: () => {
      document.querySelector("#top").scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        getInfoFromElInView();
      }, 500);
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

  & > img {
    height: 34vh;
    margin: -5rem 0rem -5.7rem -6.8rem;
  }

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
  display: none;
}



#info {
  width: fit-content;
  font-size: 0.7rem;
  margin: 1vw -0.9vw 0.1rem 3vh;
  text-decoration: underline;
  cursor: pointer;

}

@media only screen and (min-width: 770px) {
  .menu {
    font-size: 2vh;

    & > img {
      margin: -7rem 0rem -8rem -9.8rem;
    }

    &__nav {
      margin: 1rem;
    }
  }
}
</style>
