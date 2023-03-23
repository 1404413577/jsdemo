import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueVideo from "vue-video-module";
var VueVideo = require("vue-video-module");

createApp(App).use(store).use(router).mount('#app')

