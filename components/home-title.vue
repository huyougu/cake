<template>
	<view>
		<view class="padding flex justify-between align-center title">
			<text class="iconfont icon-canju"></text>
		<view class="fs-28">
			{{title}}
			<view>  {{enTitle}}</view>
		</view>
		
		<view class="fs-14">
		 {{enTit}}
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"home-title",
		props:['title','enTitle','enTit'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.icon-canju{
		font-size: 50upx;
	}
	.title{
		height: 100upx;
		padding-top: 50upx;
	}
</style>