<template>
  <div class="search">
    <input
      type="text"
      class="search__input"
      v-model="keyword"
      @input="search"
      @keyup.enter="Confirm"
    />
    <ul class="search__result" v-if="isShow">
      <li class="search__item" v-for="item in list" @click="selectItem(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 搜索关键字
      keyword: "",
      // 控制是否显示搜索结果
      isShow: false,
      // 搜索结果
      list: [
        "es6进阶 编号001",
        "人工智能编程 编号002",
        "ajax技术 编号003",
        "vue核心技术 编号004",
        "javascript入门到精通 编号005",
        "python入门到精通 编号006"
      ],
    };
  },
  methods: {
    // 搜索
    search() {
      if (!this.keyword) {
        this.isShow = false;
        return;
      }
      this.isShow = true;
      let newList = this.data.filter((item) => {
        return item.includes(this.keyword);
      });
      this.list = newList;
    },
    // 选择关键字
    selectItem(item) {
      this.keyword = item;
      this.isShow = false;
    },
    // 回车提交
    Confirm() {
      // do something
    },
  },
};
</script>
