<template>
  <div class="animated fadeIn">
       <component :apprentishipData="currentApprentishipData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
import ApprentishipView from '~/components/apprentiship/ApprentishipView.vue'
import AppretishipProfile from '~/components/apprentiship/AppretishipProfile.vue'
import NewApprentiship from '~/components/apprentiship/NewApprentiship.vue'
export default {
  components: {
    ApprentishipView,
    AppretishipProfile,
    NewApprentiship,
  },
  data() {
    return {
      currentComponent: 'ApprentishipView',
      currentApprentishipData: null
    }
  },
  methods: {
      changeCurrentComponent(event){
      this.currentApprentishipData = event.data;
      console.log(event.data)
      this.currentComponent = event.component;        
      }
  },
  
  
}
</script>
<style>

</style>