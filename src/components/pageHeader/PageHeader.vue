<template>
  <div class="page-header">
    <!-- PC导航 -->
    <div class="nav pc-nav-show" :class="{'activ':!isShowMenu}">
    	<nav-bar class="pc-nav" :isShowMenu="isShowMenu" />
    </div>
    <!-- 移动端导航 -->
    <div class="nav move-nav-show">
    	<nav-bar-move />
    </div>
    <!-- 图片 -->
    <div class="page-header-img">
			<span class="page-header-img-max">{{englishText}}</span>
			<span class="page-header-img-min">{{chineseText}}</span>
      <img :src="require(`../../assets/img/home/${imgSrc}`)" height="500"/>
			<!-- <img :src="require('../../assets/img/home/'+imgSrc')" height="500"/> -->
    </div>
    <!-- 导航面包屑 -->
    <breadcrumb />
  </div>
</template>

<script>
  import NavBar from 'components/navBar/NavBar.vue'
  import NavBarMove from 'components/navBar/NavBarMove.vue'
  import breadcrumb from 'components/breadcrumb/Breadcrumb.vue'

  export default{
    name:"PageHeader",
    components:{
    	NavBar,
    	NavBarMove,
    	breadcrumb,
    },
		props:{
			isShowMenu:{
				type: Boolean, 
				default: true
			},
			englishText:{
				type: String,
				default: ""
			},
			chineseText:{
				type: String,
				default: ""
			},
			imgSrc:{
				type: String,
				default: ""
			}
		}
  }
</script>

<style scoped="scoped">
  @media screen and (max-width:1000px) {
  	.pc-nav-show{
  		display: none;
  	}
  	.nav{ 
  		height: 45px;
  	}
		
		.page-header-img{
			height: 200px;
		}
		
		.page-header-img-max{
			max-width: 600px;
			margin: auto;
			top: 40%;
			left: 50%;
			margin-top: 0px;
			margin-left: -100px;
			font-size: 20px;
		}
		.page-header-img-min{
			max-width: 600px;
			margin: auto;
			top: 55%;
			left: 50%;
			margin-top: 0px;
			margin-left: -80px;
			font-size: 20px;
		}
  }

  @media screen and (min-width:1000px) {
  	.move-nav-show{
  		display: none;
  	}
  	.nav{
  		height: 100px;
  	}
  	.introduction-body{
  		padding-top: 165px;
  	}
		.page-header-img{
			height: 500px;
		}
		
		.page-header-img-max{
			max-width: 800px;
			margin: auto;
			top: 40%;
			left: 50%;
			margin-top: 0px;
			margin-left: -240px;
			font-size: 50px;
		}
		.page-header-img-min{
			max-width: 800px;
			margin: auto;
			top: 55%;
			left: 50%;
			margin-top: 0px;
			margin-left: -200px;
			font-size: 50px;
		}
		.page-header{
			max-width: 1920px;
			margin: auto;
		}
  }

  .nav {
  	width: 100%;
  	position: fixed;
		height: 80px;
  	top: 0;
  	z-index: 999;
  }
  .pc-nav {
  	width: 80%;
  	position: fixed;
  	top: 0;
  	left: 10%;
  }
	
	
	.page-header-img{
		position: relative;
		width: 100%;
		overflow: hidden;
	}
	.page-header-img img{
		width: 100%;
		object-fit: cover;
	}
	
	.page-header-img-max{
		position: absolute;
		width: 100%;
		color: #FFFFFF;
	}
	.page-header-img-min{
		position: absolute;
		width: 100%;
		color: #FFFFFF;
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
