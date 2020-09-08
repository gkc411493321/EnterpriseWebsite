<template>
	<div class="cooperate">
		<div class="cooperate-body">
			<advantage-item class="animate__animated" :class="{'animate__swing ' : scrollTop > 1400 }">
				<div slot="header-title">Partners</div>
				<div slot="title-max">合作伙伴</div>
				<div slot="text">
					测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
				</div>
			</advantage-item>
			<div class="cooperate-list">
				<div class="cooperate-item" v-for="(item, index) of imgNum" :key="index">
					<img src="~assets/img/home/logo-test.png" />
					<img src="~assets/img/home/logo-test.png" />
					<img src="~assets/img/home/logo-test.png" />
					<img src="~assets/img/home/logo-test.png" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	import AdvantageItem from './AdvantageItem.vue'
	
	export default {
		name: "Cooperate",
		components:{
			AdvantageItem
		},
		data(){
			return{
				imgNum: 2
			}
		},
		props: {
			scrollTop: {
				type: Number,
				default: 0
			},
		}
	}
</script>

<style>
	
	@media screen and (max-width:1000px) {
		.cooperate-list{
			overflow: hidden;
			overflow: scroll;
		}
		.cooperate-item{
			padding: 0 !important;
		}
	}
	
	@media screen and (min-width:1000px) {
		.cooperate-item{
			padding: 50px 0;
		}
	}
	
	.cooperate{
		width: 100%;
		max-width: 1920px;
		margin: auto;
		background-color: #e9eff4;
	}
	.cooperate-body {
		width: 90%;
		padding: 50px 0px;
		margin: auto;
	}
	.cooperate-item{
		width: 100%;
		display: flex;
		flex: 1;
	}
	.cooperate-item img{
		width: 250px;
		margin: auto;
	}
</style>
