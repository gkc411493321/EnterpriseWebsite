<template>
	<div class="product">
		<div class="container">
			<advantage-item class="up animate__animated" :class="{'animate__zoomInDown ' : scrollTop > 850 }">
				<div slot="header-title">Products</div>
				<div slot="title-max">我们优秀的产品</div>
				<div slot="text">
					测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
				</div>
			</advantage-item>
			<product-item :scrollTop="scrollTop" />
		</div>
	</div>
</template>

<script>
	
	import AdvantageItem from './AdvantageItem.vue'
	import ProductItem from './ProductItem.vue'
	
	export default {
		name: "Product",
		components:{
			AdvantageItem,
			ProductItem
		},
		props:{
			scrollTop:{
				type:Number,
				default:0
			},
		}
	}
</script>

<style scoped="scoped">
	@media screen and (max-width:1000px) {
		.product {
			width: 100%;
			flex: 1;
		}
		.container {
			padding-top: 100px;
			padding-bottom: 100px;
		}
		.up{
			max-width: 300px;
		}
	}

	@media screen and (min-width:1000px) {
		.product {
			width: 100%;
			flex: 1;
		}
		.product {
			min-width: 1200px;
		}
		.container {
			padding-top: 50px;
			padding-bottom: 50px;
		}
		.up{
			max-width: 830px;
		}
	}
	.product{
		max-width: 1920px;
		margin: auto;
		background-color: #e9eff4;
	}
	.up{
		margin-left: auto;
		margin-right: auto;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	.container {
		width: 100%;
		margin-right: auto;
		margin-left: auto;
		padding-top: 50px;
		padding-bottom: 50px;
	}
</style>
