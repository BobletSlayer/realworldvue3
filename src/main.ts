import App from "./App.vue";
import { createApp } from "vue";
import i18n from "./plugins/i18n";
import routes from "./routes";
import store from "./store";
import vuetify from "./plugins/vuetify";

const app = createApp(App);
app.use(routes);
app.use(store);
app.use(i18n);
app.use(vuetify);

app.mount("#app");
