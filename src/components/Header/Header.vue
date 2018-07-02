<template>
	<div id="Header" class="wrap-box clearfix">
		<div class="left-bar pullleft clearfix">
			<div class="logo pullleft">
				<a href="/">
					<img src="./staticAssets/logo.png" alt="">
				</a>
			</div>
			<nav class="pullleft">
				<ul>
					<li :class="{active: navActive=='/'}"><router-link to="/">首页</router-link></li>
					<li @click="develop()"><a href="javascript:void(0)">法币交易</a></li>
					<li @click="develop()"><a href="javascript:void(0)">币币交易</a></li>
					<li @click="develop()"><a href="javascript:void(0)">打新活动</a></li>
					<li :class="{active: navActive=='/bby'}"><router-link to="/bby">BBY</router-link></li>
					<li @click="develop()"><a href="javascript:void(0)">白皮书</a></li>
					<li @click="develop()"><a href="javascript:void(0)">资产透明</a></li>
					<li :class="{active: navActive=='/joinus'}"><router-link to="/joinus">加入我们</router-link></li>
					<li @click="develop()"><a href="javascript:void(0)">帮助</a></li>
				</ul>
			</nav>
		</div>
		<div class="right-bar pullright clearfix">
			<div class="mas-bar pullleft">
				<i class="fa fa-volume-off" aria-hidden="true"></i>
				LBank关于BFDT项目打新比例调整的公告
			</div>
			<div class="activity pullleft">
				<div class="act-btn">
					<i class="fa fa-gift" aria-hidden="true"></i>
					活动
					<b>HOT</b>
				</div>
				<div class="act-slide">
					<div class="item-wrap">
						<ul class="item-box" :style="baseWidth()">
							<li class="item" v-for="(item,key) in activity"><router-link :to="{path: '/activity',query: {activ: item.query}}"><img :src="item.picurl" alt=""></router-link></li>
						</ul>
					</div>
					<div class="move-left" @click="actMove(0,$event)"><i class="el-icon-arrow-left"></i></div>
					<div class="move-right" @click="actMove(1,$event)"><i class="el-icon-arrow-right"></i></div>
				</div>
			</div>
			<div class="user pullleft" v-if="user.userId">
				<span class="userid">1319***</span>
				<i class="el-icon-arrow-down"></i>
				<ul class="set">
					<li class="ps-content"><a href="#">个人中心</a></li>
					<li class="quit"><a href="javascript:void(0)" @click="set_logout({userId: '',userName: '',token: ''})">退出登录</a></li>
				</ul>
			</div>
			<div class="member pullleft" v-else="user.userId">
				<router-link :to="{path: '/register',query: {lor: 'lg'}}">
					登录
				</router-link>
				<a> / </a>
				<router-link :to="{path: '/register',query: {lor: 'rg'}}">
					注册
				</router-link>
			</div>
			<div class="language pullleft">
				<a href="javascript:void(0)">
					<i :class="lggIcon"></i>
					<i class="el-icon-arrow-down"></i>
					<ul class="list">
						<li v-for="(item,key) in options" @click="changeLgg(item.value)" :class="{active: item.value==language}">
							<img :src="item.icon" alt="">{{item.label}}
						</li>
					</ul>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
	export default {
		name: "Header",
		props: {},
		data(){
			return {
				token: false,
				navActive: '/',
				options: [
					{
						value: 'CNY',
						icon: require('./staticAssets/china.5e9766b509bfd155c6ab20a1dba1be55.svg'),
						label: '简体中文'
					},
					// {
					// 	value: 'USD',
					// 	icon: require('../../assets/images/english.183a2625ff084933851b6380d6e0ba0a.svg'),
					// 	label: 'English'
					// }
				],
				language: 'CNY',
				//活动栏数据
				activity: [
					{
						picurl: require('./staticAssets/news1.jpg'),
						query: 'Telegram',
						url: '#'
					},
					{
						picurl: require('./staticAssets/news2.jpg'),
						query: 'Invite',
						url: '#'
					}
				]
			}
		},
		methods: {
			logout(){
				//退出登录
			},
			changeLgg(v){
				//切换语言
				this.language = v;
			},
			develop(){
				//https://qr.api.cli.im/qr?data=https%253A%252F%252Ft.me%252Fbebaychina&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=ca3e1ea5ee15cc31c59b0856c639b5da
				//未开发页面提示
				let codeImg = require('./staticAssets/1529982665.png');
				this.$alert('<p><img style="width: 188px;" src="'+codeImg+'" alt=""></p><p style="font-size: 16px;margin: 14px 0 54px 0;color:#5f5f5f;">扫描添加BEBAY，进官方创世社群</p><p><a href="https://t.me/bebaychina" class="join" target="_blank">加入电报群</a></p>', '内测中,公测即将开启', {
					dangerouslyUseHTMLString: true,
					showConfirmButton: false,
					closeOnHashChange: false,
					center: true,
					roundButton: true,
					closeOnPressEscape: true,
					closeOnClickModal: true
				});
			},
			actMove(v,e){
				//活动下拉轮播图位移
				let target = e.target.parentElement.parentElement,
					ptarget = target.firstChild,
					pw = ptarget.offsetWidth,//显示盒子宽度
					domw = ptarget.firstChild.offsetWidth-pw,//装载盒子总宽度-显示盒子宽度=left值最大偏移值
					domlwft = ptarget.firstChild.offsetLeft;//当前装载盒子left值

				if(v){//1为点击右边的翻页按钮
					let ofset = (domlwft-pw)<=-domw?-domw:(domlwft-pw);
					ptarget.firstChild.style.left = ofset+'px';
				}else{//0为点击左边的翻页按钮
					let ofset = (domlwft+pw)>=0?0:(domlwft+pw);
					ptarget.firstChild.style.left = ofset+'px';
				}
			},
			baseWidth(){
				//动态获取视窗高度并赋值
				this.activity.length
				return {width: this.activity.length*320+'px'}
			},
			...mapMutations({
				set_user: 'SET_USER',
				set_alert: 'SET_ALERT',
				set_logout: 'SET_LOGOUT'
			})
		},
		watch: {
			//此监听用于监听路由传递的参数变化
			$route(){
				this.navActive = this.$route.path;
			}
		},
		computed: {
			...mapGetters([
				'user',
				'alert'
			]),
			lggIcon(){
				let lgg = {};
				lgg[this.language] = true;
				return lgg;
			}
		},
		beforeCreate(){

		},
		created(){

		},
		beforeMount(){

		},
		mounted(){
			this.navActive = this.$route.path;
			let user = JSON.parse(this.$Cmn.gc('user_obj'));
			if(user){
				this.set_user(user);
				this.set_alert({show: true,msg: '系统检测，您已登录!'});
			}else{
				this.set_user({});
				this.set_alert({show: false,msg: '你当前未登录!'});
			}
		},
		beforeDestroy(){

		},
		destroyed(){

		}
	}
</script>

<style lang='scss'>
	@import '../../assets/css/index.scss';
	body{
		padding-top: 55px;
	}
	#Header{
		position: fixed;
		left: 0;
		top: 0;
		z-index: 100;
		box-sizing: border-box;
		background: #161622;
		height: 55px;
		padding: 10px;
		.left-bar{
			.logo{
				a{
					img{
						display: block;
						width: 152px;
					}
				}
				margin-right: 33px;
			}
			nav{
				ul{
					li{
						float: left;
						margin-top: 11px;
						height: 18px;
						line-height: 18px;
						font-size: 14px;
						cursor: pointer;
						color: #fff;
						a{
							padding: 0 10px;
							color: #fff;
						}
						&.active>a,&:hover,&:hover>a{
							color: $primary-color;
						}
					}
				}
			}
		}
		.right-bar{
			padding: 2px 0;
			line-height: 30px;
			.mas-bar{
				width: 322px;
				height: 32px;
				padding: 0 10px;
				margin-right: 30px;
				box-sizing: border-box;
				line-height: 32px;
				font-size: 14px;
				color: $primary-color;
				background: #111119;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				i{
					padding-right: 30px;
				}
			}
			.activity{
				position: relative;
				vertical-align: top;
				margin-right: 14px;
				padding-bottom: 13px;
				.act-btn{
					width: 100px;
					height: 30px;
					cursor: default;
					padding-left: 8px;
					box-sizing: border-box;
					border-radius: 15px;
					line-height: 30px;
					font-size: 14px;
					color: #000000;
					background: $primary-color;
					&>i{
						font-size: 18px;
						position: relative;
						top: 1px;
					}
					&>b{
						display: inline-block;
						padding: 2px 3px 2px 4px;
						color: #fff;
						font-size: 10px;
						line-height: 1em;
						background: #df5437;
						transform: scale(.9);
					}
				}
				&:hover>.act-slide{
					height: 307px;
					opacity: 1;
					&>.item-wrap{
						&>.item-box{
							&>.item{
								transition: all 1s;
								transform: translateY(0);
							}
						}
					}
				}
				&>.act-slide{
					position: fixed;
					left: 0;
					top: 55px;
					background: rgba(17,17,25,.8);
					overflow: hidden;
					width: 100%;
					min-width: 1200px;
					height: 0;
					transition: all .5s;
					padding: 0 80px;
					opacity: 0;
					box-sizing: border-box;
					&>.item-wrap{
						width: 100%;
						height: 307px;
						padding: 60px 0;
						box-sizing: border-box;
						overflow: hidden;
						position: relative;
						&>.item-box{
							position: absolute;
							transition: all .5s;
							left: 0;
							top: 60px;
							width: auto;
							min-width: 100%;
							display: inline-block;
							&>.item{
								transition: all .5s;
								float: left;
								width: 320px;
								padding: 0 20px;
								box-sizing: border-box;
								transform: translateY(-100%);
								&>a{
									display: block;
									width: 100%;
									&>img{
										width: 100%;
										border: 1px solid #e5cf8f;
										box-shadow: 0 0 20px 0 hsla(47,67%,68%,.3);
										transition: all .5s ease .9s;
										position: relative;
									}
								}
							}
						}
					}
					&>.move-left,&>.move-right{
						position: absolute;
						font-size: 50px;
						top: 50%;
						margin-top: -25px;
						color: $primary-color;
						opacity: .7;
						cursor: default;
					}
					&>.move-act{
						cursor: pointer;
						opacity: 1;
					}
					&>.move-left{
						left: 30px;
					}
					
					&>.move-right{
						right: 20px;
					}
				}
			}
			.user{
				&:hover{
					>.el-icon-arrow-down{
						transform: rotate(180deg);
					}
					>.set{
						height: auto;
					}
				}
				padding-bottom: 6px;
				position: relative;
				margin-right: 10px;
				>.userid{
					color: #fff;
					display: inline-block;
					margin-right: 5px;
					width: 50px;
					overflow: hidden;
					vertical-align: middle;
				}
				>.el-icon-arrow-down{
					color: $primary-color;
					transition: all .5s;
					font-size: 16px;
					vertical-align: middle;
				}
				>.set{
					position: absolute;
					left: 0;
					top: 32px;
					display: inline-block;
					height: 0;
					overflow: hidden;
					background: rgba(17, 17, 25, 0.8);
					>.ps-content{
						>a{
							
						}
					}
					>.ps-content,>.quit{
						>a{
							font-size: 14px;
							color: #fff;
							padding: 0 8px;
						}
					}
					>.ps-content:hover,>.quit:hover{
						>a{
							color: $primary-color;
						}
					}
					>.quit{
						>a{
							
						}
					}
				}
			}
			.member{
				margin-right: 14px;
				a{
					color: $primary-color;
				}
			}
			.language{
				a{
					display: block;
					position: relative;
					z-index: 50;
					line-height: 30px;
					&>i:first-child{
						display: inline-block;
						width: 24px;
						height: 24px;
						background-size: 24px 24px;
						vertical-align: middle;
					}
					.el-icon-arrow-down{
						font-size: 16px;
						color:#f4dd97;
						position: relative;
						transform-origin: center center 0;
						-webkit-transform-origin: center center 0; 
						transition: all .3s;
						top: 3px;
					}
					.CNY{
						background-image: url(./staticAssets/china.5e9766b509bfd155c6ab20a1dba1be55.svg);
					}
					.USD{
						background-image: url(./staticAssets/english.183a2625ff084933851b6380d6e0ba0a.svg);
					}
					.list{
						display: none;
						position: absolute;
						right: 0;
						top: 30px;
						width: 120px;
						background: #3d4454;
						font-size: 14px;
						color: #fff;
						li{
							display: block;
							width: 100%;
							box-sizing: border-box;
							padding: 8px;
							img{
								width: 24px;
								vertical-align: middle;
								padding-right: 5px;
							}
							&:hover,&.active{
								background: #1e232f;
							}
						}
					}
					&:hover .el-icon-arrow-down{
						transform: rotate(180deg);
						-ms-transform: rotate(180deg); /* IE 9 */
						-webkit-transform: rotate(180deg); /* Safari and Chrome */
					}
					&:hover .list{
						display: block;
					}
				}
			}
		}
	}
	.join{
		display: inline-block;
		line-height: 36px;
		color:  $primary-color;
		margin-bottom: 16px;
		border: 2px solid $primary-color;
		border-radius: 20px;
		height: 38px;
		width: 240px;
		font-size: 16px;
		text-align: center;
		cursor: pointer;
	}
	@media screen and (max-width: 1390px){
		.mas-bar{
			width: 210px!important;
		}
	}
	@media screen and (max-width: 1200px){
		.mas-bar{
			display: none!important;
		}
	}
</style>