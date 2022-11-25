<template>
  <div class="menu">
    <router-link
      to="/"
      style="
        display: flex;
        flex-direction: column;
        place-content: center;
        place-items: center;
      "
    >
      <img
        @click="resetAll()"
        class="logo"
        :src="require('../../public/logo.png')"
        alt="theoreme editions"
      />
    </router-link>
    <div class="menu__nav">
      <div class="menu__nav__nav_btn">
        <div
          class="menu__nav__nav_btn__button"
          @click="switchFloor(0)"
          :class="furn != 9 ? 'isActive' : ''"
        >
          {{ floor }}
        </div>
        <div
          class="menu__nav__nav_btn__button"
          @click="switchFloor(9)"
          :class="furn === 9 ? 'isActive' : ''"
        >
          furniture
        </div>
        <router-link style="opacity: 0.5" to="/about" id="about">About</router-link>
        <!-- <a
          :href="linkUrl"
          target="_blank"
          id="info"
          :class="linkUrl === undefined && furn !== 9 ? 'infoD' : 'info'"
          >get info</a
        > -->
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/index";

function scrollToTop() {
  document.querySelector("#top").scrollIntoView({ behavior: "smooth" });
}

export default {
  name: "Nav",
  store,
  data() {
    return {};
  },

  computed: {
    // navFl() {
    //   return store.getters.getNavHl?.fl;
    // },
    // navTm() {
    //   return store.getters.getNavHl?.time;
    // },
    // linkUrl() {
    //   return store.getters.getNavHl?.link;
    // },
    furn() {
      return store.getters.getCurrentFloor;
    },
    floor() {
      return this.getFloor();
    },
  },
  watch: {
    floor: "getFloor",
  },

  methods: {
    getFloor: () => {
      const { currentFloor } = store.state;
      const currFl = currentFloor;
      let floorName = "Floors";

      if (currFl === 0) {
        floorName = "Ground Floor";
      } else if (currFl === 1) {
        floorName = "Floor 1";
      } else if (currFl === 2) {
        floorName = "Floor 2";
      } else if (currFl === 3) {
        floorName = "Floor 3";
      } else if (currFl === 4) {
        floorName = "Floor 4";
      }
      return floorName;
    },

    switchFloor: (floorSelected) => {
      const { currentFloor } = store.state;
      floorSelected = floorSelected ?? currentFloor;

      if (floorSelected === 9) {
        store.dispatch("setCurrentFloor", 0);
        store.dispatch("setTimeIndex", 0);
      }

      0 < floorSelected && floorSelected <= 4 ? (floorSelected -= 1) : floorSelected;

      store.dispatch("setCurrentFloor", floorSelected);
      store.dispatch("setTimeIndex", 0);
      // scrollToTop();
    },

    switchTime: (timeIndex) => {
      store.dispatch("setCurrentFloor", 0);
      store.dispatch("setTimeIndex", timeIndex);
      // scrollToTop();
    },

    resetAll: () => {
      store.dispatch("setCurrentFloor", 0);
      store.dispatch("setTimeIndex", 0);
      // scrollToTop();
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;
  text-align: center;
  .logo {
    padding: 3px;
    width: 100%;
  }
  &__nav {
    margin-top: 1rem;
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

@media only screen and (min-width: 1020px) {
  .menu {
    margin-bottom: 2rem;
    &__nav {
      margin-top: 2rem;
    }
  }
}
</style>
