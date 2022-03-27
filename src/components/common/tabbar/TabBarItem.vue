<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive"><slot name="tab-bar-icon"></slot></div>
    <div v-else><slot name="tab-bar-active"></slot></div>
    <div :class="{ active: isActive }">
      <slot name="tab-bar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      //   isActive: true,
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
  },
  props: {
    path: String,
  },
  methods: {
    itemclick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  vertical-align: middle;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 2px;
}
.active {
  color: red;
}
</style>