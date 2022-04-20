<!--
 * @Author: Jakcy Chang
 * @Date: 2022-04-18 09:52:08
 * @LastEditors: Jakcy Chang
 * @LastEditTime: 2022-04-19 10:37:08
 * @Description: 首页
-->
<template>
	<view class="container">
		<button v-show="!userADdress" @click="checkLogin">登录</button>
	</view>
	<view v-show="userADdress">
		<text>地址是：{{userADdress}}</text>
		
	</view>
	<view v-show="userADdress">
		<text> 🙋 {{ count }}</text>
	</view>
	
	<view v-show="userADdress">
		<button @click="sayHi">sayHi</button>
	</view>
</template>

<script lang="ts">
	import { ethers } from 'ethers'
	import { contractABI, contractAddress } from '../../contract.js'
	
	export default {
		data() {
			return {
				userADdress: "",
				count:0
			}
		},
		created() {
			this.getCount()
		},

		methods: {
			async checkLogin() {
				const { ethereum } = window
				if(!ethereum) {
					uni.showToast({
						icon:'error',
						title:'请安装metamask钱包'
					})
					return
				}
				console.log("已安装metamask钱包")
				const [account] = await this.Provider().send("eth_requestAccounts", [])
				this.userADdress = account
			},
			
			Provider() {
				return new ethers.providers.Web3Provider(window.ethereum)
			},
			
			Contract() {
				const provider = this.Provider()
				const signer = provider.getSigner()
				const contract = new ethers.Contract(contractAddress, contractABI, signer)
				return contract;
			},

			async getCount() {
				const contract = this.Contract()
				const result = await contract.getcounter()
				this.count = result.toNumber()
			},
			
			async sayHi() {
				const contract = this.Contract()
				const tx = await contract.addcounter()
				await tx.wait()
				await this.getCount()
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		
		.text {
			display: block;
			text-align: center;
		}
	}
</style>
