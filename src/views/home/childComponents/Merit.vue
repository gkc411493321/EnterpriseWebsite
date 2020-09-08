<template>
	<div class="merit">
		<div class="merit-text">
			<div class="text-max">为什么选择我们</div>
			<div class="text-min">
				测试文本测试文本测试文本测试文本测试文本测试文本
				测试文本测试文本测试文本测试文本测试文本测试文本
				测试文本测试文本测试文本测试文本测试文本测试文本
			</div>
			<div class="merit-item" v-for="(item, index) of num " :key="index">
				<div class="merit-container" v-for="(item, index) of num " :key="index">
					<i class="el-icon-date"></i>
					<span class="merit-item-num">
						<countTo :startVal='startVal' :endVal='endVal' :duration='3000' ></countTo>
					</span>
					<div class="merit-item-text">我是描述</div>
				</div>
			</div>
		</div>
		<div class="merit-img">
			<img src="~assets/img/image-02-1200x800.jpg" />
		</div>
	</div>
</template>

<script>
	
	import countTo from "vue-count-to";
	
	export default {
		name: "Merit",
		components:{
			countTo
		},
		data(){
			return{
				startVal: 0,
				endVal: 8000,
				num: 2,
				autoplay: true
			}
		},
		props:{
			scrollTop:{
				type: Number,
				default: 0
			}
		},
		watch:{
			scrollTop: function(a, b){
				if(a > 700){
					this.startVal = 10
				}else{
					this.startVal = 0
				}
			}
		}
	}
</script>

<style scoped="scoped">
	@media screen and (max-width:1000px) {
		.merit-img{
			display: none;
		}
		
		.text-max {
			font-size: 25px;
			padding-bottom: 10px;
			text-align: center;
		}
		
		.text-min {
			font-size: 12px;
			text-align: center;
		}
		.merit-item {
			padding-top: 20px;
			width: 100%;
			display: flex;
			flex: 1;
		}
		
		.merit-item i {
			font-size: 30px;
			margin-right: 15px;
		}
		
		.merit-item-num {
			font-size: 30px;
		}
		
		.merit-item-text {
			font-size: 10px;
			text-align: right;
		}
		.merit-text{
			padding: 25px 25px;
		}
	}

	@media screen and (min-width:1000px) {
		.text-max {
			font-size: 50px;
			padding-bottom: 20px;
			text-align: center;
		}

		.text-min {
			font-size: 15px;
			text-align: center;
		}
		.merit-text {
			width: 60%;
		}
		.merit-item {
			padding-top: 20px;
			width: 100%;
			display: flex;
			flex: 1;
		}
		
		.merit-item i {
			font-size: 60px;
			margin-right: 30px;
		}
		
		.merit-item-num {
			font-size: 60px;
		}
		
		.merit-item-text {
			font-size: 20px;
			text-align: right;
		}
		.merit-text{
			padding: 50px 120px;
		}
	}

	.merit {
		width: 100%;
		max-width: 1920px;
		background-color: var(--color-background);
		margin: auto;
		display: flex;
	}

	.merit-text {
		color: #FFFFFF;
	}

	.merit-img {
		width: 40%;
		overflow: hidden;
	}

	.merit-img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.merit-container {
		margin: auto;
	}
</style>
