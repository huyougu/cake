<template>
	<view>
		<!-- <view class="navbar">
		<u-navbar  leftText="返回"
            title=""
            :safeAreaInsetTop="false"
			:bgColor="navbarColor"
			:autoBack="true"
			>
		</u-navbar>
	</view> -->
		<view class="dark">
		</view>
		<view>
			<button @click="addgoods">加入购物车</button>
		</view>
	</view>
</template>

<script>
	import {
		getdetail
	} from "../../api/detail.js"
	import{addcart} from "../../api/cart.js"
	export default {
		data() {
			return {
				navbarColor: '#f1f1f1',
				goodsdata:null,
				goodscount:1
			}
		},
		methods: {
			handleLeftClick() {
				console.log('left');
			},
			addgoods() {
				const data={
					id:null,
					goodsid:this.goodsdata.id,
					cakename:this.goodsdata.cakename,
					price:this.goodsdata.price,
					count:this.goodscount,
					img:this.goodsdata.cakephoto,
				}
				addcart(data).then((res)=>{
					console.log(res);
				})
			}
		},
		onLoad(options) {
			const {
				id
			} = options
			getdetail(id).then(({
				data
			}) => {
				console.log(data[0]);
				this.goodsdata=data[0]
			})



		}
	}
</script>

<style>
	.navbar {
		position: relative;
	}

	.dark {
		background-image: url('https://img2.baidu.com/it/u=2142003992,825472260&fm=253&fmt=auto&app=138&f=JPEG?w=793&h=500');
		background-position: center;
		height: 350upx;
		width: 100%;
		opacity: 0.6;
	}
</style>
