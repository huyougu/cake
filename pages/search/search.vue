<template>
	<view>
		<view class="search-bar">
			<u-search placeholder="日照香炉生紫烟" v-model="keyword"  :clearabled="true" border-color="black"  ></u-search>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	body{
		background-color: #fff;
	}
.search-bar{
	height: 100rpx;
	background-color: #fff;
	display: flex;
	padding-left: 30rpx;
	u-search{
		align-items: center;
		
	}
}
</style>
