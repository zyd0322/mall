<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  export default{
    name:"Scroll",
    data(){
      return{
        scroll:null
      }
    },
   methods:{
     			scrollStar(){
            console.log(this.$refs.wrapper)
     				this.scroll = new BScroll(this.$refs.wrapper,{
            click:true
     				});

     			},
         

     		},
     		mounted(){
          setTimeout(this.scrollStar(),3000)
            

     		}



  }
</script>

<style>
</style>
