import VueRouter from "vue-router";
import HomeIndex from "./components/front/HomeIndex.vue";
import MovieIndex from "./components/movies/MovieIndex.vue";
import ActorsIndex from "./components/actors/ActorsIndex.vue";
import ActorDetailIndex from "./components/actors/ActorDetailIndex.vue";

let router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeIndex
        },
        {
            path: "/movie/:id",
            name: "movie",
            component: MovieIndex
        },
        {
            path: "/actors",
            name: "actors",
            component: ActorsIndex
        },
        {
            path: "/actor/:id",
            name: "actor",
            component: ActorDetailIndex
        },
    ]
});

export default router;