<template>
	<Menu mode="horizontal" :theme="theme1" :active-name="activeName" :accordion="true">
		<MenuItem key="1" :class="{'activ':!isShowMenu,'.ivu-menu-item-selected':!isShowMenu}" name="/home" to="/home">首页</MenuItem>
		<Submenu style="left: 0px;" name="2">
			<template slot="title">
				关于日达
			</template>
			<MenuItem to="/introduction" name="/introduction">日达简介</MenuItem>
			<MenuItem name="2-2">组织结构</MenuItem>
			<MenuItem name="2-3">日达活动</MenuItem>
		</Submenu>
		<Submenu name="3">
			<template slot="title">
				产品中心
			</template>
			<MenuItem to="/product" name="/product">银行业务系统</MenuItem>
			<MenuItem name="3-2">日达平台系统</MenuItem>
			<MenuItem name="3-3">银行管理应用</MenuItem>
		</Submenu>
		<Submenu name="4">
			<template slot="title">
				服务支持
			</template>
			<MenuItem to="/news" name="/news">服务理念</MenuItem>
			<MenuItem name="4-2">合作伙伴</MenuItem>
		</Submenu>
		<MenuItem key="5" :class="{'activ':!isShowMenu}" name="/about" to="/about">客户</MenuItem>
		<Submenu name="6">
			<template slot="title">
				加入我们
			</template>
			<MenuItem to="/join" name="/join">招聘信息</MenuItem>
		</Submenu>
	</Menu>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				theme1: 'light',
				activeName: this.$route.path
			}
		},
		props: {
			isShowMenu: {
				type: Boolean,
				default: true
			}
		},
		watch: {
			'$route'() {
				this.activeName = this.$route.path
			}
		}
	}
</script>

<style scoped>
	.ivu-menu.ivu-menu-light.ivu-menu-horizontal {
		background-color: rgba(0, 0, 0, 0);
		font-size: 18px;
		color: #b5b5b5;
		border-bottom: none;
		margin-top: 20px;
		font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
	}
	
	>>>.ivu-menu-item{
		min-width: 90px;
		text-align: center;
	}

	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item,
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
		font-size: 15px;
		color: #b5b5b5;
		border-bottom: none;
	}
	.ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item {
		color: #333 !important;
	}

	.ivu-menu-horizontal.ivu-menu-light:after {
		background: none;
	}

	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active[data-v-3445dde2],
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item[data-v-3445dde2]:hover,
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active[data-v-3445dde2],
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu[data-v-3445dde2]:hover {
		border-bottom: none;
		color: #FFFFFF !important;
		background-color: #00AAFF !important;
	}

	.ivu-menu-item:hover {
		color: #FFFFFF !important;
		background-color: #00AAFF !important;
	}

	.activ:hover {
		color: #FFFFFF !important;
		border-bottom: none !important;
		background-color: #00AAFF !important;
	}

	.ivu-menu.ivu-menu-light.ivu-menu-horizontal {
		margin-top: 0;
	}

	.ivu-menu-horizontal {
		height: 80px;
		line-height: 80px;
	}

	>>>.ivu-select-dropdown{
		margin: 0 !important;
		padding: 0 !important;
		border-radius: 0 !important;
		left: 0px !important;
	}
</style>
