<template>
	<div id="BBY" class="wrap-box">
		<div class="base-box">
			<h3 class="bps">BeBay Token</h3>
			<p class="title">什么是BBY  挖矿模式2.0交易所</p>
			<p class="article">
				平台名称BeBay是“必备”“币倍”的谐音，同时也寓意用户资产成倍增长。我们坚持做真正的安全可靠的数字货币交易平台，并且尽力完善健全Bebay机制。
				Bebay全体成员会以打造优质交易平台为己任，与用户一道，将BBY发展成为真正具有应用价值的金融产品，届时价值共识会以倍数级扩散，最终形成Bebay
				生态圈。 BBY的发行依据交易即挖矿原则，（查看挖矿原理）。 逐步分批释放，第一批为20%（2亿枚）。BBY作为平台权益的代表，平台会将80%的收入分配给BBY的持有者（查看收入分配详情）。回购销毁机制：第一批20%配发完毕，我们将平台每日收入的20%的收入在二级市场回收BBY并销毁，每日公示。
			</p>
			<p class="chart-img"><img src="./staticAssets/bili.png" alt=""></p>
			<p class="article">
				<span>
				* 第一期挖矿为20% 挖完启动回购计划 </br>
				* BaBay运维基金 主要目的：维护BBY的价格波动在合理的范围之内 </br>
				  已采取信用背书形式质押给某机构 换取2倍于等价的BTC ETH USDT 
				</span>
			</p>
			<p class="title">投资者的4重保护</p>
			<ul class="itl clearfix">
				<li>
					<p class="icon-box"><img src="./staticAssets/2.png" alt=""></p>
					<p class="min-title">运维基金</p>
					<p min-text>BEBAY运维基金，该基金以10%的BBY币以信用背书的形式，5倍于市场的价格抵押给投资机构换取等量的BTC ETH USDT 如果BBY发生大幅波动 ，该基金即启动</p>
				</li>
				<li>
					<p class="icon-box"><img src="./staticAssets/4.png" alt=""></p>
					<p class="min-title">锁仓计划</p>
					<p min-text>运营团队 投资人承诺 锁仓3年 二级市场锁仓者 每周日得到100%的平台利润</p>
				</li>
				<li>
					<p class="icon-box"><img src="./staticAssets/3.png" alt=""></p>
					<p class="min-title">回购销毁计划</p>
					<p min-text>挖矿超过20%</br>启动回购销毁</p>				
				</li>
				<li>
					<p class="icon-box"><img src="./staticAssets/9.png" alt=""></p>
					<p class="min-title">7*24小时服务</p>
					<p min-text>7*24小时在线客服服务</br>除不可抗拒因素</br>如地球毁灭</p>
				</li>
			</ul>
			<p class="title">持有者权利</p>
			<ul class="lin clearfix">
				<li>
					<img src="./staticAssets/1.png" alt="">
					收益分配
				</li>
				<li>
					<img src="./staticAssets/6.png" alt="">
					参与决策
				</li>
				<li>
					<img src="./staticAssets/5.png" alt="">
					选举和监督
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "BBY",
		data: function(){
			return {
				
			}
		},
		components: {
			
		},
		watch: {
			
		},
		methods:{
			
		},
		mounted: function(){
			
		}
	}
</script>

<style lang="scss">
	@import '../../assets/css/index.scss';
	#BBY{
		width: 100%;
		overflow: hidden;
		height: 1412px;
		position: relative;
		background: url(./staticAssets/bby-bg.jpg);
		background-color: transparent;
	    background-size: cover;
	    background-position: center;
	    background-attachment: fixed;
		.base-box{
			height: 100%;
			background: rgba(0,0,0,.3);
			color: #fff;
			.bps{
				font-size: 52px;
				font-weight: 700;
				text-align: center;
			}
			.title{
				font-size: 32px;
				color: $primary-color;
				margin: 60px 34px 0;
			}
			.article{
				margin: 32px 28px;
				font-size: 16px;
				&>span{
					display: block;
					width: 490px;
					margin: 0 auto;
				}
			}
			.chart-img{
				padding: 40px;
				img{
					display: block;
					margin: 0 auto;
				}
			}
			.itl{
				margin-top: 40px;
				li{
					float: left;
					width: 300px;
					box-sizing: border-box;
					padding: 0 40px;
					text-align: center;
					.icon-box{
						height: 80px;
					}
					.min-title{
						font-size: 20px;
						margin-bottom: 20px;
						margin-top: 25px;
					}
				}
			}
			.lin{
				margin-top: 40px;
				li{
					float: left;
					width: 400px;
					box-sizing: border-box;
					padding: 0 75px;
					font-size: 20px;
					img{
						vertical-align: middle;
					}
				}
			}
		}
	}
	@media screen and (max-width: 1200px) {
		// #BBY{
		// 	&>.bg{
		// 	margin-left: 0;
		// 	left: -460px;
		// 	}
		// }
	}
</style>