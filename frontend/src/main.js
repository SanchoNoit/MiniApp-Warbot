import { createApp } from "vue";
import App from "@/App.vue";

// Import custom components
import { createWebHashHistory, createRouter } from "vue-router";

// Import bootsptrap's custom CSS
import "@/scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faJetFighter } from "@fortawesome/free-solid-svg-icons";

library.add(faJetFighter);

const Home = () => import("@/components/Home.vue");
const NotFound = () => import("@/components/NotFound.vue");
const Conversor = () => import("@/components/Conversor.vue")
const ListaPartida = () => import("@/components/ListaPartida.vue")

// Router
const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home, name: "home" },
  { path: "/conversor", component: Conversor, name: "conversor" },
  { path: "/listaPartida", component: ListaPartida, name: "listaPartida" },
  { path: "/:pathMatch(.*)*", component: NotFound, name: "NotFound" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
