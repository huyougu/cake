<template>
	<view>
		
		<view class="cont">
		</view>
		<view class="margin bg-fff box">
			<view class="text-center">
				<img src="../../static/logo.png" alt="" class="avatar">
			</view>
			<view class="fs-28 text-center userinfo" >
				您好～请登陆
			</view>
			
			<view class="flexgrid">
				<view class="flex flex-direction align-center padding" v-for="(item,index) in gridArr">
					<text :class="['iconfont margin-bottom-xs', item.icon]"></text>
					{{item.name}}
					
				</view>
				
			
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gridArr:[
					{
						icon:'icon-danju',
						name:'我的账单'
					},
					{
						icon:'icon-danju',
						name:'待收货'
					},
					{
						icon:'icon-danju',
						name:'待付款'
					},
					{
						icon:'icon-vip-fill',
						name:'会员等级'
					},{
						icon:'icon-danju',
						name:'我的账单'
					},
					{
						icon:'icon-danju',
						name:'待收货'
					},
					{
						icon:'icon-danju',
						name:'待付款'
					},
					{
						icon:'icon-vip-fill',
						name:'会员等级'
					},
					
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.userinfo{
		height: 100upx;
		line-height: 100upx;
		border-bottom: #f6f6f6 1px solid;
	}
	.box{
		border-radius: 8px;
	}
	.flexgrid{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			view{
				width: 25%;
			}
	}
	.cont{
		background-color: #f6f6f6;
		height: 100upx;
	}
	 .iconfont{
		font-size: 50upx;
		color: #888;
	}
	
	.avatar{
		width: 150upx;
		height: 150upx;
		border-radius: 50%;
		margin-top: -75upx;
	}
	
</style>
