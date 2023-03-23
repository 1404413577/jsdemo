<template>
  <div>
    <videoPlayer
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
    >
    </videoPlayer>
  </div>
</template>

<script>
import { videoPlayer } from "vue-video-player";

export default {
  components: {
    videoPlayer,
  },
};
</script>

<style></style>
