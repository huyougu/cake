<template>
	<view>
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-locationfill text-gray"></text> 广州
			</view>
			<view class="content text-bold">
				CAKE
			</view>
			<view class="action">
				<text class="cuIcon-search " @click="search"></text>
				<u-line direction="col" length="20"  margin="20upx"></u-line>
				<text class="cuIcon-sort "></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"nav-custom",
		data() {
			return {
				
			};
		},
		methods:{
			search(){
			uni.navigateTo({
				url:"/pages/search/search"
			})	
			},
		}
	}
</script>

<style lang="scss">

</style>