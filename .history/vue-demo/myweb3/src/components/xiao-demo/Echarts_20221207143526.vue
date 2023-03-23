<template>
  <div>
    <div id="canvas" ref="canvas"></div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted, onUnmounted } from "vue";

const { proxy } = getCurrentInstance();

const canvas = ref(); // dom实例
let myChart = null; // echarts实例

onMounted(() => {
  renderChart();
});

const renderChart = () => {
  myChart = proxy.$echarts.init(canvas.value);

  myChart.setOption({
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    legend: {
      data: ["销量"],
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  });
};
</script>

<style lang="less" scoped>
#canvas {
  width: 300px;
  height: 300px;
}
</style>
