<template>
  <div style="display: flex">
    <!--  原生video标签，controls表示为可控制视频暂停、跳跃、播放  -->
    <video
      id="media"
      class="media"
      height="600"
      width="900"
      controls
      :src="videoList[videoNow]"
    ></video>
    <div>
      <!-- :class和index判断正在播放哪一个，并改变颜色  -->
      <div
        v-for="(item, index) in videoName"
        @click="changeVideo(index)"
        :class="{ showNow: index === videoNow }"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoShow",
  data() {
    return {
      //记录正在播放哪一个
      videoNow: 0,
      //存放视频url数组
      videoList: [],
      //存放视频名称数组
      videoName: [],
    };
  },
  mounted() {
    this.getVideos();
    this.goNext();
  },
  methods: {
    //模拟获取视频url网络请求
    getVideos() {
      this.videoList = ["url0", "url1", "url2", "url3", "url4", "url5"];
      this.videoName = ["name0", "name1", "name2", "name3", "name4", "name5"];
    },
    //切换视频
    changeVideo(index) {
      this.videoNow = index;
    },
    //自动播放下一个和准备就绪就播放
    goNext() {
      const that = this;
      let media = document.getElementById("media");
      //监听视频准备完毕马上播放，不需要可以注释
      media.oncanplay = function () {
        media.play();
      };
      //监听播放完成后马上播放下一个，不需要可以注释
      media.addEventListener("ended", function () {
        //判断视频url数量,播放完最后一个自动播放第一个
        if (that.videoNow < that.videoList.length - 1) {
          that.videoNow++;
        } else {
          that.videoNow = 0;
        }
      });
    },
  },   
};
</script>

<style scoped>
.media {
  background-color: black;
}
.showNow {
  color: pink;
}
</style>
