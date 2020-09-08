<template>
	<div class="news">
		<advantage-item class="animate__animated" :class="{'animate__swing ' : scrollTop > 1700 }">
			<div slot="header-title">Latest News</div>
			<div slot="title-max">新闻动态</div>
			<div slot="text">
				测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
			</div>
		</advantage-item>

		<div class="transparent animate__animated" :class="{'animate__fadeInUp ' : scrollTop > 1800 }">
			<!-- 轮播 -->
			<div class="news-media">
				<el-carousel class="news-media-carousel">
					<el-carousel-item>
						<img src="~assets/img/image-01-1200x800.jpg" />
					</el-carousel-item>
					<el-carousel-item>
						<img src="~assets/img/image-02-1200x800.jpg" />
					</el-carousel-item>
					<el-carousel-item>
						<img src="~assets/img/image-03-1200x800.jpg" />
					</el-carousel-item>
					<el-carousel-item>
						<img src="~assets/img/image-04-1200x800.jpg" />
					</el-carousel-item>
				</el-carousel>
			</div>
			<!-- 列表 -->
			<div class="news-list">
				<span class="news-list-title">最新动态</span>
				<!-- 列表组件 -->
				<div class="news-list-item">
					<news-item v-for=" (item,index) of newsNum" :key="index">
						<div slot="date">
							<i class="el-icon-alarm-clock" /> 2020/09/01
						</div>
						<div slot="message">
							<i class="el-icon-chat-line-round"></i> 3条评论
						</div>
						<div slot="title">测试文本标题测试文本标题</div>
						<div slot="text">
							测试文本内容测试文本内容，测试文本内容测试文本内容
							测试文本内容测试文本内容，测试文本内容测试文本内容
							测试文本内容测试文本内容，测试文本内容测试文本内容
							测试文本内容测试文本内容，测试文本内容测试文本内容
						</div>
					</news-item>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import AdvantageItem from './AdvantageItem.vue'
	import NewsItem from './NewsItem.vue'

	export default {
		name: "News",
		components: {
			AdvantageItem,
			NewsItem
		},
		data() {
			return {
				newsNum: 4,
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

<style scoped="scoped">
	
	@media screen and (max-width:1000px) {
		.news-media{
			width: 100%;
			max-height: 150px;
			padding-top: 30px;
			padding-bottom: 15px;
		}
		.news-media-carousel{
			overflow: hidden ;
			border-radius: 30px !important;
			height: 220px;
		}
		.news-list {
			padding-top: 125px;
		}
	}
	
	@media screen and (min-width:1000px) {
		.transparent {
			display: flex;
		}
		.news-media {
			width: 50%;
			max-height: 600px;
			padding-top: 30px;
			flex: 1;
		}
		.news-media-carousel {
			border-radius: 30px !important;
			overflow: hidden;
		}
		.news-list {
			padding-top: 30px;
		}
	}

	.news {
		width: 90%;
		padding: 50px 0px;
		max-width: 1920px;
		margin: auto;
	}

	.news-media-carousel img {
		min-width: 100%;
		min-height: 100%;
	}

	.news-list {
		padding-left: 15px;
		flex: 1;
	}

	.news-list-item {
		max-height: 280px;
		overflow: hidden;
		overflow: scroll;
		overflow-x: hidden;
	}
	.news-list-item::-webkit-scrollbar-thumb {
		/*滚动条里面小方块*/
		border-radius: 5px;
		background-color: var(--color-background);
	}
	.news-list-item::-webkit-scrollbar {
		width: 8px;
	}

	.news-list-title {
		color: var(--color-background) !important;
		text-align: center;
		font-weight: 600;
		font-size: 1.05rem;
		line-height: 1.35;
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
	}
</style>
