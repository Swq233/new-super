<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.navbar {
  display: flex;
  height: 44px;
  width: 100%;
  text-align: center;
  line-height: 44px;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
  line-height: 44px;
}
</style>