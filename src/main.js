import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import * as CoIcons from "oh-vue-icons/icons/co";

const Fa = Object.values({ ...FaIcons });
const Co = Object.values({ ...CoIcons });
addIcons(...Fa, ...Co);

createApp(App)
    .use(router)
    .use(store)
    .component("v-icon", OhVueIcon)
    .mount('#app')
