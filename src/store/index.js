import { createStore } from 'vuex';

export default createStore({
  state: {
    currentFloor: -1,
    currentTime: {
      limL: null,
      limH: null,
    },
    navHl: {
      desc: null,
      fl: null,
      name: null,
      path: null,
      time: null
    }
  },

  getters: {
    getCurrentFloor: (state) => state.currentFloor,
    getCurrentTime: (state) => state.currentTime,
    getNavHl: (state) => state.navHl,
  },

  mutations: {
    UPDATE_CURRENT_FLOOR: (state, currentFloor) => {
      state.currentFloor = currentFloor;
    },
    UPDATE_CURRENT_TIME: (state, currentTime) => {
      state.currentTime.limL = currentTime.limL;
      state.currentTime.limH = currentTime.limH;
    },
    UPDATE_NAV_HL: (state, navHl) => {
      state.navHl.desc = navHl?.desc;
      state.navHl.fl = navHl?.fl;
      state.navHl.name = navHl?.name;
      state.navHl.path = navHl?.path;
      state.navHl.time = navHl?.time;
    },
  },

  actions: {
    setCurrentFloor: (store, currentFloor) => {
      store.commit('UPDATE_CURRENT_FLOOR', currentFloor);
    },
    setCurrentTime: (store, currentTime) => {
      store.commit('UPDATE_CURRENT_TIME', currentTime);
    },
     setNavHl: (store, navHl) => {
      store.commit('UPDATE_NAV_HL', navHl);
    },
  },
  modules: {},
});
