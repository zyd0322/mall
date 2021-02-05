<template>
	<div class="tab-control">
		<div class="tab-control-item" v-for="(item,index) in title" 
    :class="{active : index === currentindex }"
    :key="index"
     @click="itemClick(index)">
			<span >{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"TabControl",
		props:{
			title:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				currentindex:0
			}
		},
		methods:{
			itemClick(index){
				this.currentindex = index;
        this.$emit('tabClick',index)//往外面提交组件里面发送的变化
			}
		}
	}
</script>

<style scoped>
	.tab-control{
		display: flex;
		font-size: 16px;
		text-align: center;
		height: 40px;
		line-height: 40px;
		background-color: #fff;
	}
	.tab-control-item{
		flex: 1;
	}
	.active{
		color:var(--color-higt-text) ;
	}
	.active span{
		border-bottom: 3px solid var(--color-tint);
	}
	.tab-control-item span {
		padding:5px;
	}
</style>
