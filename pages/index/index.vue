<template>
	<view class="">
		<nav-custom></nav-custom>
		<u-swiper :list="swiper" imgMode=scaleToFill height=180></u-swiper>
		<home-title title="本季推荐" enTitle="Seasonal Recommend" enTit="Seasonal"></home-title>
		<scroll-view scroll-x="true">
			<view>
				<img src="" alt="">
			</view>
		</scroll-view>

		<view class="cont">

			<view class="cake-item" v-for="item in cakedata" @click="handleDetail(item.Id)">
				<view class="poster">
					<img :src="item.photo" class="cake-item-img">
				</view>
				<view class="info-cont">
					<view class="info">
						<view class="fs-28">
							{{item.cakename}}
						</view>
						<view class="fs-16 describe">
							{{item.describe}}
						</view>
						<view class="fs-18">
							<text class="fs-14">￥</text>
							{{item.price}}
						</view>
					</view>
					<view class="cart-btn">

					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import {
		getswiper,
		getcakedata
	} from '../../api/home.js'
	export default {
		data() {
			return {
				swiper: [],
				cakedata: [],
				bannerH: ''
			}
		},
		onLoad() {

		},
		mounted() {
			getswiper().then(({data}) => {
				this.swiper=data
			})
			getcakedata().then(({
				data
			}) => {
				this.cakedata = data
			})


		},
		methods: {
			handleDetail(id) {
				uni.navigateTo({
					url: `/pages/detail/detail?id=${id}`
				})
			},

		}
	}
</script>

<style lang="scss">
	.info {
		view {
			overflow: hidden;
			white-space: nowrap;
			display: block;
			text-overflow: ellipsis;
		}
	}

	.cake-item-img {
		width: 100%;
		height: 100%;
		border-radius: 12px;

	}

	.swiper {
		width: 100%;
		height: auto;
	}

	.cake-item {
		margin-top: 10px;
		border-radius: 10px;
		border: none;
		box-shadow: 2px 2px 4px 4px #f5f5f5;
		width: 350upx;
		padding: 3px;

		.poster {
			height: 350upx;
			background-color: #f5f5f5;
			border-radius: 12px;

		}

		.fs-28 {
			margin-top: 24upx;
		}

		.fs-16 {
			margin: 14upx 0;
		}

		.fs-18 {
			margin-bottom: 22upx;
		}

	}

	.cont {
		display: flex;
		flex-wrap: wrap;
		padding: 15upx;
		justify-content: space-between;
		background-color: #fffef9;
		border-radius: 10px;
	}

	.info {
		text-align: left;
	}
</style>
