import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import AboutView from "./views/AboutView.vue";
import AccountView from "./views/AccountView.vue";
import ExamplesView from "./views/ExamplesView.vue";
import GridView from "./views/GridView.vue";
import protectedRoute from "./middlewares/protected";
import StartPageView from "./views/StartPageView.vue";
import VTableView from "./views/VTableView.vue";
import Vue3TableLiteView from "./views/Vue3TableLiteView.vue";
import VueMasteryRealWorldVue3 from "../src/views/VueMasteryRealWorldVue3.vue";
import VueMasterySocksView from "./views/VueMasterySocksView.vue";

import about from "../src/VueMastery_RealWorlVue3/components/AboutV.vue";
import EventList from "../src/VueMastery_RealWorlVue3/components/EventList.vue";
import EventDetails from "../src/VueMastery_RealWorlVue3/components/EventDetails.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "StartPage",
    component: StartPageView,
  },
  {
    path: "/examples",
    name: "Examples",
    component: ExamplesView,
  },
  {
    path: "/account",
    name: "Account",
    component: AccountView,
  },
  {
    path: "/vtable",
    name: "VTable",
    component: VTableView,
    beforeEnter: protectedRoute,
  },
  {
    path: "/v3table",
    name: "V3TableLite",
    component: Vue3TableLiteView,
    beforeEnter: protectedRoute,
  },
  {
    path: "/socks",
    name: "Socks",
    component: VueMasterySocksView,
  },
  {
    path: "/grid",
    name: "Grid",
    component: GridView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/realworldvue3",
    name: "Realworldvue",
    component: VueMasteryRealWorldVue3,
    children: [
      {
        path: "event",
        name: "EventList",
        component: EventList,
      },
      {
        path: "event/:id",
        name: "EventDetails",
        component: EventDetails,
      },
      {
        path: "about",
        name: "AboutComp",
        component: about,
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
