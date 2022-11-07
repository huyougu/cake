<template>
	<view>
		<view class="chat">
			<u-checkbox-group v-model="checkboxValue" placement="column" @change="checkboxChange">
				<ul v-for="item in cartdata" :key="item.id">
					<li>
						<view class="chat-item">
							<view class="checkbox">
								<u-checkbox :customStyle="{marginBottom: '8px'}" :name="item.id">
								</u-checkbox>
							</view>
							<view class="goods_photo" @click="todetail(item.goodsid)">
								<img :src="item.img">
							</view>
							<view class="goods-info">
								<view>
									<span class="goods-name">{{item.cakename}}</span>
								</view>
								<view class="goods-price">
									¥{{item.price}}
								</view>

							</view>
							<view class="goods-count">
								✖️ {{item.count}}
							</view>
							<view class="delbtn">
								<a @click="handledel(item.id)" class="delbutton">删除</a>
							</view>

						</view>

					</li>
				</ul>
			</u-checkbox-group>
		</view>
		<view class="handle-bottom">
			<view class="">
				<u-checkbox-group placement="column" @change="isCheckAll" v-model="ischecked">
					<u-checkbox :customStyle="{padding: '15px'}" :name="1">
					</u-checkbox>
				</u-checkbox-group>
			</view>
			<view class="price">
				¥:{{price}}

			</view>
			<view class="paybutton">
				<a> 立即支付</a>
				
			</view>

		</view>
	</view>
</template>

<script>
	import {
		getcart,
		delcart
	} from "../../api/cart.js"
	export default {
		data() {
			return {
				cartdata: [],
				ischecked: [],
				checkboxValue: [],
				ischecked: [],
				price: 0
			}
		},
		onShow() {
			this.getcartdata()
			
		},
		watch: {
			checkboxValue() {
				this.computedprice()
				this.checkboxChange()
			},
			cartdata(){
				this.computedprice()				
				this.isCheckAll()
			}
		},
		methods: {
			computedprice() {
				this.price = 0
				const list = this.cartdata.filter((item) => {
					return this.checkboxValue.includes(item.id)
				})
				list.forEach((item) => {
					this.price += item.count * item.price
				})
			},

			isCheckAll() {
				let checkedAll = []
				this.cartdata.forEach((item) => {
					checkedAll.push(item.id)
				})
				if (this.checkboxValue.length === checkedAll.length) {
					this.checkboxValue = []
				} else {
					this.checkboxValue = checkedAll
				}



			},
			checkboxChange() {
				let checkedAll = []
				this.cartdata.forEach((item) => {
					checkedAll.push(item.id)
				})
					if (this.checkboxValue.length === checkedAll.length) {
						this.ischecked = [1]
					} else {
						this.ischecked = []
					}
					
				
			},
			todetail(id) {
				uni.navigateTo({
					url: `/pages/detail/detail?id=${id}`
				})
			},
			getcartdata() {
				getcart().then(({
					data
				}) => {
					this.cartdata = data
				})
			},
			handledel(ids) {
				delcart({
					ids
				}).then(({
					data
				}) => {}).then(() => {
					this.getcartdata()
					
				}).then(()=>{
					this.computedprice()
				})
				
			}
		}
	}
</script>

<style lang="scss">
	.paybutton{
		display: flex;
		flex-grow: 1;
		text-align: right;
		justify-content: flex-end;
		align-items: center;
		a{
			margin: 10upx 20upx;
			border: black solid 1px;
			padding: 4upx;
			border-radius: 10upx;
			background-color: skyblue;
		}
	}
	.chat {
		padding-bottom: 80upx;
	}

	.handle-bottom {
		display: flex;
		border-radius: 20upx;
		position: fixed;
		width: 100%;
		background-color: azure;
		bottom: var(--window-bottom);
		height: 100upx;

		.price {
			line-height: 100upx;
		}

	}

	.checkbox {
		display: flex;
		justify-content: center;
	}

	.goods-count {
		display: flex;
		line-height: 100%;
		align-items: center;
		justify-content: center;
		margin-left: 30upx;
		font-size: 12px;
	}

	.delbtn {
		flex-grow: 1;
		margin-right: 50upx;
		display: flex;
		justify-content: end;
		align-items: center;
	}

	.goods-name {
		line-height: 100upx;
		font-size: 16px;
	}

	.goods_photo {
		img {
			margin-left: 20upx;
			width: 150upx;
			height: 150upx;
			object-fit: contain;

		}
	}

	.goods-info {
		margin-left: 20upx;
	}

	.delbutton {
		border: black solid 1upx;
		background-color: skyblue;
		padding: 8upx;
		border-radius: 8upx;
	}

	* {
		padding: 0;
		margin: 0;
	}

	li {
		list-style: none;

	}

	.chat-item {
		display: flex;
		padding: 15upx;
		background-color: aliceblue;
		margin: 15upx;
		height: auto;
		border-radius: 15upx;
	}
</style>
