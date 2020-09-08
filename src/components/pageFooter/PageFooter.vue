<template>
	<div class="footer">
		<!-- up -->
		<div class="footer-up">
			<!-- 左侧超链 -->
			<div class="footer-up-left">
				<div class="footer-up-left-item" v-for="(item, index) of num" :key="index">
					<h2>关于我们</h2>
					<div>测试标题</div>
					<div>测试标题</div>
					<div>测试标题</div>
					<div>测试标题</div>
					<div>测试标题</div>
					<div>测试标题</div>
				</div>
			</div>
			<!-- 右侧图标 -->
			<div class="footer-up-right">
				<div class="footer-up-right-img">
					<img src="../../assets/img/home/logo-test.png" />
				</div>
				<div class="footer-up-right-text">
					<span>电话：280-00000000</span>
				</div>
				<div class="footer-up-right-text">
					<span>邮箱：0000000000@163.com</span>
				</div>
				<div class="footer-up-right-text">
					<span>地址：测试地址测试地址测试地址</span>
				</div>
				
			</div>
		</div>
		<!-- down -->
		<div class="footer-down">
			@XXXXXXXX版权所有-2020
		</div>
	</div>
</template>

<script>
  export default{
    name:"PageFooter",
		data(){
			return{
				num: 5
			}
		}
  }
</script>

<style scoped="scoped">
	@media screen and (max-width:1000px) {
		.footer-up-left{
			display: none;
		}
		.footer-up-left-item{
			display: none;
		}
	}
	@media screen and (min-width:1000px) {
		.footer-up-left{
			width: 60%;
			height: 100%;
			display: flex;
			font-size: 10px;
			text-align: center;
		}
		.footer-up-left-item{
			flex: 1;
		}
		.footer-up-left-item div{
			padding-top: 10px;
		}
		.footer-up-left-item div:hover{
			color: var(--color-background);
			cursor: pointer;
		}
	}
	
	.footer{
		width: 100%;
		height: 100%;
		background-color: #e9eff4;
		max-width: 1920px;
		margin: auto;
		padding-top: 50px;
	}
	.footer-up{
		width: 100%;
		height: 70%;
		display: flex;
	}
	.footer-down{
		width: 100%;
		height: 30%;
		background-color: #252B3A;
		font-size: 12px;
		text-align: center;
		margin-top: 30px;
		color: #FFFFFF;
		padding: 10px 0;
	}
	
	
	
	.footer-up-right{
		text-align: center;
	}
	.footer-up-right-img img{
		width: 50%;
	}
	.footer-up-right-text{
		padding-left: 15px;
		padding-bottom: 10px;
	}
</style>
