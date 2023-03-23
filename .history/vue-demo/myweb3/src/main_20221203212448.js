import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
 
Vue.use(VideoPlayer)



createApp(App).use(store).use(router).use(VideoPlayer).mount('#app')

