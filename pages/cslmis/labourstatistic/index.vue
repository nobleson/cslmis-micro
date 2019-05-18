<template>
  <div class="animated fadeIn">
        <component @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import LabourStatisticView from '~/components/labourstatistic/LabourStatisticView.vue'
export default {
  components:{
    LabourStatisticView
  },
  data() {
    return {
    
      currentComponent: 'LabourStatisticView'
    }
  },
  methods: {
    changeCurrentComponent(newComponent) {
      this.currentComponent = newComponent;
    }
  }
}
</script>
<style <style lang="scss" scoped>

</style>
