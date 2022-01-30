<template>
  <div class="home snapping">
    <div id="top"></div>
    <div id="container" class="home__container">
      <ShowContent v-for="(i, index) in list" :key="i.name"
        :name="i.name"
        :path="i.path"
        :floorLocation="i.floorLocation"
        :time="i.time"
        :desc="i.desc"
        :id="'show_'+index + ' ' + i.name"
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
    flex-direction: column;
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
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-use-before-define */
/* eslint-disable no-sequences */
/* eslint-disable no-unexpected-multiline */
/* eslint-disable no-param-reassign */

import ShowContent from '../components/ShowContent.vue';
import store from '../store/index';
import dataImages from '../data/dataImages';

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
    // shuffle: (array) => {
    //   if (array?.length) {
    //     let i = array.length;
    //     while (i--) {
    //       const ri = Math.floor(Math.random() * i);
    //       [array[i], array[ri]] = [array[ri], array[i]];
    //     }
    //     return array;
    //   } return [];
    // },

    displayImgList: () => {
      const { currentFloor } = store.state;
      const { limL, limH } = store.state.currentTime;
      const result = [];

      if (currentFloor === null && (limL === null || limH === null)) {
        dataImages.forEach(() => {
          result.push(dataImages[Math.floor(Math.random() * dataImages.length)]);
        });
        return result;
      }
      if (currentFloor !== null || (limL !== null && limH !== null)) {
        if (currentFloor !== null) {
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
      document.querySelector('#top').scrollIntoView(
        { behavior: 'smooth' },
      );
    },
  },
  mounted() {
    // const showC1 = document.getElementsByClassName('show');
    // const visible = (showC) => {
    //   let i = showC.length;

    //   while (i) {
    //     // TODO toruver comment faire pour utiliser les pourcentage de viewport ds le if

    //     const data = showC[0].getBoundingClientRect();

    //     if (data.top >= 0 && data.bottom
    //       <= (window.innerHeight || document.documentElement.clientHeight)) {
    //       console.log('In the viewport!');
    //       console.log(data, showC[0]);
    //     } else {
    //       console.log('Not in the viewport... whomp whomp');
    //     }
    //     console.log(data);
    //     i--;
    //   }
    // };
    // visible(showC1);
  },
};
// TODO trouve l'element placer a la position top: 50%  bot 50%

const checkVp = () => {
  const vpHeight = window.innerHeight;
  const halfH = vpHeight / 2;
  console.log(`x:  ${vpHeight}, 50% ${halfH}`);
};
const checkEl = () => {
  const element = document.querySelectorAll('.container');
  // const rect = element.getBoundingClientRect();
  console.log(element);
};
window.addEventListener('resize', () => {
  checkVp();
});

// const container = document.getElementsByTagName('div');

document.addEventListener('scroll', () => {
  checkEl();
  // console.log('scroll container', container);
});

checkEl();
checkVp();

let xDown = null;
let yDown = null;

const swipeToTime = (swipe) => {
  const { currentTime } = store.state;
  const time = currentTime;

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

function shuffle(array) {
  if (array?.length) {
    const usedIncrement = [];
    let i = array.length;

    let ri = Math.floor(Math.random() * i);
    [array[i], array[ri]] = [array[ri], array[i]];
    while (i--) {
      if (usedIncrement.indexOf(ri) !== -1) {
        ri = Math.floor(Math.random() * i);
        usedIncrement.push(ri);
        // console.log('apres push', usedIncrement, ri);
      } else {
        usedIncrement.push(ri);
        [array[i], array[ri]] = [array[ri], array[i]];
        // console.log('! used', usedIncrement, ri);
      }
    }
    return array;
  } return [];
}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
</script>
