<template>
  <div class="recommend-tab-bar">
    <div class="recommend-item" v-for="item in recommends" key="item.acm">
      <img :src="item.image">
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>


export default {
  name: "RecommendNav",
  props: {
    recommends: Array,
  }
}
</script>

<style scoped>
.recommend-tab-bar {
  display: flex;
  height: 100px;
  /*left: 0;*/
  /*right: 0;*/
  /*bottom: 0;*/
}

.recommend-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}

.recommend-item img {
  height: 60px;
  width: 60px;
  margin-top: 10px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
