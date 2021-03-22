<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">首页</div>
    </nav-bar>

    <el-carousel height="200px">
      <el-carousel-item class="el-carousel-item" v-for="item in banner" :key="item.acm">
        <img :src="item.image">
      </el-carousel-item>
    </el-carousel>

    <div class="search">
      <el-input
                placeholder="搜索商品"
                prefix-icon="el-icon-search">
      </el-input>
    </div>

    <recommend-nav :recommends="recommends">
    </recommend-nav>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultiData} from "@/network/home";
import RecommendNav from "@/views/home/children/RecommendNav";

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
    NavBar,
    RecommendNav
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
  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
  .el-carousel-item img {
    height: 200px;
  }

  .search {
    /*display: flex;*/
    text-align: center;
    margin: 10px 10%;
    width: 300px;
  }

</style>
