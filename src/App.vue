<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/Header/Header.vue'
  import Footer from './components/Footer/Footer.vue'
export default {
  name: 'app',
  data(){
    return {}
  },
  components: {
    Header,
    Footer
  },
  watch: {
    $route(){
      console.log(this.$route.mate);
    }
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

<style>
  *{
    margin: 0;
    padding: 0;
  }
  body,a{
    font-size: 14px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  img{
    border:0 none;/* 主要用于ie去边框 */
  }
  ul,li{
    list-style-type: none;
  }
  a,s{
    text-decoration: none;
  }
  .clearfix{
    _zoom: 0;
  }
  .clearfix:after{
    content: '';
    display: block;
    height: 0;
    clear: both;
  }
  .pullleft{
    float: left;
  }
  .pullright{
    float: right;
  }
  .inline-block{
    display: inline-block;
  }
  .wrap-box{
    width: 100%;
    min-width: 1200px;
  }
  .base-box{
    width: 1200px;
    margin: 0 auto;
  }
  .text-center{
    text-align: center;
  }
  .cursor-na{
    cursor: not-allowed;
  }
  .no-margin{
    margin: 0!important;
  }
  .hover-highlight:hover{
    color: #fff!important;
  }
  .bg-whiter{
    background: #fff;
  }
  .hidden{
    display: none!important;
  }
  .block{
    display: block;
  }
  .color-fff{
    color: #fff;
  }
  .color-ccc{
    color: #ccc;
  }
  .posit-r{
    position: relative;
  }
  .posit-a{
    position:  absolute;
  }
  .opacity0{
    opacity: 0;
  }
  ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, .1);
      background-color: #BCBCBC;
  }
</style>
