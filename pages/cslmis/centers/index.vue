<template>
 <div class="animated fadeIn">
        <component :providerData="currentProviderData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import CenterListView from '~/components/center/CenterListView.vue';
import CenterRegister from '~/components/center/CenterRegister.vue';
import CenterDetails from '~/components/center/CenterDetails.vue';
  export default {
    components: {
      CenterListView,
      CenterDetails,
     CenterRegister
    },
    data(){
      return{
       currentComponent: 'CenterListView',
       currentProviderData: null
      }
    },
    methods: {
      changeCurrentComponent(event){
      this.currentProviderData = event.data;
      this.currentComponent = event.component;        
      }
    }


  }
</script>
