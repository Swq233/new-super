<template>
  <div id="home">
    <nav-bar class="homenav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swier :banners="banners"></home-swier>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature></feature>
    <tab-control :titles="['流行', '新款', '精选']"></tab-control>
    <ul>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
    </ul>
    <ul>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
    </ul>
    <ul>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
    </ul>
    <ul>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
    </ul>
    <ul>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
    </ul>
  </div>
</template>

<script>
import HomeSwier from "./childComps/HomeSwier.vue";
import HomeRecommendView from "./childComps/HomeRecommendView.vue";
import Feature from "./childComps/Feature.vue";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/TabControl/TabControl.vue";

import { getHomeMultidata } from "network/home";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwier,
    HomeRecommendView,
    Feature,
    TabControl,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    // 请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style>
#home {
  padding-top: 44px;
}
.homenav {
  background-color: var(--color-tint);
  color: #fff;
  height: 44px;
  width: 100%;
  line-height: 44px;
  margin-bottom: 2px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
}
</style>