<template>
  <div class="animated fadeIn">
       <component :advertData="currentAdvertData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
import JobAdvertView from '~/components/jobadvert/JobAdvertView.vue'
import JobAdvertDetail from '~/components/jobadvert/JobAdvertDetail.vue'
import NewAdvert from '~/components/jobadvert/NewAdvert.vue'
export default {
  components: {
    JobAdvertView,
    JobAdvertDetail,
    NewAdvert,
  },
  data() {
    return {
      currentComponent: 'JobAdvertView',
      currentAdvertData: null
    }
  },
  methods: {
      changeCurrentComponent(event){
      this.currentAdvertData = event.data;
      console.log(event.data)
      this.currentComponent = event.component;        
      }
  },
  
  
}
</script>
<style>

</style>
