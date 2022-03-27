<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="item"
      class="tabcontrol-item"
      :class="{ active: index === currentItem }"
      @click="clickitem(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        [];
      },
    },
  },
  data() {
    return {
      currentItem: 0,
    };
  },
  methods: {
    clickitem(index) {
      this.currentItem = index;
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.tabcontrol-item {
  flex: 1;
}
.active {
  color: red;
}
.active span {
  border-bottom: 1px solid red;
  padding: 5px;
}
</style>