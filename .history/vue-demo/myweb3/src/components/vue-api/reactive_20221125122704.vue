<template>
  <h2>{{ count }}</h2>
  <button @click="btnClick">累加</button>
  <p>姓名：{{ obj.username }}</p>
  <button @click="btnClick1">修改姓名</button>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    // 使用reactive
    let obj = reactive({
      username: "Jack",
    });
    let btnClick1 = () => {
      obj.username = "Mary";
    };
    return { ...clickCountFn(), obj, btnClick1 };
  },
};

function clickCountFn() {
  const count = ref(1);
  let btnClick = () => {
    count.value++;
  };
  return { count, btnClick };
}
</script>

<!-- reactive函数和ref作用非常接近，但是它的参数是一个对象，
  我们可以在对象中定义其方法，而通过这个形式，
  就不需要再对其进行进行 .value 调用了。 -->
