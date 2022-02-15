import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import store from "./../store";

export default (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void => {
  if (store.getters["users/getLoggedIn"]) {
    next();
  } else {
    next("/account");
  }
};
