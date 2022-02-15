import { createStore } from "vuex";
import PostsModule from "./posts.module";
import UsersModule from "./users.module";

export default createStore({
  modules: {
    users: UsersModule,
    posts: PostsModule,
  },
});
