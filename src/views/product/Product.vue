<template>
	<div class="Product">
		
		<!-- 页头 -->
		<page-header :isShowMenu="isShowMenu" :englishText="englishText" 
			:chineseText="chineseText" :imgSrc="imgSrc"/>
		<div class="public-body" >
			<advantage-item class="active">
				<div slot="header-title">Test</div>
				<div slot="title-max">内容模块</div>
				<div slot="text">
					使用方法：在内容模块引入class：[public-body]即可，已做好PC和移动端适配，使用前请删除本组件！
				</div>
			</advantage-item>
		</div>
		<!-- 底部页脚 -->
		<page-footer></page-footer>
	</div>
</template>

<script>
	
	import PageHeader from 'components/pageHeader/PageHeader.vue'
	import PageFooter from 'components/pageFooter/PageFooter.vue'
	import AdvantageItem from 'views/home/childComponents/AdvantageItem.vue'
	
  export default{
    name:"Product",
		components:{
			PageHeader,
			PageFooter,
			AdvantageItem
		},
		data() {
			return {
				scrollTop: 0,
				isShowMenu: true,
				englishText: "Demo-Test-Demo-Test",
				chineseText: "我是产品中心描述",
				imgSrc: "homepage-mall-solution-bg.jpg"
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
		},
		destroyed() {
			// 离开该页面需要移除这个监听的事件，不然会报错
			window.removeEventListener('scroll', this.handleScroll)
		}
  }
</script>

<style scoped="scoped">
	.active{
		margin: 200px 0;
	}
	
	
</style>
