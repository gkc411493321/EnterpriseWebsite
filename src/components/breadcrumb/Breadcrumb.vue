<template>
	<el-breadcrumb separator="/">
		<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		<el-breadcrumb-item v-for="(item,index) in titleList" :key="index">
			<router-link :to="item.redirect||item.path">{{item.meta.title}}</router-link>
		</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script>
	export default {
		data() {
			return {}
		},
		computed: {
			titleList() {
				return (this.$route && this.$route.matched) || [] // 将matched数组返回出去 或者 返回空数组
			}
		}
	}
</script>

<style>
	.el-breadcrumb {
		font-size: 14px;
		line-height: 1;
		width: 100%;
		line-height: 65px;
		background-color: #e9eff4;
		text-align: center;
	}
	.el-breadcrumb__item{
		float: none;
	}
</style>
