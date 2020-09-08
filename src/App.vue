<template>
	<div id="app">
		<router-view></router-view>
		<!-- 回到顶部 -->
		<backtop />
	</div>
</template>

<script>
	import Backtop from 'components/backTop/BackTop.vue'
	
	export default {
		name: 'App',
		components:{
			Backtop,
		}
	}
</script>

<style>
	@import url("assets/css/base.css");
	
	#nprogress .bar{
		background: #00aaff !important;
		height: 3px !important;
	}
</style>
