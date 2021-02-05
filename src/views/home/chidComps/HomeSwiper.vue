<template>
  <swiper>
    <swiper-item v-for="(item, id) in banner" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import Swiper from "common/swiper/Swiper";
  import SwiperItem from "common/swiper/SwiperItem";
  export default {
    name: "HomeSwiper",
    props: {
      banner: {
        type: Array,
        default () {
          /// 对象默认值必须是一个数组
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style>
</style>
