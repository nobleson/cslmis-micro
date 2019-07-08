<template>
  <div class="animated fadeIn">
       <component :facilitiesData="currentFacilitiesData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
import FacilitiesView from '~/components/facilities/FacilitiesView'
import NewFacilities from '~/components/facilities/NewFacilities'
export default {
  components: {
   
    FacilitiesView,
    NewFacilities,
  },
  data() {
    return {
      currentComponent: 'FacilitiesView',
      currentFacilitiesData: null
    }
  },
  methods: {
      changeCurrentComponent(event){
      this.currentFacilitiesData = event.data;
      console.log(event.data)
      this.currentComponent = event.component;        
      }
  },
  
  
}
</script>
<style>

</style>