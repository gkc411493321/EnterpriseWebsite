<template>
  <div class="back-top animate__animated"
		:class="{'animate__zoomIn':isShowBack,'animate__bounceOut': !isShowBack}"
		@click="backTop">
		<Icon type="ios-arrow-up"></Icon>
  </div>
</template>

<script>
  export default{
    name:"BackTop",
		data(){
			return{
				scrollTop:0,
				isShowBack:false
			}
		},
		methods: {
			// 保存滚动值，这是兼容的写法
			handleScroll() {
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				this.scrollTop > 200 ? this.isShowBack = true : this.isShowBack = false
			},
			backTop(){
				window.scrollTo({
				  top:0,
				  behavior:'smooth'
				})
			}
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

<style scoped>
  .back-top{
		border-radius: 50%;
		width: 40px;
		height: 40px; 
		line-height: 35px;
		background-color: var(--color-background);
    position: fixed;
    right: 40px;
    bottom: 55px;
		color: #FFFFFF;
		z-index: 999;
		font-size: 40px;
		transition: all 0.2s, transform 0.2s cubic-bezier(0.5, 0, 1, 2);
  }
	.back-top:hover {
		cursor:pointer;
		background-color: #343434;
	}
	


</style>
