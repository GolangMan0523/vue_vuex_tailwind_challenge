export default {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    SET_COUNT(state, value) {
      state.count = value
      window.localStorage.setItem("count", value)
    }
  },
  actions: {
    increment({ commit, state }) {
      commit("SET_COUNT", state.count + 1);
    },
    decrement({ commit, state }) {
      commit("SET_COUNT", state.count - 1);
    },
    initStore({ commit }) {
      const count = window.localStorage.getItem("count") || 0
      commit("SET_COUNT", count)
    }
  }
};
  