import $axios from "./axios.instance";

export default {
  namespaced: true,
  state: {
    loading: false,
    loggedIn: false,
    errorMsg: "",
    loggedUser: "",
  },
  getters: {
    getLoading(state) {
      return state.loading;
    },
    getLoggedIn(state) {
      return state.loggedIn;
    },
    getErrorMsg(state) {
      return state.errorMsg;
    },
    getLoggedUser(state) {
      return state.loggedUser;
    },
  },
  mutations: {
    setLoading(state, status) {
      state.loading = status;
    },
    setLoggedIn(state, value) {
      state.loggedIn = value;
    },
    setErrorMsg(state, value) {
      state.errorMsg = value;
    },
    setLoggedUser(state, value) {
      state.loggedUser = value;
    },
  },
  actions: {
    async clearErrorMsg(context) {
      context.commit("setErrorMsg", "");
    },
    async loginUser(context, params) {
      context.commit("setLoading", true);
      $axios
        .post("auth/login", {
          email: params.email,
          password: params.password,
        })
        .then((res) => {
          console.log("Authenticated");
          // alert(`${res.data.name} is logged in`);
          context.commit("setLoggedUser", res.data.name);
          context.commit("setLoggedIn", true);
          context.commit("setLoading", false);
        })
        .catch(() => {
          // alert("Error on Authentication");
          context.commit("setLoggedUser", "");
          context.commit("setLoggedIn", false);
          context.commit("setLoading", false);
          context.commit("setErrorMsg", "Error on Authentication");
        });
    },
    async logOut(context) {
      context.commit("setLoading", true);
      $axios
        .post("auth/logout")
        .then(() => {
          // console.log("Logged out");
          context.commit("setLoggedIn", false);
          context.commit("setLoggedUser", "");
          context.commit("setLoading", false);
        })
        .catch(() => {
          // console.log("Error on Authentication");
          context.commit("setLoggedIn", false);
          context.commit("setLoggedUser", "");
          context.commit("setLoading", false);
        });
    },
  },
};
