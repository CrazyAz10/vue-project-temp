<template>
  <div id="activity">
    <Invite v-if="activ=='Invite'"></Invite>
    <Telegram v-if="activ=='Telegram'"></Telegram>
  </div>
</template>

<script>
  import Invite from './Invite.vue'
  import Telegram from './Telegram.vue'
export default {
  name: 'activity',
  data(){
    return {
      activ: '',
      title: {
        Invite: '邀请好友，坐享30%交易手续费佣金',
        Telegram: '加入官方电报群/币用群，掌握最新动态'
      }
    }
  },
  methods: {

  },
  computed: {

  },
  watch: {
    $route(){
      this.activ = this.$route.query.activ;
    }
  },
  components: {
    Invite,
    Telegram
  },
  beforeCreate(){

  },
  created(){

  },
  beforeMount(){

  },
  mounted(){
    this.activ = this.$route.query.activ;
    document.title = this.title[this.activ];
  },
  beforeDestroy(){

  },
  destroyed(){
    
  }
}
</script>

<style lang="scss">
@import '@/assets/css/index.scss';
#activity{
  
}
</style>
