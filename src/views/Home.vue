<template>
  <div class="home snapping" name="home">
    <div id="top"></div>
    <div id="scrollable">
      <ShowContent
        class="home__container"
        v-for="i in list"
        :key="i.index"
        :name="i.name"
        :path="i.path"
        :floorLocation="i.floorLocation"
        :time="i.time"
        :desc="i.desc"
        @change="this.getInfoFromElInView()"
      />
      <!-- try to add emit event  -->
    </div>
    <div class="home__scroll_top" @click="scrollTop()">go top</div>
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

  &__scroll_top {
    text-align: right;
    font-weight: bold;
    font-size: 14px;
    margin: 0.5rem;
    cursor: pointer;
  }
}

.home::-webkit-scrollbar {
  display: none;
}

.snapping {
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

@media screen and (min-width: 380px) {
  .home {
    width: 70%;
    left: 15%;
    right: 15%;
  }
}
</style>

<script>
// @ is an alias to /src
import ShowContent from "../components/ShowContent.vue";
import store from "../store/index";
import dataImages from "../data/dataImages";

let xDown = null;
let yDown = null;

const swipeToTime = (swipe) => {
  const { currentTime } = store.state;
  const time = currentTime;

  if (time.limL === null) {
    time.limL = 600;
    time.limH = 1200;
    store.dispatch("setCurrentTime", time);
  }

  if (swipe === "left") {
    if (time.limL === 600 && time.limH === 1200) {
      time.limL = 1200;
      time.limH = 1400;
      store.dispatch("setCurrentTime", time);
    } else if (time.limL === 1200 && time.limH === 1400) {
      time.limL = 1400;
      time.limH = 2000;
      store.dispatch("setCurrentTime", time);
    } else if (time.limL === 1400 && time.limH === 2000) {
      time.limL = 2000;
      time.limH = 5059;
      store.dispatch("setCurrentTime", time);
    } else if (time.limL === 2000 && time.limH === 5059) {
      time.limL = 600;
      time.limH = 1200;
      store.dispatch("setCurrentTime", time);
    }
  }
  if (swipe === "right") {
    if (time.limL === 600 && time.limH === 1200) {
      time.limL = 2000;
      time.limH = 5059;
      store.dispatch("setCurrentTime", time);
    } else if (time.limL === 1200 && time.limH === 1400) {
      time.limL = 600;
      time.limH = 1200;
      store.dispatch("setCurrentTime", time);
    } else if (time.limL === 1400 && time.limH === 2000) {
      time.limL = 1200;
      time.limH = 1400;
      store.dispatch("setCurrentTime", time);
    } else if (time.limL === 2000 && time.limH === 5059) {
      time.limL = 1400;
      time.limH = 2000;
      store.dispatch("setCurrentTime", time);
    }
  }
};

function getTouches(evt) {
  return evt.touches || evt.originalEvent.touches;
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
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
      swipeToTime("left");
      getInfoFromElInView();
    } else {
      /* right swipe */
      swipeToTime("right");
      getInfoFromElInView();
    }
  } else if (yDiff > 0) {
    /* up swipe */
    getInfoFromElInView();
  } else {
    /* down swipe */
    getInfoFromElInView();
  }
  /* reset values */
  xDown = null;
  yDown = null;
}
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
    return array;
  }
  return [];
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
    name: parentObj.dataset?.name,
    path: parentObj.dataset?.path,
    time: parentObj.dataset?.tm,
    fl: parseFloat(parentObj.dataset?.fl),
    desc: parentObj.dataset?.desc,
  };
  store.dispatch("setNavHl", dataFormImage);
  console.log(dataFormImage.name);
  return dataFormImage;
};

(function () {
  setTimeout(() => {
    getInfoFromElInView();
  }, 500);
})();
// TODO try to get a constant analyse of the scroll and vue for the nav update

// const home = document.querySelector("scrollable");
// home.addEventListener("scroll", (e) => getInfoFromElInView());

document.addEventListener("onwheel", getInfoFromElInView, true);
document.addEventListener("mousemove", getInfoFromElInView, false);
// document.addEventListener("scroll", getInfoFromElInView, false);

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

export default {
  name: "Home",
  store,
  components: {
    ShowContent,
  },
  data() {
    return {};
  },
  setup() {},
  created() {},

  computed: {
    floor() {
      return store.getters.getCurrentFloor;
    },
    time() {
      return store.getters.getCurrentTime;
    },
    list() {
      return this.displayImgList();
    },
  },
  watch: {
    floor: "displayImgList",
    time: "displayImgList",
  },
  methods: {
    // TODO refacto lim with simple string but its work
    displayImgList: () => {
      const { currentFloor } = store.state;
      const { limL, limH } = store.state.currentTime;
      const result = [];

      if (currentFloor === -1 && (limL === null || limH === null)) {
        dataImages.forEach(() => {
          result.push(dataImages[Math.floor(Math.random() * dataImages.length)]);
        });
        return result;
      }
      if (currentFloor !== -1 || (limL !== null && limH !== null)) {
        if (currentFloor !== -1) {
          // eslint-disable-next-line array-callback-return
          dataImages.find((el) => {
            if (parseFloat(el.floorLocation) === parseFloat(currentFloor)) {
              result.push(el);
            }
          });
          return shuffle(result);
        }
        if (limL !== null && limH !== null) {
          // eslint-disable-next-line array-callback-return
          dataImages.find((el) => {
            if (limL <= parseInt(el.desc, 10) && parseInt(el.desc, 10) < limH) {
              result.push(el);
            }
          });
          return shuffle(result);
        }
      }
      return [];
    },
    scrollTop: () => {
      document.querySelector("#top").scrollIntoView({ behavior: "smooth" });
    },
  },
  mounted() {},
};
</script>
