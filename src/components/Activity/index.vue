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
      activ: ''
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
