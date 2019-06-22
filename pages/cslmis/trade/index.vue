<template>
 <div class="animated fadeIn">
        <component @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import TradeView from '~/components/trade/TradeView.vue';
import NewTrade from '~/components/trade/NewTrade.vue';
  export default {
    components: {
      TradeView,
      NewTrade
          },
    data(){
      return{
       currentComponent: 'TradeView',
       currentProgramData: null
      }
    },
    methods: {
      changeCurrentComponent(event){
      this.currentProgramData = event.data;
      console.log(event.data)
      this.currentComponent = event.component;        
      }
    }

  }
</script>
