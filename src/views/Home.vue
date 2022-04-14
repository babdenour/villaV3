<template>
  <div class="home snapping" name="home">
    <div id="top"></div>
    <ShowContent
      class="home__container"
      v-for="i in list"
      :key="i.index"
      :desc="i.desc"
      :floorLocation="i.floorLocation"
      :link="i.link"
      :name="i.name"
      :path="i.path"
      :text="i.text"
      :time="i.time"
    />
    <div class="home__scroll_more" v-if="floor !== 9">
      <div @click="callGoToF(9)">
        see all furnitures !
      </div>
      <div id="more_top" @click="callScrollTop()">
        go top
      </div>
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
    justify-content: space-between;

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
    margin-top: -1.5vw
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
import store from "../store/index";
import dataImages from "../data/dataImages";
import dataFurnitures from "../data/dataFurnitures";

let xDown = null;
let yDown = null;

const swipeToTime = (swipe) => {
  const { currentFloor, timeIndex } = store.state;
  let timeI = timeIndex;

  if (currentFloor !== 9) {
    if (swipe === "right") {
      timeI -= 1;
      if (timeI < 1) timeI = 3;
      store.dispatch("setTimeIndex", timeI);
    } else if (swipe === "left") {
      timeI += 1;
      if (timeI > 3) timeI = 1;
      store.dispatch("setTimeIndex",timeI);
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
};

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
  setTimeout(() => {
    getInfoFromElInView();
  }, 800);
};

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
      swipeToTime("left");
      scrollToTop();
      setTimeout(() => {
        getInfoFromElInView();
      }, 300);
    } else {
      /* right swipe */
      swipeToTime("right");
      scrollToTop();
      setTimeout(() => {
        getInfoFromElInView();
      }, 300);
    }
  } else if (yDiff > 0) {
    /* up swipe */
    setTimeout(() => {
      getInfoFromElInView();
    }, 300);
  } else {
    /* down swipe */
    setTimeout(() => {
      getInfoFromElInView();
    }, 300);
  }
  /* reset values */
  xDown = null;
  yDown = null;
};
// eslint-disable-next-line no-unused-vars
function shuffle(array) {
  if (array?.length) {
    let i = array.length;
    // eslint-disable-next-line no-plusplus
    while (i--) {
      const ri = Math.floor(Math.random() * i);
      // eslint-disable-next-line no-param-reassign
      [array[i], array[ri]] = [array[ri], array[i]];
    }
    getInfoFromElInView();
    return array;
  }
  return [];
};

// try to add pull down to refresh
// const isVisible = ()=> {
//   const el = document.querySelector("#more_top")
//   const vHeight = (window.innerHeight || document.documentElement.clientHeight);
//   const y = null;
//   if (el.getBoundingClientRect() ==! null) {
//     const h = el.getBoundingClientRect();
//     y = h.y;

//     if (y < vHeight) {
//       scrollToTop();
//     }
//   }
// };

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
    displayImgList: () => {
      const { currentFloor, timeIndex } = store.state;
      const result = [];

      if (currentFloor === -1 && timeIndex === 0) {
        dataImages.forEach(() => result.push(dataImages[Math.floor(Math.random() * dataImages.length)]));
        return result;
      }
      else if (currentFloor !== -1 && currentFloor !== 9 || timeIndex !== 0) {
        if (currentFloor !== -1) {
          dataImages.find((el) => {
            if (parseFloat(el.floorLocation) === parseFloat(currentFloor)) result.push(el)
          });
          return shuffle(result);
        }
        if (timeIndex !== 0) {
          dataImages.find((el) => {
            if (timeIndex === el.timeIndex) result.push(el)
          });
          return shuffle(result);
        }
      }
      else if (currentFloor === 9) {
        dataFurnitures.forEach((el) => result.push(el));
        return result;
      }
      return [];
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
