<template>
  <div class="animated fadeIn">
       <component :applicationData="currentApplicationData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
import JobApplicationView from '~/components/jobapplication/JobApplicationView.vue'
import JobApplicationDetail from '~/components/jobapplication/JobApplicationDetail.vue'
import NewJobApplication from '~/components/jobapplication/NewJobApplication.vue'
export default {
  components: {
    JobApplicationView,
    JobApplicationDetail,
    NewJobApplication
  },
  data() {
    return {
      currentComponent: 'JobApplicationView',
      currentApplicationData: null
    }
  },
  methods: {
    changeCurrentComponent(event){
    this.currentApplicationData = event.data;
    console.log(event.data)
    this.currentComponent = event.component; 
    }
  },
  
}
</script>
<style>

</style>
