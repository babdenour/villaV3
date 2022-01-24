<template>
  <div class="home snapping">
    <div id="top"></div>
    <div class="home__container" v-for="i in list" :key="i.index">
      <ShowContent
        :name="i.name"
        :path="i.path"
        :floorLocation="i.floorLocation"
        :time="i.time"
        :desc="i.desc"
        class="show_content"
      />
    </div>
    <div class="home__scroll_top" @click="scrollTop()">
      go top
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

  &__scroll_top {
    text-align: right;
    font-weight: bold;
    font-size: 14px;
    margin: 0.5rem;
    cursor: pointer;
  }
}

.home::-webkit-scrollbar {
  display:none;
}

.snapping {
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}
</style>

<script>
// @ is an alias to /src
import ShowContent from '../components/ShowContent.vue';
import store from '../store/index';
import dataImages from '../data/dataImages';

let xDown = null;
let yDown = null;

const swipeToTime = (swipe) => {
  const { currentTime } = store.state;
  const time = currentTime;

  console.log(swipe);
  if (time.limL === null) {
    time.limL = 600; time.limH = 1200;
    store.dispatch('setCurrentTime', time);
  }

  if (swipe === 'left') {
    if (time.limL === 600 && time.limH === 1200) {
      time.limL = 1200; time.limH = 1400;
      store.dispatch('setCurrentTime', time);
    } else if (time.limL === 1200 && time.limH === 1400) {
      time.limL = 1400; time.limH = 2000;
      store.dispatch('setCurrentTime', time);
    } else if (time.limL === 1400 && time.limH === 2000) {
      time.limL = 2000; time.limH = 5059;
      store.dispatch('setCurrentTime', time);
    } else if (time.limL === 2000 && time.limH === 5059) {
      time.limL = 600; time.limH = 1200;
      store.dispatch('setCurrentTime', time);
    }
  }
  if (swipe === 'right') {
    if (time.limL === 600 && time.limH === 1200) {
      time.limL = 2000; time.limH = 5059;
      store.dispatch('setCurrentTime', time);
    } else if (time.limL === 1200 && time.limH === 1400) {
      time.limL = 600; time.limH = 1200;
      store.dispatch('setCurrentTime', time);
    } else if (time.limL === 1400 && time.limH === 2000) {
      time.limL = 1200; time.limH = 1400;
      store.dispatch('setCurrentTime', time);
    } else if (time.limL === 2000 && time.limH === 5059) {
      time.limL = 1400; time.limH = 2000;
      store.dispatch('setCurrentTime', time);
    }
  }
};

function getTouches(evt) {
  return (
    evt.touches || evt.originalEvent.touches
  );
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
      swipeToTime('left');
    } else {
      /* right swipe */
      swipeToTime('right');
    }
  } else if (yDiff > 0) {
    /* up swipe */
  } else {
    /* down swipe */
  }
  /* reset values */
  xDown = null;
  yDown = null;
}

// eslint-disable-next-line no-unused-vars
function elementInViewport2(el) {
  if (el) {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    const width = el.offsetWidth;
    const height = el.offsetHeight;

    while (el.offsetParent) {
    // eslint-disable-next-line no-param-reassign
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top < (window.pageYOffset + window.innerHeight)
    && left < (window.pageXOffset + window.innerWidth)
    && (top + height) > window.pageYOffset
    && (left + width) > window.pageXOffset
    );
  }
  return 0;
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
  } return [];
}
// const docs = document.getElementById('cnt');
// const elem = document.elementFromPoint(document.window.width() / 2, document.window.height() / 2);

// console.log(elem);

// elementInViewport2(docs);

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

export default {
  name: 'Home',
  store,
  components: {
    ShowContent,
  },
  data() {
    return {
      watchedFloor: 0,
      watchedTime: 0,
    };
  },
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
    floor: 'displayImgList',
    time: 'displayImgList',
  },
  methods: {

    displayImgList: () => {
      // TODO random loop of images
      const { currentFloor } = store.state;
      const { limL, limH } = store.state.currentTime;
      const result = [];

      if (currentFloor === null && limL === null) {
        dataImages.forEach(() => {
          result.push(dataImages[Math.floor(Math.random() * dataImages.length)]);
        });
      } else if (limL !== null && limH !== null) {
        dataImages.find((el) => {
          if (limL <= parseInt(el.desc, 10) && parseInt(el.desc, 10) < limH) {
            result.push(el);
          }
          return null;
        });
        // console.log(result);
        // result = shuffle(result);
        // console.log(result);
      } else if (currentFloor !== null) {
        dataImages.find((el) => {
          if (parseFloat(el.floorLocation) === parseFloat(currentFloor)) {
            result.push(el);
          }
          return null;
        });
      }
      // console.log(result);
      // result = shuffle(result);
      // console.log(result);
      return result;
    },

    displayImgListBySwipe: () => {
      const { currentFloor } = store.state;
      const { limL } = store.state.currentTime;
      const result = [];

      if (currentFloor !== null && limL !== null) {
        dataImages.find((el) => {
          if (parseFloat(el.floorLocation) === parseFloat(currentFloor)) {
            if (el.time === limL) {
              result.push(el);
            }
          }
          return null;
        });
      }
    },
    scrollTop: () => {
      document.querySelector('#top').scrollIntoView(
        { behavior: 'smooth' },
      );
    },
  },
};
</script>
