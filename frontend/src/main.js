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
import { faJetFighter, faKhanda } from "@fortawesome/free-solid-svg-icons";

library.add(faJetFighter, faKhanda);

// Pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

// Router

const Home = () => import("@/components/Home.vue");
const NotFound = () => import("@/components/NotFound.vue");
const Conversor = () => import("@/components/Conversor.vue")
const ListaPartida = () => import("@/components/ListaPartida.vue")
const BattlingSouls = () => import("@/components/BattlingSouls.vue")

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home, name: "home" },
  { path: "/conversor", component: Conversor, name: "conversor" },
  { path: "/listaPartida", component: ListaPartida, name: "listaPartida" },
  { path: "/battlingSouls", component: BattlingSouls, name: "battlingSouls"},
  { path: "/:pathMatch(.*)*", component: NotFound, name: "NotFound" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(pinia);
app.mount("#app");
