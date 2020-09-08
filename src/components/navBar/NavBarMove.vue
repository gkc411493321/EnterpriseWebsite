<template>
	<div class="nav-move">
		<div class="move-icon" @click="drawer = true">
			<i class="el-icon-s-operation"></i>
		</div>
		<div class="move-logo">
			<img src="~assets/img/logo.png" />
		</div>
		<div class="move-icon"></div>
		<el-drawer :custom-class="eldrawer" :show-close="false" :z-index="-1" :visible.sync="drawer" 
			:direction="direction" :before-close="handleClose">
			<div>首页</div>
			<div>新闻中心</div>
			<div>公司简介</div>
			<div>产品中心</div>
			<div>关于我们</div>
			<div>加入我们</div>
		</el-drawer>
	</div>

</template>

<script>
	export default {
		name: "",
		data() {
			return {
				drawer: false,
				direction: 'ttb',
				eldrawer: 'eldrawer',
			}
		},
		methods: {
			handleClose(done) {
				done()
			}
		}
	}
</script>

<style>
	.nav-move {
		display: flex;
		background-color: var(--color-background);
		flex: 1;
		width: 100%;
		height: 44px;
		line-height: 44px;
		font-size: 30px;
		color: #fff;
		text-align: center;
	}

	.move-icon {
		width: 20%;
		height: 44px;
	}

	.move-logo {
		width: 60%;
		display: table-cell;
		vertical-align: middle;
		text-align: center;
	}

	.move-logo img {
		width: 120px;
		height: 30px;
		margin-top: 7px;
	}
	.el-drawer{
		background-color: #343434;
		font-size: 13px;
		font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
	}
	.el-drawer__header{
		margin-bottom: 0;
	}
	.eldrawer{
		background-color: var(--color-background);
		min-height: 38%;
		text-align: center;
	}
</style>
