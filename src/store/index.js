import { createStore } from 'vuex';

export default createStore({
  state: {
    currentFloor: 0,
    timeIndex: 0,
    scrollIndex: 0,
    listImg: [
      {
        desc: "800",
        floorLocation: "0",
        name: "GF-01 21 june",
        src: "/img/GF-01.5820a7c4.jpg",
        text: "Ground Floor | 8:00am | June 21st",
        time: "morning",
        timeIndex: 0,
      },
      {
        desc: "800",
        floorLocation: "0",
        name: "GF-02 21 june",
        src: "/img/GF-02.60b95f6c.jpg",
        text: "Ground Floor | 8:00am | June 21st",
        time: "morning",
        timeIndex: 0,
      },
      {
        desc: "1655",
        floorLocation: "0",
        name: "GF-03 15 january",
        src: "/img/GF-03.25ad4959.jpg",
        text: "Ground Floor | 4:55pm | January 15st",
        time: "afternoon",
        timeIndex: 2,
      }
    ],
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
    getlistImg: (state) => state.listImg,
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
    UPDATE_LIST_IMG: (state, listImg) => {
      state.listImg = listImg;
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
    setlistImg: (store, listImg) => {
      store.commit('UPDATE_LIST_IMG', listImg);
    },
    setNavHl: (store, navHl) => {
      store.commit('UPDATE_NAV_HL', navHl);
    },
  },
  modules: {},
});
