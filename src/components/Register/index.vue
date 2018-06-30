<template>
	<div id="lrr" class="wrap-box" :style="winHeight">
		<div class="registe-box base-box">
			<div class="wrap-form clearfix">
				<Register v-if="lor=='rg'"></Register>
				<Login v-if="lor=='lg'"></Login>
				<Retrieve v-if="lor=='rt'"></Retrieve>
			</div>
		</div>
	</div>
</template>
<script>
	import Register from './Register.vue'
	import Login from './Login.vue'
	import Retrieve from './Retrieve.vue'
	export default {
		name: 'lrr',
		data: function(){
			return {
				lor: ''
			}
		},
		components: {
			Register,
			Login,
			Retrieve
		},
		computed:{
			winHeight(){
				var domH = window.innerHeight;
				return {'height': domH+'px'};
			}
		},
		mounted: function(){
			window.scrollTo(0,0);
			this.lor = this.$route.query.lor;
		},
		watch: {
			//此监听用于监听路由传递的参数变化
			$route: function(){
				this.lor = this.$route.query.lor;
			}
		}
	}
</script>
 <style lang="scss">
 	@import '@/assets/css/index.scss';
 	#lrr{
		height: 100%;
		padding: 140px 0;
		box-sizing: border-box;
		background: url(./staticAssets/prbg.jpg) no-repeat center center;
		.registe-box{
			height: 100%;
			box-sizing: border-box;
			padding: 0 100px;
			.wrap-form{
				.form-box{
					
				}
				.bg-bar{
					width: 580px;
					height: 613px;
					position: relative;
					border-top-right-radius: 5px;
					border-bottom-right-radius: 5px;
					overflow: hidden;
					img{
						position: absolute;
						left: 50%;
						top: 50%;
						margin-left: -168px;
						margin-top: -167px;
						animation-iteration-count: infinite;
						animation-timing-function: linear;
						animation-name: scolr;
						animation-duration: 60s;
					}
				}
			}
		}
 	}
 	@keyframes scolr{
		0%   {transform: rotate(0);}
	    100% {transform: rotate(360deg);}
	}
 </style>
