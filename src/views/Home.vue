<template>
  <div>
    <Nav />
    <div class="home snapping" name="home">
      <div id="top"></div>
      <!-- v-for="i in list" -->
      <ShowContent
        v-if="floor !== 9"
        class="home__container"
        :key="list[0]?.index"
        :desc="list[0]?.desc"
        :floorLocation="list[0]?.floorLocation"
        :link="list[0]?.link"
        :name="list[0]?.name"
        :path="list[0]?.path"
        :text="list[0]?.text"
        :time="list[0]?.time"
      />
      <ShowFurniture
        v-if="floor === 9"
        class="home__container"
        :key="list[0]?.index"
        :desc="list[0]?.desc"
        :link="list[0]?.link"
        :name="list[0]?.name"
        :path="list[0]?.path"
      />
      <!-- <div class="home__scroll_more" v-if="floor !== 9">
      <div id="more_top" @click="callScrollTop()">go top</div>
    </div> -->
    </div>
  </div>
</template>

<style lang="scss">
.home {
  z-index: 1;
  width: 100%;
  height: 80%;
  position: absolute;
  top: 20%;

  &__container {
    display: flex;
    scroll-snap-align: start;
  }

  &__scroll_more {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: center;

    > #more_top {
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
    }
  }
}

.home::-webkit-scrollbar {
  display: none;
}

.snapping {
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

@media screen and (min-width: 575px) {
  .home {
    width: 40%;
    left: 27.5%;
    right: 27.5%;
  }

  #furntiures {
    margin: -0.4vw 0 1vw 0;
    width: fit-content;
  }
}

@media screen and (min-width: 1500px) {
  .home {
    width: 35%;
    left: 32.5%;
    right: 32.5%;
    margin-top: -1.5vw;
  }

  #furntiures {
    margin: -0.4vw 0 1vw 0;
    width: fit-content;
  }
}
</style>

<script>
// @ is an alias to /src
import ShowContent from "../components/ShowContent.vue";
import ShowFurniture from "../components/ShowFurniture.vue";
import store from "../store/index";
import dataImages from "../data/dataImages";
import dataFurnitures from "../data/dataFurnitures";
import Nav from "../components/Nav.vue";

let xDown = null;
let yDown = null;

const swipeToTime = (swipe) => {
  const { currentFloor, timeIndex } = store.state;
  let timeI = timeIndex;

  if (currentFloor !== 9) {
    if (swipe === "right" && timeI < 4) {
      timeI += 1;
      store.dispatch("setTimeIndex", timeI);
    } else if (swipe === "left" && timeI > 0) {
      timeI -= 1;
      store.dispatch("setTimeIndex", timeI);
    }
  }
};

const scrollToNextFloor = (scroll) => {
  const { currentFloor } = store.state;
  let floor = currentFloor;

  if (currentFloor !== 9) {
    if (scroll === "next" && currentFloor < 4) {
      floor += 1;
      store.dispatch("setCurrentFloor", floor);
    } else if (scroll === "previous" && currentFloor > 0) {
      floor -= 1;
      store.dispatch("setCurrentFloor", floor);
    }
  }
};

const scrollToTop = () => {
  document.querySelector("#top").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    getInfoFromElInView();
  }, 500);
};

const goToFurniture = (floorSelected) => {
  store.dispatch("setTimeIndex", 0);
  store.dispatch("setCurrentFloor", floorSelected);
};

function getTouches(evt) {
  return evt.touches || evt.originalEvent.touches;
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
  setTimeout(() => {
    getInfoFromElInView();
  }, 800);
}

function changeFloor(index) {
  const { scrollIndex } = store.state;
  (scrollIndex) => (4 ? (index = -1) : (index = 1));

  store.dispatch("setScrollIndex", index);
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  const xUp = evt.touches[0].clientX;
  const yUp = evt.touches[0].clientY;

  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /* most significant */
    if (xDiff > 0) {
      /* left swipe */
      swipeToTime("right");
      setTimeout(() => {
        getInfoFromElInView();
      }, 300);
    } else {
      /* right swipe */
      swipeToTime("left");
      setTimeout(() => {
        getInfoFromElInView();
      }, 300);
    }
  } else if (yDiff > 0) {
    /* up swipe */
    scrollToNextFloor("next");
    setTimeout(() => {
      scrollToTop();
    }, 300);
    // setTimeout(() => {
    //   getInfoFromElInView();
    // }, 300);
  } else {
    /* down swipe */
    scrollToNextFloor("previous");
    setTimeout(() => {
      scrollToTop();
    }, 300);
    // setTimeout(() => {
    //   getInfoFromElInView();
    // }, 300);
  }
  /* reset values */
  xDown = null;
  yDown = null;
}

const checkVp = () => {
  const vpWidth = window.innerWidth;
  const vpHeight = window.innerHeight;
  const { scrollY } = window;
  const x = vpWidth / 2;
  const y = scrollY + vpHeight / 2.5;
  return { x, y };
};

const getInfoFromElInView = () => {
  const { x, y } = checkVp();
  const obj = document.elementFromPoint(x, y);
  const parentObj = obj.parentNode;
  const dataFormImage = {
    desc: parentObj.dataset?.desc,
    fl: parseFloat(parentObj.dataset?.fl),
    link: parentObj.dataset?.link,
    name: parentObj.dataset?.name,
    path: parentObj.dataset?.path,
    text: parentObj.dataset?.text,
    time: parentObj.dataset?.tm,
  };
  store.dispatch("setNavHl", dataFormImage);
  return dataFormImage;
};

(function () {
  setTimeout(() => {
    getInfoFromElInView();
  }, 500);
})();
document.addEventListener("wheel", getInfoFromElInView, false);
document.addEventListener("mousemove", getInfoFromElInView, false);
document.addEventListener("touchcancel", getInfoFromElInView, false);
document.addEventListener("touchend", getInfoFromElInView, false);
document.addEventListener("touchmove", handleTouchMove, false);
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("click", getInfoFromElInView, false);

export default {
  name: "Home",
  store,
  components: {
    ShowContent,
    ShowFurniture,
    Nav,
  },
  data() {
    return {};
  },
  computed: {
    floor() {
      return store.getters.getCurrentFloor;
    },
    timeI() {
      return store.getters.getTimeIndex;
    },
    list() {
      return this.displayImgList();
    },
  },
  watch: {
    floor: "displayImgList",
    timeI: "displayImgList",
  },
  methods: {
    // displayImgList: () => {
    //   const { currentFloor, timeIndex } = store.state;
    //   const result = [];

    //   if (9 > currentFloor >= 0 && 4 > timeIndex >= 0) {
    //     dataImages.find((el) => {
    //       if (
    //         parseFloat(el.floorLocation) === parseFloat(currentFloor) &&
    //         timeIndex === el.timeIndex
    //       )
    //         result.push(el);
    //     });
    //     return result;
    //   }
    //   // if (timeIndex !== 0) {
    //   //   dataImages.find((el) => {
    //   //     if (timeIndex === el.timeIndex) result.push(el);
    //   //   });
    //   //   return result;
    //   // }
    //   if (currentFloor === 9) {
    //     dataFurnitures.forEach((el) => result.push(el));
    //     return result;
    //   }
    //   return [];
    // },
    displayImgList: () => {
      const { currentFloor, timeIndex } = store.state;
      const result = [];
      if (currentFloor === 9) {
        dataFurnitures.forEach((el) => result.push(el));
        return result;
      }
      if (9 > currentFloor >= 0 && 4 > timeIndex >= 0) {
        dataImages.map((e) => {
          if (
            parseFloat(e.floorLocation) === parseFloat(currentFloor) &&
            timeIndex === e.timeIndex
          ) {
            result.push(e);
          }
        });
      }
      return result;
    },
    callScrollTop: () => {
      scrollToTop();
    },
    callGoToF: () => {
      callScrollTop();
      goToFurniture(9);
    },
  },
};
</script>
