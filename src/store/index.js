import { createStore } from 'vuex';

export default createStore({
  state: {
    currentFloor: 0,
    timeIndex: 0,
    scrollIndex: 0,
    navHl: {
      desc: null,
      fl: null,
      link: null,
      name: null,
      path: null,
      text: null,
      time: null,
    }
  },

  getters: {
    getCurrentFloor: (state) => state.currentFloor,
    getTimeIndex: (state) => state.timeIndex,
    getScrollIndex: (state) => state.scrollIndex,
    getNavHl: (state) => state.navHl,
  },

  mutations: {
    UPDATE_CURRENT_FLOOR: (state, currentFloor) => {
      state.currentFloor = currentFloor;
    },
    UPDATE_TIME_INDEX: (state, timeIndex) => {
      state.timeIndex = timeIndex;
    },
    UPDATE_SCROLL_INDEX: (state, scrollIndex) => {
      state.scrollIndex = scrollIndex;
    },
    UPDATE_NAV_HL: (state, navHl) => {
      state.navHl.desc = navHl?.desc;
      state.navHl.fl = navHl?.fl;
      state.navHl.link = navHl?.link;
      state.navHl.name = navHl?.name;
      state.navHl.path = navHl?.path;
      state.navHl.text = navHl?.text;
      state.navHl.time = navHl?.time;
    },
  },

  actions: {
    setCurrentFloor: (store, currentFloor) => {
      store.commit('UPDATE_CURRENT_FLOOR', currentFloor);
    },
    setTimeIndex: (store, timeIndex) => {
      store.commit('UPDATE_TIME_INDEX', timeIndex);
    },
    setScrollIndex: (store, scrollIndex) => {
      store.commit('UPDATE_Scroll_INDEX', scrollIndex);
    },
    setNavHl: (store, navHl) => {
      store.commit('UPDATE_NAV_HL', navHl);
    },
  },
  modules: {},
});
