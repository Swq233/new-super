<template>
  <div class="recommends">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recommendsitem"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        [];
      },
    },
  },
};
</script>

<style>
.recommends {
  display: flex;
  background: #fff;
  margin-top: 6px;
  text-align: center;
  margin-bottom: 8px;
  width: 100%;
}
.recommendsitem {
  flex: 1;
  margin: 5px 0 30px 0;
}
.recommends img {
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
}
</style>