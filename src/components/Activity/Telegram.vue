<template>
  <div id="telegram" class="wrap-box" :style="pageHeight()">
    <div class="base-box">
      <p class="logo">
        <router-link to="/"><img src="./staticAssets/logo.png" alt=""></router-link>
      </p>
      <p class="title">BEBAY官方电报群</p>
      <p class="article">
        BeBay官方电报群</br>
        聚集了全世界的区块链爱好者</br>
        您可以畅所欲言</br>
        官方客服实时在线解答问题</br>
        不定期的活动福利等
      </p>
      <p class="code-img">
        <img src="./staticAssets/erweima.png" alt="">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'telegram',
  data(){
    return{}
  },
  methods: {
    pageHeight(){
      let h = window.innerHeight;
      return {height: h-55+'px'};
   } 
  },
  computed: {

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
#telegram{
  height: 1080px;
  background: url(./staticAssets/codeBg021.png) no-repeat center center;
  background-size: 100% 100%;
  >.base-box{
    >p{
      color: #c7c7c7;
      text-align: center;
    }
    >.logo{
      padding-top: 90px;
      >img{

      }
    }
    >.title{
      font-size: 48px;
      color: #ff6600;
      margin-top: 34px;
    }
    >.article{
      margin-top: 28px;
      font-size: 28px;
      line-height: 48px;
    }
    >.code-img{
      margin-top: 30px;
    }
  }
}
</style>
