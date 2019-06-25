<template>
  <div class="animated fadeIn">
       <component :statData="currentStatData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import LabourStatisticView from '~/components/labourstatistic/LabourStatisticView.vue'
import LabourStatisticDetail from '~/components/labourstatistic/LabourStatisticDetail.vue'
import NewLabourStatistic from '~/components/labourstatistic/NewLabourStatistic.vue'
export default {
  components:{
    LabourStatisticView,
    NewLabourStatistic,
    LabourStatisticDetail
  },
  data() {
    return {
    
      currentComponent: 'LabourStatisticView',
      currentStatData: null
    }
  },
  methods: {
    changeCurrentComponent(event){
      this.currentStatData = event.data;
      console.log(event.data)
      this.currentComponent = event.component; 
    }
  }
}
</script>
<style>

</style>
