<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">首页</div>
    </nav-bar>

    <el-carousel height="200px">
      <el-carousel-item class="el-carousel-item" v-for="item in banner">
        <img :src="item.image">
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultiData} from "@/network/home";

export default {
  name: "Home",
  data() {
    return {
      bannerHeight: null,
      banner: [],
      recommends: [],
    }
  },
  components: {
    NavBar
  },
  created() {
    getHomeMultiData().then(res => {
      this.banner = res.data.banner.list;
      this.recommends = res.data.recommend.list;

    })
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style scoped>
  @import "~assets/css/base.css";

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .el-carousel-item img {
    height: 200px;
  }


</style>
