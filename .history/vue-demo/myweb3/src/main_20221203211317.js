import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require('@/video.js/dist/video-js.css');
require('@/vue-video-player/src/custom-theme.css');
import VideoPlayer from 'vue-video-player'



createApp(App).use(store).use(router).use(VideoPlayer).mount('#app')

