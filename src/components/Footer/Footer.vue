<template>
	
	<div id="Footer" class="wrap-box">
		<div class="base-box partner">
			<h3>合作伙伴</h3>
			<div class="list">
				<a href="#"><img src="./staticAssets/logo1.png" alt=""></a>
				<a href="#"><img src="./staticAssets/logo2.png" alt=""></a>
				<a href="#"><img src="./staticAssets/logo3.png" alt=""></a>
				<a href="#"><img src="./staticAssets/logo4.png" alt=""></a>
				<a href="#"><img src="./staticAssets/logo5.png" alt=""></a>
				<a href="#"><img src="./staticAssets/logo6.png" alt=""></a>
			</div>
		</div>
		<div class="wrap-box">
			<div class="base-box other clearfix">
				<div class="home pullleft">
					<a href="/">
						<img src="./staticAssets/logo8.png" alt="">
						<p class="color-fff">CopyRight &copy; 2018 BEBAY</p>
					</a>
				</div>
				<div class="other-link pullleft clearfix">
					<ul>
						<li>服务</li>
						<li><a href="">交易中心</a></li>
						<li><a href="">支持</a></li>
						<li><a href="">提交请求</a></li>
						<li><a href="">API</a></li>
					</ul>
					<ul>
						<li>关于</li>
						<li><a href="">费率</a></li>
						<li><a href="">公告</a></li>
						<li><a href="">关于我们</a></li>
						<li><a href="">申请上币</a></li>
					</ul>
					<ul>
						<li>法律</li>
						<li><a href="">用户协议</a></li>
						<li><a href="">隐私条款</a></li>
						<li><a href="">法律声明</a></li>
					</ul>
				</div>
				<div class="email pullright">
					<p class="colof-fff">官方邮箱 bebay@bebayholp.zendesk.com</p>
					<p class="colof-fff">社区</p>
					<p class="list">
						<a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
						<a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
						<a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
						<a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a>
						<a href="#"><i class="fa fa-reddit-alien" aria-hidden="true"></i></a>
						<a href="#"><i class="fa fa-slack" aria-hidden="true"></i></a>
					</p>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		name: "Footer",
		data: function(){
			return {
				
			}
		},
		methods: {

		},
		mounted: function(){

		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/index.scss';
	#Footer{
		background: #2f3e45;
		border-top: #191c2f;
		min-height: 100px;
		color: #fff;
		.partner{
			>h3{
				font-size: 28px;
				line-height: 54px;
			}
			padding: 40px 58px;
			box-sizing: border-box;
			.list{
				margin-top: 40px;
				a{
					display: inline-block;
					padding-right: 83px;
				}
				a:nth-of-type(6){
					padding-right: 0;
				}
			}
		}
		.wrap-box{
			border-top: 1px solid #000;
			.other{
				padding: 30px 58px 68px;
				box-sizing: border-box;
				.home{
					margin-right: 15px;
					a{
						img{
							display: block;
							width: 130px;
						}
						p{
							margin-top: 14px;
							font-size: 14px;
							line-height: 16px;
						}
					}
				}
				.other-link{
					ul{
						float: left;
						padding: 0 58px;
						li{
							line-height: 28px;
							a{
								color: #999999;
								&:hover{
									color: #fff;
								}
							}
						}
					}
				}
				.email{
					p{
						line-height: 40px;
					}
					.list{
						lin-height: 1em;
						a{
							color: #7292a1;
							font-size: 18px;
							margin-right: 14px;
							line-height: 32px;
							i{
								font-size: 18px;
							}
						}
					}
				}
			}
		}
	}
</style>