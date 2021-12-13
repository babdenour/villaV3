import { createStore } from 'vuex';

export default createStore({
  state: {
    currentFloor: null,
    currentTime: {
      limL: null,
      limH: null,
    },
    swipeFloorIndex: 0,
  },

  getters: {
    getCurrentFloor: (state) => state.currentFloor,
    getCurrentTime: (state) => state.currentTime,
    getSwipeFloorIndexCurrentTime: (state) => state.swipeFloorIndex,
  },

  mutations: {
    UPDATE_CURRENT_FLOOR: (state, currentFloor) => {
      state.currentFloor = currentFloor;
    },
    UPDATE_CURRENT_TIME: (state, currentTime) => {
      state.currentTime.limL = currentTime.limL;
      state.currentTime.limH = currentTime.limH;
    },
    UPDATE_SWIPE_FLOOR_INDEX: (state, swipeFloorIndex) => {
      state.swipeFloorIndex = swipeFloorIndex;
    },
  },

  actions: {
    setCurrentFloor: (store, currentFloor) => {
      store.commit('UPDATE_CURRENT_FLOOR', currentFloor);
    },
    setCurrentTime: (store, currentTime) => {
      store.commit('UPDATE_CURRENT_TIME', currentTime);
    },
    setSwipeFloorIndex: (store, swipeFloorIndex) => {
      store.commit('UPDATE_SWIPE_FLOOR_INDEX', swipeFloorIndex);
    },
  },
  modules: {},
});
