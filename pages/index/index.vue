<template>
	<view class="content">
       <view class="img-skip" @tap="hangderTextOnclick">
		   <text>跳过</text>
	   </view>
	   <swiper :indicator-dots="true"  :duration="300">
	   	<swiper-item v-for="(img, i) in imgs" :key=i>
				<img class="img-view" :src="img" alt="">
	   	</swiper-item>
	   	
	   </swiper>
        </view>
	</view>
</template>

<script>
	import {mapState, mapMutations} from 'vuex'
	export default {
		data() {
			return {
				imgs: [
					'../../static/index_1.jpg',
					'../../static/index_2.jpg',
					'../../static/index_3.jpg',
				]
			}
		},
		computed: mapState(['hasSkip']),
		onLoad() {
			if(this.hasSkip) {
				nui.reLaunch({
					url: '../tabBar/news/news'
				})
			}
		},
		methods: {
			...mapMutations(['skipIndex']),
			hangderTextOnclick(){
				this.skipIndex()
				uni.reLaunch({
					url: '../denglu/login/login'
				})
			}
		}
	}
</script>

<style lang="scss">
	swiper{
		height: 100vh;
	}
	.img-skip{
		width: 2.5em;
		height: 1.6em;
		position: absolute;
		z-index: 100;
		top: 50px;
		right: 15upx;
		background-color: #d3d3d3;
		text-align: center;
		border-radius: 15%;
		text{
			font: .8em;
			line-height: 1.6;
			color: white;
		}
	}
	.img-view{
		height: 100%;
	}
	
</style>
