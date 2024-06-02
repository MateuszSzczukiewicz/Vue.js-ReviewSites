import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";
import Home from "@views/Home.vue";
import BookReviews from "@views/BookReviews.vue";
import FilmReviews from "@views/FilmReviews.vue";
import GameReviews from "@views/GameReviews.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/book-reviews", component: BookReviews },
  { path: "/film-reviews", component: FilmReviews },
  { path: "/game-reviews", component: GameReviews },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
