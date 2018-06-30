<template>
  <div id="home" :style="pageHeight()" 
  v-loading="loading"
  element-loading-text="加载中"
  element-loading-spinner="el-icon-loading"
  element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div class="wrap-banner wrap-box">
      <div class="banner">
        <div class="clearfix bn-t">
          <div class="pullleft bn-l">
            <h3 class="opacity0" :class="{arightShow01: actionAnima}">首家资产透明的数字资产交易平台</h3>
            <div class="art">
              <p class="min-tit opacity0" :class="{arightShow02: actionAnima}">资产透明公开，收入返还用户，打造挖矿2.0模式</p>
              <p class="min-tit opacity0" :class="{arightShow03: actionAnima}">应投资者要求，我们于7月8日开始，每日10-18点实行天使轮计划数量有限</p>
              <p class="min-tit opacity0" :class="{arightShow04: actionAnima}">规则</p>
              <p class="min-tit opacity0" :class="{arightShow05: actionAnima}">
                1: 本次限量1000万积分，正式上线1：1兑换BBY </br>
                2：1ETH=30000BEBAY积分</br>
                3: 每日10-18点开启 每日公布进度
              </p>
              <p class="hint bn-l-Show-5 opacity0" :class="{upwardShow01: actionAnima}">*本次活动解释权归bebay所有</p>
              <p class="bn-l-Show-6 opacity0" :class="{upwardShow02: actionAnima}">
                <a href="/" class="teleg-link">
                  <i class="fa fa-paper-plane"></i>
                  telegram
                </a>
              </p>
            </div>
          </div>
          <div class="pullright bn-r opacity0" :class="{elasticity: actionAnima}">
            <div class="bg-box">
              <div class="bg-mg"></div>
              <div class="bg-lg"></div>
            </div>
            <div class="cn-t">
              <div class="ttl">距离天使轮计划</br>7月8日10:00还有</div>
              <div class="calc clearfix">
                <span>
                  <b>{{calc.d}}</b>
                  <s>DAYS</s>
                </span>
                <span>:</span>
                <span>
                  <b>{{calc.h}}</b>
                  <s>HOURS</s>
                </span>
                <span>:</span>
                <span>
                  <b>{{calc.m}}</b>
                  <s>MINUTES</s>
                </span>
                <span>:</span>
                <span>
                  <b>{{calc.s}}</b>
                  <s>SECONDS</s>
                </span>
              </div>
              <div class="btn-box">
                <a href="">邀请好友</a>
                &nbsp;&nbsp;
                <a href="" v-if="!user.userId">登录</a>
              </div>
              <div class="ps-box">
                <p> 20< ETH = 100% 折扣</p>
                <p> 20+ ETH = 95% 折扣</p>
                <p> 50+ ETH = 90% 折扣</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bn-b">
          <span>媒体支持</span>
          <div class="list clearfix">
            <div class="opacity0" :class="{upwardShowss1: actionAnima}">
            <a href="https://www.bidaka.com" target="_blank"><img src="./staticAssets/bidaka.png" alt=""></a>
            </div>
            <div class="opacity0" :class="{upwardShowss2: actionAnima}">          
            <a href="https://www.jinse.com" target="_blank"><img src="./staticAssets/jinse.png" alt=""></a>
            </div>
            <div class="opacity0" :class="{upwardShowss3: actionAnima}">
            <a href="https://www.atoken.com" target="_blank"><img src="./staticAssets/atoken.png" alt=""></a>
            </div>
            <div class="opacity0" :class="{upwardShowss4: actionAnima}">          
            <a href="http://www.bishijie.com" target="_blank"><img src="./staticAssets/bishij.png" alt=""></a>
            </div>
            <div class="opacity0" :class="{upwardShowss5: actionAnima}">          
            <a href="https://www.chainfor.com" target="_blank"><img src="./staticAssets/lianx.png" alt=""></a>
            </div>
            <div class="opacity0" :class="{upwardShowss6: actionAnima}">          
            <a href="http://www.jinniu.cn" target="_blank"><img src="./staticAssets/jinniu、.png" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-box first posit-r bglist">
      <div class="base-box">
        <div class="item">
          <p class="lag-title">挖矿模式2.0 彻底解决币价大幅下跌割韭菜趋势</p>
          <p class="min-title">打造高效撮合 安全稳定 先进可靠 长期发展 7*24小时服务的百年交易所</p>
          <div class="other clearfix">
            <div class="l-m pullleft">
              即将上线，敬请期待
            </div>
            <div class="r-m pullleft">
              <p>
                BeBay总部位于新加坡，已在全球范围内进行区块链商业运营，团队主要曾担任阿里巴巴.京东.富途.云币.等区块链和互联网知名公司的要职。Bebay刚一问世便得到获得美国金融投资公司1000万美元天使轮融资
              </p>
              <a href="#" class="link-btn">详细介绍</a>
              <a href="#" class="link-btn">打新活动</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-box four bglist">
      <div class="base-box">
        <p class="title">如何保护投资者？</p>
        <p class="article">
          1：回购销毁计划：从白皮书可以看出，我们发行的BBY只有40%采取挖矿形式发放给投资者 ，并且当</br >
          挖到20%的时候，一期挖矿停止，启动回购计划，交易所当天所得100%利润（减去80%返回给投资者）</br >在二级市场购买BBY并销毁公示
        </p>
        <p class="article">
          2：BEBAY运维基金：该基金以10%的BBY币，以信用背书的形式，5倍于市场的价格抵押给投资机构</br >
          换取等量的BTC ETH USDT 如果BBY发生大幅波动 ，该基金即启动
        </p>
        <p class="article">
          3：回购销毁计划，通过白皮书能查询到未流通上市的BBY一般锁仓都在1-3年，我们还针对二级市场的</br >
          BBY进行锁仓收益计划，只要锁仓3个月以上者，享受每周日的100%分红收益。
        </p>
        <p class="article">
          4： 7*24小时全天候服务 除不可抗拒因素 如地球毁灭
        </p>
        <p class="link-to margin-top72"><a href="#" class="link-btn">详细说明</a></p>
      </div>
    </div>
    <div class="wrap-box three">
      <div class="base-box">
        <ul class="icon-box clearfix">
          <li>
            <div class="icon-img"><img src="./staticAssets/icon-adv.png" alt=""></div>
            <div class="icon-title">高速交易撮合引擎</div>
            <div class="icon-article">自主研发高速交易撮合引擎，可承载交易高达 100000 笔/秒，海量交易并发下仍稳定可靠运行，妥善处理您的每一笔委托。</div>
          </li>
          <li>
            <div class="icon-img"><img src="./staticAssets/icon-security.png" alt=""></div>
            <div class="icon-title">全方位安全保护</div>
            <div class="icon-article">银行级风控，高级加密，多重备份，系统安全稳定全站使用HTTPS；支持谷歌验证器、手机短信等二次验证方式；数字资产采用冷钱包+多重签名等策略</div>
          </li>
          <li>
            <div class="icon-img"><img src="./staticAssets/icon-reliability.png" alt=""></div>
            <div class="icon-title">公正</div>
            <div class="icon-article">充分尊重金融市场的交易规则，建立公平公正的交易机制，资产透明公开保障交易者的合法权益</div>
          </li>
          <li>
            <div class="icon-img"><img src="./staticAssets/dingji.png" alt=""></div>
            <div class="icon-title">顶级团队</div>
            <div class="icon-article">团队来自顶级互联网、金融、区块链社区、资本，具有丰富的区块链经验.专业客服团队7*24*365天为您服务。</div>
          </li>
          <li>
            <div class="icon-img"><img src="./staticAssets/liyi.png" alt=""></div>
            <div class="icon-title">利益共享</div>
            <div class="icon-article">交易挖矿、收入返还用户，邀请得佣，每个用户都是主人，分布式社区化经营，共创共享共赢。</div>
          </li>
          <li>
            <div class="icon-img"><img src="./staticAssets/chongzi.png" alt=""></div>
            <div class="icon-title">极速充值提现</div>
            <div class="icon-article">BaBey与全球顶尖的矿池达成合作，充值提现自带交易加速。数字资产的小额提现，做到5分钟内支付</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrap-box six">
      <div class="base-box">
        <p class="p1">从手机到PC,多元化交易体验您所需</p>
        <p class="p2">移动端提供 行情·交易·钱包功能</p>
        <p class="p3">内测中 即将上线</p>
      </div>
    </div>
    <div class="wrap-box five road-map bglist">
      <div class="base-box">
        <p class="title">交易平台路线图</p>
        <div class="step-box clearfix">
          <div class="step-one step-before">
          <i>
          </i>
          <div class="step-date">2018 Q2</div>
          <div class="step-info">团队获得1000万美元投资  项目开放内测</div></div>
          <div class="step-two step-before">
          <i>
          </i>
          <div class="step-date">2018 Q3</div>
          <div class="step-info">正式开放交易 多语种版 APP上线 拓展海外市场  </div></div>
          <div class="step-three">
          <i>
          </i>
          <div class="step-date">2018 Q4</div>
          <div class="step-info">组建亚太 欧洲 美洲营销团队 实现全球用户快速增长</div></div>
          <div class="step-four">
          <i>
          </i>
          <div class="step-date">2019 Q1</div>
          <div class="step-info">开放智能合约投票 开放资产公开透明</div></div>
          <div class="step-five">
          <i>
          </i>
          <div class="step-date">2019 Q2</div>
          <div class="step-info">搭建全球生态联盟社区 构建BEBAY主网</div></div>
          <div class="step-1"></div>
          <div class="step-2"></div>
          <div class="step-3 el-tooltip item" aria-describedby="el-tooltip-2467" tabindex="0"></div>
          <div class="step-4"></div>
          <div class="step-5"></div>
          <div class="step-6"></div>
          <div class="step-7"></div>
          <div class="step-8"></div>
          <div class="step-9"></div>
          <div class="step-10"></div>
          <div class="step-11"></div>
          <div class="step-12"></div>
          <div class="step-13"></div>
          <div class="step-14"></div>
          <div class="step-15"></div>
        </div>
      </div>
      <div class="line-l"></div>
    </div>
  </div>
  
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: "home",
    data: function(){
      return {
        endTime: 1531188000,
        calc: {
          d: 0,
          h: 0,
          m: 0,
          s: 0
        },
        actionAnima: false,
        loading: true
      }
    },
    components: {
      
    },
    computed: {
      ...mapGetters([
          'user',
          'alert'
        ])
    },
    watch: {
      
    },
    methods:{
      //倒计时器
      dateCountDown(endTime){
        var now = Math.floor(new Date().getTime()/1000)*1;
        if(now > endTime){
          return 0;
        }else{
          var gap = endTime - now;
          var calc = {}
          calc.d = Math.floor(gap/(60*60*24));
          calc.h = Math.floor((gap-calc.d*60*60*24)/(60*60))<10?'0'+Math.floor((gap-calc.d*60*60*24)/(60*60)):Math.floor((gap-calc.d*60*60*24)/(60*60));
          calc.m = Math.floor((gap-calc.d*60*60*24-calc.h*60*60)/60)<10?'0'+Math.floor((gap-calc.d*60*60*24-calc.h*60*60)/60):Math.floor((gap-calc.d*60*60*24-calc.h*60*60)/60);
          calc.s = (gap-calc.d*60*60*24-calc.h*60*60-calc.m*60)<10?'0'+(gap-calc.d*60*60*24-calc.h*60*60-calc.m*60):(gap-calc.d*60*60*24-calc.h*60*60-calc.m*60);
          this.calc = calc;
        }
      },
       pageHeight(){
         let h = window.innerHeight;
         return {'min-height': h-55+'px'};
      }
    },
    mounted: function(){
      var that = this;
      //开启定时器
      setInterval(function(){
        that.dateCountDown(that.endTime);
      },1000);
      //延时500毫秒开启动画效果
      setTimeout(function(){
        that.actionAnima = true;
      },500);
      this.loading = false;
    }
  }
</script>

<style lang="scss">
  @import '../../assets/css/index.scss';
  #home{
    .wrap-banner{
      height: 891px;
      background: url(./staticAssets/robot.png) no-repeat 7% 22%,#121c35;
      background-size: auto 891px;
      .banner{
        min-width: 1200px;
        padding: 0 4.2%;
        box-sizing: border-box;
        .bn-t{
          height: 760px;
          box-sizing: border-box;
          .bn-l{
            width: 600px;
            margin-top: 265px;
            color: #fff;
            &>h3{
              font-size: 40px;
              margin-bottom: 35px;
              line-height: 1em;
            }
            &>.art{
              padding: 0 60px;
              &>p{
                line-height: 1em;
              }
              &>.min-tit:nth-of-type(1){
                font-size: 18px;
                margin-bottom: 20px;
              }
              &>.min-tit:nth-of-type(2){
                margin-bottom: 14px;
              }
              &>.min-tit:nth-of-type(3),&>.min-tit:nth-of-type(4){
                line-height: 1.3em;
              }
              &>.min-tit{
                font-size: 14px;
              }
              &>.hint{
                margin-top: 16px;
                color: #cccccc;
                font-size: 12px;
              }
              &>p>.teleg-link{
                display: inline-block;
                margin-top: 14px;
                padding: 0 10px;
                border-radius: 3px;
                line-height: 46px;
                color: #fff;
                background: #ff6600;
                &:hover{
                  background: $primary-color;
                }
                &>i{
                  color: #fff;
                  margin-right: 5px;
                }
              }
            }
          }
          .bn-r{
            position: relative;
            width: 584px;
            height: 560px;
            margin-top: 150px;
            .bg-box{
              margin: 0 auto;
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              &>div{
                position: absolute;
                top: 0;
                height: 100%;
                border: 1px solid #ccc;
              }
              .bg-mg{
                width: 560px;
                left: 0;
                border-radius: 50%;
              }
              .bg-lg{
                width: 560px;
                right: 0;
                border-radius: 50%;
              }
            }
            .cn-t{
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              padding-top: 98px;
              box-sizing: border-box;
              color: #fff;
              text-align: center;
              .ttl{
                font-size: 28px;
                color: $primary-color;
              }
              .calc{
                font-size: 44px;
                margin-top: 30px;
                display: inline-block;
                width: auto;
                span{
                  float:left;
                  b{
                    dispaly: block;
                  }
                  s{
                    display: block;
                    margin-top: 10px;
                    font-size: 16px;
                    color: $primary-color;
                  }
                }
              }
              .btn-box{
                margin-top: 44px;
                a{
                  color: #fff;
                  display: inline-block;
                  width: 160px;
                  height: 50px;
                  line-height: 50px;
                  font-size: 18px;
                  text-align: center;
                  border: 1px solid #fff;
                  border-radius: 3px;
                  background: #ff6600;
                  &:hover{
                    background: $primary-color;
                  }
                }
              }
              .ps-box{
                margin-top: 48px;
                p{
                  font-size: 20px;
                }
                &>p:nth-of-type(1){color: #f60}
                &>p:nth-of-type(2){color: $primary-color}
              }
            }
          }
        }
        .bn-b{
          color: #8e929e;
          width: 100%;
          margin-top: 30px;
          position: relative;
          &>span{
            font-size: 18px;
            position: absolute;
            left: 5px;
            top: 20px;
          }
          .list{
            width: 100%;
            margin-left: 4%;
            >div{
              width: 16.3%;
              display: inline-block;
              text-align: center;
              >a{
                display: inline-block;
                vertical-align: bottom;
                img{
                  display: block;
                }
              }
            }
            
          }
        }
      }
    }
    &>.bglist{
      &>.base-box{
        padding: 36px 50px;
        box-sizing: border-box;
      }
      color: #fff;
    }
    .first{
      background: #2f3b55;
      position: relative;
      height: 352px!important;
      z-index: 5;
      .item{
        position: absolute;
        margin-top: 0px;
        color: #cccccc;
        .lag-title{
          font-size: 38px;
          color: $primary-color;
        }
        .min-title{
          text-indent: 30px;
          margin-top: 28px;
          font-size: 18px;
        }
        .other{
          margin-top: 56px;
          .l-m{
            width: 438px;
            height: 121px;
            margin-right: 38px;
            background-image: linear-gradient(linear, left bottom, right bottom, color-stop(0%, rgba(29, 31, 46, .1)), color-stop(40%, rgb(130, 84, 48)), color-stop(60%, rgb(130, 84, 48)), color-stop(100%, rgba(29, 31, 46, .1)));
            background-image:  -moz-linear-gradient(linear, left bottom, right bottom, color-stop(0%, rgba(29, 31, 46, .1)), color-stop(40%, rgb(130, 84, 48)), color-stop(60%, rgb(130, 84, 48)), color-stop(100%, rgba(29, 31, 46, .1)));
            background-image: -webkit-gradient(linear, left bottom, right bottom, color-stop(0%, rgba(29, 31, 46, .1)), color-stop(40%, rgb(130, 84, 48)), color-stop(60%, rgb(130, 84, 48)), color-stop(100%, rgba(29, 31, 46, .1)));
            border-radius: 10px;
            color: $primary-color;
            font-size: 36px;
            text-align: center;
            line-height: 121px;
          }
          .r-m{
            width: 500px;
            font-size: 16px;
            &>p{
              margin-bottom: 20px;
            }
          }
        }
      }
    }
    .three{
      &>.base-box{
        &>.icon-box{
          width: 100%;
          margin: 20px 0;
          &>li{
            float: left;
            width: 400px;
            padding: 0 38px;
            box-sizing: border-box;
            margin: 20px 0;
            .icon-img{
              display: block;
              margin-bottom: 20px;
              img{
                height: 70px;
              }
            }
            .icon-title{
              font-size: 26px;
              color: #000;
              margin-bottom: 18px;
            }
            .icon-article{
              width: 100%;
              height: 60px;
              font-size: 14px;
              color: #999999;
            }
          }
        }
      }
    }
    .four{
      background: #1c2755;
      .title{
        margin-top: 10px;
        margin-bottom: 20px;
      }
      .article{
        margin-top: 25px;
      }
      .link-to{
        margin-top: 35px;
      }
      &>.base-box{
        background: url(./staticAssets/fen.png) no-repeat 750px center;
      }
    }
    .five{
      position: relative;
      background: #121c35;
      .base-box{
        position: relative;
        z-index: 10;
      }
      .line-l{
        width: 100%;
        height: 1px;
        position: absolute;
        left: 0;
        top: 195px;
        background: #759ef4;
      }
      .title{
        margin-top: 10px;
        margin-bottom: 5px;
      }
    }
    .six{
      height: 362px;
      overflow: hidden;
      position: relative;
      background: url(./staticAssets/beijing111.png) no-repeat center center;
      background-size: 100% 100%;
      &>.base-box{
        color: #fff;
        padding: 97px 0;
        >p{
          text-align: center;
          margin-top: 22px;
        }
        >.p1{
          font-size: 26px;
        }
        >.p2{
          font-size: 24px;
        }
        >.p3{
          margin-top: 30px;
          font-size: 22px;
        }
      }
    }
    .title{
      font-size: 38px!important;
      margin-bottom: 27px;
      margin-top: 32px;
    }
    .article{
      margin-top: 30px;
      &.color-ccc{
        font-size: 12px;
      }
    }
    .link-to{
      margin-top: 45px;
    }
    .link-btn{
      display: inline-block;
      margin-right: 22px;
      padding: 8px 48px;
      line-height: 1em;
      color: #fff;
      background: $primary-color;
      border-radius: 5px;
      opacity: .9;
      &:hover{
        opacity: 1;
      }
    }
  }
  .road-map .step-box {
    position: relative;
    height: 200px;
    top: 50px;
  }
  .road-map .step-box .step-one,
  .road-map .step-box .step-two,
  .road-map .step-box .step-three,
  .road-map .step-box .step-four,
  .road-map .step-box .step-five {
    width: 26px;
    height: 26px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 32px;
  }
  .road-map .step-box .step-one i,
  .road-map .step-box .step-two i,
  .road-map .step-box .step-three i,
  .road-map .step-box .step-four i,
  .road-map .step-box .step-five i {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #195eed;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
  }
  .road-map .step-box .step-before {
    background: #000;
  }
  .road-map .step-box .step-before i {
    background: #fff;
  }
  .road-map .step-box .step-one {
    left: 66px;
  }
  .road-map .step-box .step-two {
    left: 280px;
  }
  .road-map .step-box .step-three {
    left: 500px;
  }
  .road-map .step-box .step-four {
    left: 724px;
  }
  .road-map .step-box .step-five {
    left: 954px;
  }
  .road-map .step-box .step-date {
    width: 100px;
    position: absolute;
    left: -25px;
    top: -40px;
    color: #fff;
    font-size: 20px;
  }
  .road-map .step-box .step-info {
    width: 200px;
    position: absolute;
    left: -75px;
    top: 40px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .road-map .step-box .step-1,
  .road-map .step-box .step-2,
  .road-map .step-box .step-3,
  .road-map .step-box .step-4,
  .road-map .step-box .step-5,
  .road-map .step-box .step-6,
  .road-map .step-box .step-7,
  .road-map .step-box .step-8,
  .road-map .step-box .step-9,
  .road-map .step-box .step-10,
  .road-map .step-box .step-11,
  .road-map .step-box .step-12,
  .road-map .step-box .step-13,
  .road-map .step-box .step-14,
  .road-map .step-box .step-15 {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #edc819;
    border-radius: 50%;
    top: 40px;
  }
  .road-map .step-box .step-4,
  .road-map .step-box .step-5,
  .road-map .step-box .step-6,
  .road-map .step-box .step-7,
  .road-map .step-box .step-8,
  .road-map .step-box .step-9,
  .road-map .step-box .step-10,
  .road-map .step-box .step-11,
  .road-map .step-box .step-12,
  .road-map .step-box .step-13,
  .road-map .step-box .step-14,
  .road-map .step-box .step-15 {
    background: #ccc;
  }
  .road-map .step-box .step-1 {
    left: 125px;
  }
  .road-map .step-box .step-2 {
    left: 178px;
  }
  .road-map .step-box .step-3 {
    left: 230px;
  }
  .road-map .step-box .step-4 {
    left: 335px;
  }
  .road-map .step-box .step-5 {
    left: 390px;
  }
  .road-map .step-box .step-6 {
    left: 450px;
  }
  .road-map .step-box .step-7 {
    left: 554px;
  }
  .road-map .step-box .step-8 {
    left: 613px;
  }
  .road-map .step-box .step-9 {
    left: 676px;
  }
  .road-map .step-box .step-10 {
    left: 787px;
  }
  .road-map .step-box .step-11 {
    left: 850px;
  }
  .road-map .step-box .step-12 {
    left: 908px;
  }
  .road-map .step-box .step-13 {
    left: 1010px;
  }
  .road-map .step-box .step-14 {
    left: 1064px;
  }
  .road-map .step-box .step-15 {
    left: 1120px;
  }
  .elasticity{
    opacity: 1;
    animation: elasticity 1s normal;
  }
  @keyframes elasticity{
    0%  {transform: translateY(-100%);}
    60% {transform: translateY(100px);}
    65% {transform: translateY(-60px);}
    75% {transform: translateY(40px);}
    80% {transform: translateY(-20px);}
    95% {transform: translateY(10px);}
    100%{transform: translateY(0);}
  }
  .arightShow01{
    opacity: 1;
    animation: arightShows .8s normal;
  }
  .arightShow02{
    opacity: 1;
    animation: arightShows 1.2s normal;
  }
  .arightShow03{
    opacity: 1;
    animation: arightShows 1.4s normal;
  }
  .arightShow04{
    opacity: 1;
    animation: arightShows 1.6s normal;
  }
  .arightShow05{
    opacity: 1;
    animation: arightShows 1.8s normal;
  }
  .upwardShow01{
    opacity: 1;
    animation: upwardShows 2s normal;
  }
  .upwardShow02{
    opacity: 1;
    animation: upwardShows 2s normal;
  }
  @keyframes arightShows{
    0%  {transform: translateX(-100%);opacity: 0;}
    40% {transform: translateX(-100%);opacity: 0;}
    100%{transform: translateX(0);opacity: 1;}
  }
  @keyframes upwardShows{
    0%{transform: translateY(100%);opacity: 0;}
    40%{transform: translateY(100%);opacity: 0;}
    100%{transform: translateY(0);opacity: 1;}
  }
  .upwardShowss1{
    opacity: 1;
    animation: upwardShows .5s normal;
  }
  .upwardShowss2{
    opacity: 1;
    animation: upwardShows 1s normal;
  }
  .upwardShowss3{
    opacity: 1;
    animation: upwardShows 1.5s normal;
  }
  .upwardShowss4{
    opacity: 1;
    animation: upwardShows 2s normal;
  }
  .upwardShowss5{
    opacity: 1;
    animation: upwardShows 2.5s normal;
  }
  .upwardShowss6{
    opacity: 1;
    animation: upwardShows 3s normal;
  }
  @keyframes upwardShowss{
    0%{transform: translateY(100%);opacity: 0;}
    50%{transform: translateY(100%);opacity: 0;}
    100%{transform: translateY(0);opacity: 1;}
  }
  //媒体查询
  @media screen and(min-width: 1600px){
    .banner{
      padding: 0 10%!important;
    }
  }
  @media screen and(min-width: 1800px){
    .banner{
      padding: 0 15%!important;
    }
  }
  @media screen and(max-width: 1334px){
    .bn-l{
      width: 548px!important;
      &>h3{
        font-size: 34px!important;
      }
      &>.art{
        padding: 0 44px!important;
      }
    }
    .bn-r{
      width: 548px!important;
      height: 515px!important;
      .bg-box{
        .bg-mg,.bg-lg{
          width: 515px!important;
        }
      }
      .cn-t{
        padding-top: 55px!important;
      }
    }
  }
</style>