<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" 
    :key="index" 
    class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="recommend-title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default () {
          /// 对象默认值必须是一个数组
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    padding: 15px 0 15px;
    border-bottom: 8px solid #EEEEEE;
    font-size: 14px;
  }

  .recommend-item {
    flex: 1;
  }

  .recommend-item img {
    width: 80px;
    height: 80px;
  }
</style>
