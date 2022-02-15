import $axios from "./axios.instance";

export default {
  namespaced: true,
  state: {
    loading: false,
    numberOfPosts: 0,
    posts: [],
  },
  getters: {
    getLoading(state) {
      return state.loading;
    },
    getPosts(state) {
      return state.posts;
    },
    getNumberOfPosts(state) {
      return state.numberOfPosts;
    },
  },
  mutations: {
    setLoading(state, status) {
      state.loading = status;
    },
    setNumberOfPosts(state, numberOfPosts) {
      state.numberOfPosts = numberOfPosts;
    },
    loadPosts(state, posts) {
      state.posts = [...posts];
    },
    clearPosts(state) {
      state.posts = [];
    },
  },
  actions: {
    async createNewPost(context, params) {
      context.commit("setLoading", true);
      $axios
        .post("posts", {
          title: params.title,
          content: params.content,
        })
        .then((res) => {
          if (res && res.data) {
            console.log(res.data.post);
            context.commit("setNumberOfPosts", res.data.count);
          }
          context.commit("setLoading", false);
        })
        .catch((error) => {
          console.error("hiba: " + error);
          context.commit("setLoading", false);
        });
    },
    async editPostById(context, params) {
      context.commit("setLoading", true);
      $axios
        .patch(`posts/${params.id}`, {
          title: params.title,
          content: params.content,
        })
        .then((res) => {
          if (res && res.data) {
            console.log(res.data);
          }
          context.commit("setLoading", false);
        })
        .catch((error) => {
          console.error("hiba: " + error);
          context.commit("setLoading", false);
        });
    },
    async deletePostById(context, params) {
      context.commit("setLoading", true);
      $axios
        .delete(`posts/${params.id}`)
        .then((res) => {
          if (res && res.data) {
            console.log(res.data.status);
            context.commit("setNumberOfPosts", res.data.count);
          }
          context.commit("setLoading", false);
        })
        .catch((error) => {
          console.error("hiba: " + error);
          context.commit("setLoading", false);
        });
    },
    async fetchPosts(context) {
      context.commit("setLoading", true);
      // await context.dispatch('fetchNumberOfPosts');
      $axios
        .get("posts")
        .then((res) => {
          if (res && res.data) {
            context.commit("loadPosts", res.data.posts);
            context.commit("setNumberOfPosts", res.data.count);
          }
          context.commit("setLoading", false);
        })
        .catch((error) => {
          console.error("hiba: " + error);
          context.commit("setLoading", false);
        });
    },
    async fetchPaginatedPosts(context, params) {
      context.commit("setLoading", true);
      // await context.dispatch('fetchNumberOfPosts');
      $axios
        .get(
          `posts/${params.offset}/${params.limit}/${params.order}/${params.sort}/${params.keyword}`
        )
        .then((res) => {
          if (res && res.data) {
            context.commit("loadPosts", res.data.posts);
            context.commit("setNumberOfPosts", res.data.count);
          }
          context.commit("setLoading", false);
        })
        .catch((error) => {
          console.error("hiba: " + error);
          context.commit("setLoading", false);
        });
    },
  },
};
