<template>
  <div class="animated fadeIn">
       <component :aprcenterData="currentAprCenterData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
import AprCenterView from '~/components/aprCenters/AprCenterView.vue'
import AprCenterProfile from '~/components/aprCenters/AprCenterProfile.vue'
import  NewAprCenter from '~/components/aprCenters/NewAprCenter.vue'
export default {
  components: {
    AprCenterView,
    AprCenterProfile,
    NewAprCenter,
  },
  data() {
    return {
      currentComponent: 'AprCenterView',
      currentAprCenterData: null
    }
  },
  methods: {
      changeCurrentComponent(event){
      this.currentAprCenterData = event.data;
      console.log(event.data)
      this.currentComponent = event.component;        
      }
  },
  
  
}
</script>
<style>

</style>