<template>
  <div class="animated fadeIn">
        <component @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
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
    NewAdvert
  },
  data() {
    return {
      currentComponent: 'JobAdvertView'
    }
  },
  methods: {
    changeCurrentComponent(newComponent) {
      this.currentComponent = newComponent;
    }
  },
  mounted(){
         
        this.loadDashboard()
      },
    computed: {


    }, 
    methods: {
      ...mapGetters({companyId: 'authentication/getCompanyId'}),
      loadDashboard(){
      this._id = localStorage.getItem('companyId')
      console.log('Company Id'+this._id)
       }
      
      }
  
  
}
</script>
<style <style lang="scss" scoped>

</style>
