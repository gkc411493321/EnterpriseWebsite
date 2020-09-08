<template>
	<div class="navbar" >
		<div class="navbar-logo">
			<img src="~assets/img/logo.png" />
		</div>
		<div class="navbar-cell"></div>
		<div class="navbar-el-nav">
			<nav-bar-item :isShowMenu="isShowMenu"/>
		</div>
	</div>
</template>

<script>
	import NavBarItem from './NavBarItem.vue'
  export default{
    name:"",
		components:{
			NavBarItem
		},
		props:{
			isShowMenu:{
				type: Boolean,
				default: true
			}
		}
  }
</script>

<style >
	.navbar{
		width: 100%;
		height: 100px;
		display: flex;
		z-index: 999;
	}
	.navbar-logo{
		width: 20%;
	}
	.navbar-cell{
		margin-right: 10%;
	}
	.navbar-el-nav{
		width: 75%;
	}
	.navbar-logo img{
		width: 160px;
		padding-top: 20px;
	}
	
</style>
