<template>
	<div id="joinus">
		<div class="wrap-box first-chunk">
			<div class="art-box">
				<p class="big-tit">加入 BEBAY</p>
				<p class="min-tit">创建世界领先的数字资产交易平台</p>
			</div>
		</div>
		<div class="wrap-box second-chunk">
			<div class="art-box">
				<p class="art">
					BeBay总部位于新加坡，已在全球范围内进行区块链商业运营，团队主要曾担任阿里巴巴.京东.富途.云币.等区块链和互联网知名公司的要职。Bebay刚一问世便得到获得美国金融投资公司1000万美元天使轮融资，截止到目前。Bebay已在新加坡、美国、加拿大、中国大陆、中国香港、日本设有运营中心，以便更好地服务用户。来，跟我们一起，创造一个全球领先的优质数字资产交易平台吧。
				</p>
			</div>
		</div>
		<div class="wrap-box third-chunk">
			<div class="art-box">
				<div class="photo-box base-box clearfix">
					<div class="photo-l pullleft">
						<img src="./staticAssets/picture1_960x570.jpg" alt="">
					</div>
					<div class="photo-r pullright">
						<img src="./staticAssets/snimka7_960x570.jpg" alt="">
						<img src="./staticAssets/snimka8_960x570.jpg" alt="">
					</div>
				</div>
			</div>
		</div>
		<div class="wrap-box four-chunk">
			<div class="art-box base-box">
				<p class="bar-title">职位招聘</p>
				<ul class="list-ul clearfix">
					<li>
						<dl>
							<dt>
								<i class="icon-pr"></i>
								<p class="list-tit">产品类</p>
							</dt>
							<dd>
								<p class="site">工作地点：Hongkong, China</p>
								<p class="clearfix"><span>1：</span><span>软件系统架构师</span><em>5年经验</em></p>
								<p class="clearfix"><span>2：</span><span>Node.js</span><em>3年经验</em></p>
								<p class="clearfix"><span>3：</span><span>iOS 开发</span><em>3年经验</em></p>
								<p class="clearfix"><span>4：</span><span>Android 开发</span><em>3年经验</em></p>
								<p class="clearfix"><span>5：</span><span>WEB 前端</span><em>3年经验</em></p>
								<p class="clearfix"><span>6：</span><span>产品经理</span><em>3年经验</em></p>
								<p class="clearfix"><span>7：</span><span>UI设计师</span><em>3年经验</em></p>
								<p class="last">学历本科及以上。若要申请上述职位，请将简历发送至：hr@bebay.pro</p>
							</dd>
						</dl>
					</li>
					<li>
						<dl>
							<dt>
								<i class="icon-ma"></i>
								<p class="list-tit">营销类</p>
							</dt>
							<dd>
								<p class="site">工作地点：Singapore, London，San Francisco</p>
								<p class="clearfix"><span>1：</span><span>海外运营主管</span><em>5年经验</em></p>
								<p class="clearfix"><span>2：</span><span>文案策划</span><em>3年经验</em></p>
								<p class="clearfix"><span>3：</span><span>海外广告投放优化师</span><em>3年经验</em></p>
								<p class="clearfix"><span>4：</span><span>海外市场运营</span><em>3年经验</em></p>
								<p class="clearfix"><span>5：</span><span>客户经理</span><em>3年经验</em></p>
								<p class="clearfix"><span>6：</span><span>商务助理</span><em>3年经验</em></p>
								<p class="last">学历本科及以上，或海外工作背景。若要申请上述职位，请将简历发送至：hr@bebay.pro</p>
							</dd>
						</dl>
					</li>
					<li>
						<dl>
							<dt>
								<i class="icon-se"></i>
								<p class="list-tit">服务类</p>
							</dt>
							<dd>
								<p class="site">工作地点：Singapore</p>
								<p class="clearfix"><span>1：</span><span>中文客服</span><em>2年经验</em></p>
								<p class="clearfix"><span>2：</span><span>英文客服</span><em>2年经验</em></p>
								<p class="clearfix"><span>3：</span><span>日文客服</span><em>2年经验</em></p>
								<p class="clearfix"><span>4：</span><span>韩文客服</span><em>2年经验</em></p>
								<p class="last">学历大专及以上。若要申请上述职位，请将简历发送至：hr@bebay.pro</p>
							</dd>
						</dl>
					</li>
				</ul>
			</div>
		</div>
		<div class="wrap-box five-chunk">
			<div class="art-box">
				<p class="bar-title">无限可能，等你探索</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'joinus',
		data(){
			return{

			}
		},
		metheds: {

		},
		compute: {

		},
		mounted(){

		}
	}
</script>

<style lang="scss">
	#joinus{
		>.first-chunk{
			position: relative;
			height: 341px;
			box-sizing: border-box;
			overflow: hidden;
			&:after{
				content: '';
				display: block;
				width: 1920px;
				height: 341px;
				position: absolute;
				left: 50%;
				top: 0;
				margin-left: -960px;
				background: url(./staticAssets/banner.jpg) no-repeat center center;
				background-size: 100% 100%;
			}
			>.art-box{
				position: absolute;
				width: 100%;
				left: 0;
				top: 0;
				z-index: 2;
				padding-top: 130px;
				>p{
					color: #fff;
					text-align: center;
					margin-top: 20px;
				}
				>.big-tit{
					font-size: 34px;
				}
				>.min-tit{
					font-size: 20px;
				}
			}
		}
		>.second-chunk{
			>.art-box{
				text-align: center;
				box-sizing: border-box;
				padding: 60px 15px;
				>.art{
					display: inline-block;
					width: 1170px;
					font-size: 20px;
					color: #333;
					line-height: 38px;
				}
			}
		}
		>.third-chunk{
			>.art-box{
				>.photo-box{
					margin-bottom: 45px;
					>.photo-l{
						width: 66.6%;
						>img{
							width: 100%;
						}
					}
					>.photo-r{
						width: 32%;
						>img:first-child{
							margin-top: 0;
						}
						>img{
							width: 100%;
							display: block;
							margin-top: 20px;
						}
					}
				}
			}
		}
		>.four-chunk{
			>.art-box{
				>.bar-title{
					font-size: 38px;
					text-align: center;
				}
				>.list-ul{
					margin: 70px 0;
					>li{
						&:hover{
							box-shadow: 3px 3px 10px rgba(12,12,12,.2);
							.icon-pr{
								background-position: 23px -1887px;
							}
							.icon-ma{
								background-position: 23px -2705px;
							}
							.icon-se{
								background-position: 23px -2944px;
							}
							>dl{
								>dd{
									opacity: 1;
								}
							}
						}
						float: left;
						width: 400px;
						height: 456px;
						padding: 30px 54px;
						box-sizing: border-box;
						.icon-pr{
							background-position: 23px -2030px;
						}
						.icon-ma{
							background-position: 23px -2824px;
						}
						.icon-se{
							background-position: 23px -3084px;
						}
						>dl{
							>dt{
								text-align: center;
								>i{
									display: inline-block;
									width: 141px;
									height: 127px;
									background: url(./staticAssets/icons-s8e4e2bb662.png) no-repeat;
								}
								.icon-ma{
									height: 102px;
									margin-top: 15px;
								}
								.list-tit{
									color: #333333;
									font-size: 20px;
									line-height: 1em;
									font-weight: 700;
									margin: 20px 0;
								}
							}
							>dd{
								opacity: 0;
								transition: all 1s;
								>.site{
									margin-bottom: 5px;
								}
								>p{
									>span{
										float: left;
									}
									>em{
										float: right;
										font-style: normal;
									}
								}
								.last{
									margin-top: 16px;
								}
							}
						}
					}
				}
			}
		}
		>.five-chunk{
			>.art-box{
				padding: 0 0 100px;
				>.bar-title{
					font-size: 40px;
					text-align: center;
					color: #333333;
				}
			}
		}
	}
</style>