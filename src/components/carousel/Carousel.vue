<template>
	<div class="block" ref="homePage">
		<el-carousel :height="clientHeight+'px'">
			<!-- <el-carousel :height="600+'px'" > -->
			<el-carousel-item v-for="(item, index) of num " :key="index">
				<div class="carousel-text">
					<div class="carousel-text-max">DEMO-TEST</div>
					<div class="carousel-text-max">测试文本测试文本测试文本</div>
					<div class="carousel-text-max">测试文本</div>
					<div class="carousel-text-min">
						测试文本测试文本测试文本测试文本测试文本测试文本
						测试文本测试文本测试文本测试文本测试文本测试文本
						测试文本测试文本测试文本测试文本测试文本测试文本
					</div>
					<div class="carousel-button">
						<el-button class="el-buttons" type="primary" round>查看详情</el-button>
					</div>
				</div>
				<img src="~assets/img/bg-4.jpg" />
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				clientHeight: '',
				num: 4
			};
		},
		watch: {
			// 如果 clientHeight 发生改变，这个函数就会运行
			clientHeight() {
				this.changeFixed(this.clientHeight);
			}
		},
		mounted() {
			this.clientHeight = document.documentElement.clientHeight;
			window.onresize = function temp() { // 在窗口或框架被调整大小时触发
				this.clientHeight = document.documentElement.clientHeight;
			};
		},
		methods: {
			changeFixed(clientHeight) { // 动态修改样式
				this.$refs.homePage.style.height = clientHeight + 'px';
			}
		}
	}
</script>

<style scoped="scoped">
	
	@media screen and (max-width:1000px) {
		.carousel-text {
			position: absolute;
			width: 100%;
			z-index: 9999;
			margin: auto;
			top: 50%;
			left: 50%;
			margin-top: -100px;
			margin-left: -150px;
			max-width: 300px;
		}
		.carousel-text-max {
			font-size: 20px;
			color: #FFFFFF;
			text-align: center;
			padding-bottom: 10px;
			font-weight: bold;
		}
		
		.carousel-text-min {
			font-size: 5px;
			color: #FFFFFF;
			text-align: center;
		}
		
		.el-buttons{
			font-weight: bold;
			padding: 10px 10px;
			border-radius: 15px;
			font-size: 10px;
			border-color: var(--color-background);
			background-color: var(--color-background);
		}
	}
	@media screen and (min-width:1000px) {
		
		.carousel-text {
			position: absolute;
			width: 100%;
			z-index: 9999;
			margin: auto;
			top: 50%;
			left: 50%;
			margin-top: -200px;
			margin-left: -400px;
			max-width: 800px;
		}
		.carousel-text-max {
			font-size: 40px;
			color: #FFFFFF;
			text-align: center;
			padding-bottom: 10px;
			font-weight: bold;
		}
		
		.carousel-text-min {
			font-size: 15px;
			color: #FFFFFF;
			text-align: center;
		}
		
		.el-buttons{
			font-weight: bold;
			padding: 20px 50px;
			border-radius: 45px;
			font-size: 20px;
			border-color: var(--color-background);
			background-color: var(--color-background);
		}
		
	}
	
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}


	.el-carousel__item is-active is-animating {
		position: relative;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.block {
		max-width: 1920px;
		margin: auto;
	}

	.block img {
		filter: brightness(70%);
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	

	.carousel-button {
		width: 100%;
		text-align: center;
		padding-top: 45px;
	}
	
	.el-buttons{
		font-weight: bold;
		padding: 20px 50px;
		border-radius: 45px;
		font-size: 20px;
		border-color: var(--color-background);
		background-color: var(--color-background);
	}
	
	.el-buttons:hover{
		border-color: #99A9BF;
		background-color: #99A9BF;
	}
</style>
