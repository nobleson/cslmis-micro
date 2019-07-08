<template>
  <div class="animated fadeIn">
       <component :reportData="currentReportData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
import ReportView from '~/components/report/ReportView.vue'
import  NewReport from '~/components/report/NewReport.vue'
export default {
  components: {
    ReportView,
    NewReport,
  },
  data() {
    return {
      currentComponent: 'ReportView',
      currentReportData: null
    }
  },
  methods: {
      changeCurrentComponent(event){
      this.currentReportData = event.data;
      console.log(event.data)
      this.currentComponent = event.component;        
      }
  },
  
  
}
</script>
<style>

</style>