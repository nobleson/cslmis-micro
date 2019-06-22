<template>
 <div class="animated fadeIn">
        <component :licensingBodyData="currentLicenseBodyData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import NewLicensingBody from '~/components/licensingbody/NewLicensingBody.vue';
import LicensingBodyView from '~/components/licensingbody/LicensingBodyView.vue';
import LicensingBodyProfile from '~/components/licensingbody/LicensingBodyProfile.vue';
  export default {
    components: {
      LicensingBodyView,
      NewLicensingBody,
      LicensingBodyProfile
          },
    data(){
      return{
       currentComponent: 'LicensingBodyView',
       currentLicenseBodyData: null
      }
    },
    methods: {
      changeCurrentComponent(event){
      this.currentLicenseBodyData = event.data;
      console.log(event.data)
      this.currentComponent = event.component;        
      }
    }

  }
</script>
