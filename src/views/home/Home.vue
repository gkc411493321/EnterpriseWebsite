<template>
	<div>
		<!-- PC导航 -->
		<div v-if="screenWidth > 1000" class="nav" :class="{'activ':!isShowMenu}">
			<nav-bar class="pc-nav" :isShowMenu="isShowMenu" />
		</div>
		<!-- 移动端导航 -->
		<div v-else="screenWidth < 1000" class="nav">
			<nav-bar-move />
		</div>
		<!-- 轮播 -->
		<carousel />
		<!-- 公司优势 -->
		<advantage :scrollTop="scrollTop" />
		<!-- 数字轮播 -->
		<merit :scrollTop="scrollTop"/>
		<!-- 产品组件 -->
		<product :scrollTop="scrollTop"/>
		<!-- 新闻中心 -->
		<News :scrollTop="scrollTop"/>
		<!-- 合作伙伴 -->
		<cooperate :scrollTop="scrollTop"/>
		<!-- 加入我们 -->
		<join-us />
		<!-- 底部页脚 -->
		<page-footer></page-footer>
	</div>

</template>

<script>
	import NavBar from 'components/navBar/NavBar.vue'
	import Carousel from 'components/carousel/Carousel.vue'
	import NavBarMove from 'components/navBar/NavBarMove.vue'
	import PageFooter from 'components/pageFooter/PageFooter.vue'
	
	import Advantage from 'views/home/childComponents/Advantage.vue'
	import Product from 'views/home/childComponents/Product.vue'
	import News from 'views/home/childComponents/News.vue'
	import Cooperate from 'views/home/childComponents/Cooperate.vue'
	import Merit from 'views/home/childComponents/Merit.vue'
	import JoinUs from 'views/home/childComponents/JoinUs.vue'
	

	export default {
		name: "",
		components: {
			NavBar,
			Carousel,
			NavBarMove,
			Advantage,
			Product,
			News,
			Cooperate,
			Merit,
			JoinUs,
			PageFooter
		},
		data() {
			return {
				scrollTop: 0,
				screenWidth: document.body.clientWidth,
				screenHeight: document.body.clientHeight,
				isShowMenu: true,
			}
		},
		
		methods: {
			// 保存滚动值，这是兼容的写法
			handleScroll() {
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				this.scrollTop >= 100 ? this.isShowMenu = false : this.isShowMenu = true
			},
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll, true)
			this.screenWidth = document.body.clientWidth;
			this.screenHeight = document.body.clientHeight;
			window.onresize = () => {
				return (() => {
					this.screenWidth = document.body.clientWidth;
					this.screenHeight = document.body.clientHeight;
				})();
			};
		},
		destroyed() {
			// 离开该页面需要移除这个监听的事件，不然会报错
			window.removeEventListener('scroll', this.handleScroll)
		}
	}
</script>

<style scoped="scoped">
	.nav {
		width: 100%;
		height: 80px;
		position: fixed;
		top: 0;
		z-index: 999;
	}

	.pc-nav {
		width: 80%;
		position: fixed;
		top: 0;
		left: 10%;
	}

	.activ {
		-webkit-animation: bg-color 0.5s forwards;
	}

	@-webkit-keyframes bg-color {
		0% {
			background-color: rgba(4 210 200, 0.0);
		}
		20% {
			background-color: rgba(4 210 200, 0.2);
		}
		40% {
			background-color: rgba(4 210 200, 0.4);
		}
		60% {
			background-color: rgba(4 210 200, 0.6);
		}
		80% {
			background-color: rgba(4 210 200, 0.8);
		}
		100% {
			background-color: #313645;
		}
	}
</style>
