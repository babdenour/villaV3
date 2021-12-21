<template>
  <div class="home" >
    <div class="home__container" v-for="i in list" :key="i.index">
      <ShowContent
        :name="i.name"
        :path="i.path"
        :floorLocation="i.floorLocation"
        :time="i.time"
        :desc="i.desc"
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
  height: 100%;
  position: absolute;
  top: 20%;

  &__scroll_top {
    text-align: right;
    font-weight: bold;
    font-size: 14px;
    margin: 1rem;
    cursor: pointer;
  }
}

</style>

<script>
// @ is an alias to /src
import ShowContent from '../components/ShowContent.vue';
import store from '../store/index';
import dataImages from '../data/dataImages';

let xDown = null;
let yDown = null;

const increase = () => {
  // #TODO algo with time
  const { currentFloor } = store.state;
  const { currentTime } = store.state;
  const floor = currentFloor;
  let time = currentTime;

  if (floor) {
    time += 1;
    if (time <= 4) {
      store.dispatch('setCurrentFloor', time);
    }
  }
};

const dicrease = () => {
  // #TODO algo with time

  const { currentFloor } = store.state;
  const { currentTime } = store.state;
  const floor = currentFloor;
  let time = currentTime;

  if (floor) {
    time -= 1;
    if (time >= 0) {
      store.dispatch('setCurrentFloor', time);
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
      increase();
    } else {
      /* right swipe */
      dicrease();
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
    randomItem(items) {
      return items[Math.floor(Math.random() * items.length)];
    },

    displayImgList: () => {
      const { currentFloor } = store.state;
      const { limL, limH } = store.state.currentTime;
      const result = [];

      if (currentFloor === null && limL === null) {
        dataImages.forEach(() => {
          result.push(dataImages[Math.floor(Math.random() * dataImages.length)]);
        });
      } else if (limL !== null && limL !== null) {
        dataImages.find((el) => {
          if (limL <= parseInt(el.desc, 10) && parseInt(el.desc, 10) < limH) {
            result.push(el);
          }
          return null;
        });
      } else if (currentFloor !== null) {
        dataImages.find((el) => {
          if (parseFloat(el.floorLocation) === parseFloat(currentFloor)) {
            result.push(el);
          }
          return null;
        });
      }
      return result;
    },

    displayImgListBySwipe: () => {
      console.log('ici');
      const { currentFloor } = store.state;
      const { limL } = store.state.currentTime;
      // const { swipeFloorIndex } = store.state;
      const result = [];

      // #TODO add the swipe index to the algo for searching when swipe active on the same floor

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
      document.querySelector('.home').scrollIntoView({
        behavior: 'smooth',
      });
    },
  },
};
</script>
