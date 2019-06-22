<template>
 <div class="animated fadeIn">
        <component :regulatoryBodyData="currentRegulatoryBodyData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import NewRegulatoryBody from '~/components/regulatorybody/NewRegulatoryBody.vue';
import RegulatoryBodyView from '~/components/regulatorybody/RegulatoryBodyView.vue';
import RegulatoryBodyProfile from '~/components/regulatorybody/RegulatoryBodyProfile.vue';
  export default {
    components: {
      RegulatoryBodyView,
      NewRegulatoryBody,
      RegulatoryBodyProfile
          },
    data(){
      return{
       currentComponent: 'RegulatoryBodyView',
       currentRegulatoryBodyData: null
      }
    },
    methods: {
      changeCurrentComponent(event){
      this.currentRegulatoryBodyData = event.data;
      console.log(event.data)
      this.currentComponent = event.component;        
      }
    }

  }
</script>
