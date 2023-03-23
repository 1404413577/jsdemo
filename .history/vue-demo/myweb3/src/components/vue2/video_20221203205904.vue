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
};
</script>

<style></style>
