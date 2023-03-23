<template>
  <div class="video-container">
    <vue-video ref="video1" :options="videoOptions"></vue-video>
  </div>
</template>

<script>
import VueVideo from "vue-video-module";
var VueVideo = require("vue-video-module");
export default {
  components: {
    VueVideo,
  },
  methods: {
    videoOptions: {
      src: "http://vjs.zencdn.net/v/oceans.mp4",
      poster:
        "http://www.freemake.com/blog/wp-content/uploads/2015/06/videojs-logo.jpg",
      controlBar: true,
      spinner: "circles",
      fullscreen: true,
    },
  },
};
</script>

<style></style>
