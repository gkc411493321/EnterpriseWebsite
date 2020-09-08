<template>
	<div class="advantage-item">
		<div class="header-title">
			<slot name="header-title"></slot>
		</div>

		<div class="header-icon">
			<slot name="header-icon"></slot>
		</div>

		<div class="title-max">
			<slot name="title-max"></slot>
		</div>

		<div class="title-min">
			<slot name="title-min"></slot>
		</div>

		<div class="text">
			<slot name="text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "AdvantageItem",
	}
</script>

<style scoped="scoped">
	.advantage-item {
		width: 100%;
	}

	.header-title {
		color: var(--color-background) !important;
		text-align: center;
		font-weight: 600;
		font-size: 1.05rem;
		line-height: 1.35;
	}

	.title-max {
		margin-top: 0.58438rem;
		font-size: 1.925rem;
		line-height: 1.2;
		font-weight: 700;
		color: #42495b;
		text-align: center;
	}

	.title-min {
		margin-top: 1.03125rem;
		font-size: 1.1375rem;
		line-height: 1.1;
		font-weight: 700;
		color: #42495b;
		text-align: center;
	}

	.text {
		font-size: 1rem;
		line-height: 1.65;
		margin-top: 0.75625rem;
		font-family: "Montserrat", sans-serif;
		font-weight: 400;
		color: #595959;
		text-align: center;
	}

	.header-icon {
		width: 100%;
		text-align: center;
		line-height: 1;
		font-size: 4.375rem;
		color: ##42495b;
	}
</style>
