<template>
  <div id="invite">
    <div class="wrap-box first-chunk">
      <div class="base-box">
          <p class="lg-tit">邀请好友</p>
          <p class="ms-tit">坐享30%交易手续费佣金</p>
      </div>
    </div>

    <div class="wrap-box second-chunk">
      <div class="base-box">
        <div class="hint-title">
          <p class="clearfix" v-if="!user.userId">您还未登录，登录后即可分享好友<router-link class="pullright" :to="{path: '/register',query: {lor: 'lg'}}">登 录</router-link></p>
          <p class="clearfix" v-if="user.userId">即可分享好友 <router-link class="pullright" to="/">分享</router-link></p>
        </div>
      </div>
    </div>

    <div class="wrap-box third-chunk">
      <div class="base-box">
        <div class="c-box">
          <p class="lg-title">活动周期：</p>
          <p class="ms-title">自正式挖矿日开始，12个月。</p>
          <p class="bar">活动规则：</p>
          <p class="article">
            <p>
              <p>1. 成功邀请好友注册完成实名认证并进行交易的用户，即可享受好友每一笔交易手续费返佣</p>
              <p>2. 返佣比例根据为邀请交易手续费的20%，详见说明；</p>
              <p>3. 邀请人与被邀请人实名信息一致，不可享受返佣奖励；</p>
              <p>4. 活动为期12个月，结束后邀请人不再享受返佣奖励；</p>
              <p>* 注册即获BeBay专属邀请链接</p>
              <p>* 仅承认使用BeBay官方邀请链接产生的邀请行为</p>
              <p>* 官方根据实际运营情况，保留对活动规则做出修改的权利，请关注官方公告</p>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
export default {
  name: 'invite',
  data:function(){
    return {

    }
  },
  methods: {

  },
  computed: {
    ...mapGetters([
        'user',
        'alert'
      ])
  },
  watch: {

  },
  components: {
    
  },
  beforeCreate(){

  },
  created(){

  },
  beforeMount(){

  },
  mounted(){
    
  },
  beforeDestroy(){

  },
  destroyed(){
    
  }
}
</script>

<style lang="scss">
@import '@/assets/css/index.scss';
#invite{
  .first-chunk{
    height: 500px;
    padding: 150px 0 200px;
    box-sizing: border-box;
    color: #fff;
    text-align: center;
    background: url(./staticAssets/intercambio-centralizado-descentralizado-criptomonedas.jpg) no-repeat;
    background-size: 100% 100%;
    >.base-box{
      >.lg-tit{
        font-size: 42px;
      }
      >.ms-tit{
        font-size: 36px;
      }
    }
  }
  .second-chunk{
    background: #f5f5f5;
    margin-top: 30px;
    height: 58px; 
    >.base-box{
      >.hint-title{
        >p{
          font-size: 18px;
          line-height: 58px;
          font-weight: 600;
          color: #333333;
          >a{
            margin-top: 12px;
            float: right;
            display: inline-block;
            padding: 0 42px;
            font-size: 14px;
            color: #fff;
            line-height: 32px;
            border-radius: 3px;
            opacity: 1;
            background: $primary-color;
            &:hover{
              opacity: .9;
            }
          }
        }
      }
    }
  }
  .third-chunk{
    background: #f5f5f5;
    margin-top: 20px;
    margin-bottom: 50px;
    >.base-box{
      >.c-box{
        color: #333;
        font-size: 16px;
        padding: 25px 0;
        >.lg-title{
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 34px;
        }
        >.ms-title{
          
        }
        >.bar{
          
        }
        >.article{
          margin-top: 24px;
          >p{

          }
        }
      }
    }
  }
}
</style>
