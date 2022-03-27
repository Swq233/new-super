<template>
  <div id="home">
    <nav-bar class="homenav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swier :banners="banners"></home-swier>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwier from "./childComps/HomeSwier.vue";
import HomeRecommendView from "./childComps/HomeRecommendView.vue";
import { getHomeMultidata } from "network/home";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwier,
    HomeRecommendView,
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
.homenav {
  background-color: var(--color-tint);
  color: #fff;
  margin-bottom: 2px;
}
</style>