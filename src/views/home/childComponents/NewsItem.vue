<template>
	<div class="news-item">
		<!-- 小组件 -->
		<div class="news-item-assembly">
			<span>
				<slot name="date"></slot>
			</span>
			<span>
				<slot name="message"></slot>
			</span>
		</div>
		<!-- 标题 -->
		<div class="news-item-title">
			<slot name="title"></slot>
		</div>
		<!-- 简介 -->
		<div class="news-item-text">
			<slot name="text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "NewsItem",
	}
</script>

<style scoped="scoped">
	
	.news-item {
	   position: relative;
	 }
	 .news-item::after {
	   content: '';
	   position: absolute;
	   left: 0;
	   top: 0;
	   bottom: 0;
	   right: 0;
	   transition: .3s;
	   opacity: .3;
	   background: var(--color-background);
	   transform-origin: left;
	   transform: scaleX(0);
	 }
	
	 .news-item:hover::after {
	   transform: scaleX(1);
	 }
	 .news-item{
		 border: none;
		 outline: none;
		 cursor: pointer;
		 border-bottom: 1px solid #bcbcbcf8;
		 padding-bottom: 10px;
	 }

	.news-item-assembly {
		display: flex;
		flex: 1;
		margin-top: 15px;
		font-family: "Montserrat", sans-serif;
		font-size: 0.75rem;
		font-weight: 400;
		line-height: 1.6;
		color: #595959;
	}

	.news-item-assembly span {
		margin-right: 25px;
	}
	.news-item-assembly i{
		color: #ff9900;
	}
	.news-item-title{
		font-weight: 700;
		font-size: 20px
	}
	.news-item-text{
		color: #a8a8a8;
	}
</style>
