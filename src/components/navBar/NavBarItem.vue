<template>
	<Menu mode="horizontal" :theme="theme1" :active-name="activeName">
		<MenuItem :class="{'activ':!isShowMenu,'.ivu-menu-item-selected':!isShowMenu}" name="/home" to="/home">首页</MenuItem>
		<MenuItem :class="{'activ':!isShowMenu}" name="/introduction" to="/introduction">公司简介</MenuItem>
		<MenuItem :class="{'activ':!isShowMenu}" name="/product" to="/product">产品中心</MenuItem>
		<MenuItem :class="{'activ':!isShowMenu}" name="/news" to="/news">新闻中心</MenuItem>
		<MenuItem :class="{'activ':!isShowMenu}" name="/about" to="/about">关于我们</MenuItem>
		<MenuItem :class="{'activ':!isShowMenu}" name="/joinUs" to="/joinUs">加入我们</MenuItem>
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
		props:{
			isShowMenu:{
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
		color: #000000;
		border-bottom: none;
		margin-top: 20px;
		font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
	}

	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item,
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
		font-size: 15px;
		color: #ffffff;
		border-bottom: none;
	}

	.ivu-menu-horizontal.ivu-menu-light:after {
		background: none;
	}
	
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active[data-v-3445dde2],
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item[data-v-3445dde2]:hover,
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active[data-v-3445dde2],
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu[data-v-3445dde2]:hover {
		color: var(--color-text);
		border-bottom: 2px solid var(--color-text);
	}
	
	.ivu-menu-item:hover{
		color:  var(--color-text) !important;
	}
	.activ:hover{
		color: var(--color-text) !important;
		border-bottom: 2px solid var(--color-text) !important;
	}
	
	
</style>
