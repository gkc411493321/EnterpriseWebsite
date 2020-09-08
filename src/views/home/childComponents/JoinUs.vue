<template>
	<div class="join-us">
		<div class="container">
			<!-- <span class="container-text">{{text}}</span> -->
			<marquee :lists="lists"></marquee>
		</div>
	</div>
</template>

<script>
	
	import Marquee from 'components/marquee/Marquee.vue'
	
	export default {
		name: "JoinUs",
		components:{
			Marquee
		},
		data() {
			return {
				lists: [
					'公司标语公司标语公司标语公司标语公司标语公司标语',
					
				]
			}
		}
	}
</script>

<style scoped="scoped">
	@media screen and (max-width: 1000px) {
		.container {
			max-width: 960px;
		}

		.container-text {
			font-size: 20px;
			font-weight: 300;
		}
	}

	@media screen and (min-width: 1000px) {
		.container {
			max-width: 1200px;
		}

		.container-text {
			font-size: 30px;
			font-weight: 700;
		}
	}

	.join-us {
		width: 100%;
		color: #FFFFFF;
		background-color: var(--color-background);
		padding: 20px 0;
		max-width: 1920px;
		margin: auto;
	}

	.container {
		width: 100%;
		padding-right: 0.9375rem;
		padding-left: 0.9375rem;
		margin-right: auto;
		margin-left: auto;
		text-align: center;
	}
</style>
