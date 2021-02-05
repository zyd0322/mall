<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <home-swiper :banner="banner"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :title="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
      </scroll>
      //修饰符native 需要监听组件的原生时间时 就需要native
      <back-top @click.native="backClick"></back-top>

  </div>
</template>

<script>
  //子组件

  import HomeSwiper from './chidComps/HomeSwiper';
  import RecommendView from './chidComps/RecommendView';
  import FeatureView from './chidComps/FeatureView'
  //公共组件
  import NavBar from 'common/navbar/NavBar';
  import TabControl from 'content/TabControl/TabControl'
  import GoodsList from 'content/goods/GoodsList'
  import Scroll from 'common/scroll/Scroll'
  import BackTop from 'common/backtop/BackTop'
  //方法
  import {
    getHomeMultidata,
    getHomeData
  } from "network/home";

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banner: [],
        recommends: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        currentType: 'pop'
      }
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata()
      //2.请求商品数据
      this.getHomeData('pop')
      this.getHomeData('new')
      this.getHomeData('sell')
    },
    //计算属性
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    methods: {
      //事件监听相关
      tabClick(index) {

        switch(index){
          case 0:
          this.currentType = 'pop'
          break
          case 1:
          this.currentType = 'new'
          break
          case 2:
          this.currentType = 'sell'
          break
        }
      },
      backClick(){
      this.$refs.scroll.scrollTo(0,0)
      },
      // 网络请求代码
      getHomeMultidata() {
        getHomeMultidata().then(res => {

          this.banner = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeData(type) {
        const page = this.goods. [type].page + 1
        getHomeData(type, page).then(res => {
          this.goods. [type].list.push(...res.data.list)
          this.goods. [type].page += 1
        })
      }
    }
  }
</script>

<style scoped>
  #home {
   height: 100vh;
   position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 2;
  }

  .content {
  /* overflow: hidden; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  }
</style>
