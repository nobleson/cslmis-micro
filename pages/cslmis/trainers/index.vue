<template>
  <div class="animated fadeIn">
       <component :trainersData="currentTrainersData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
import TrainersView from '~/components/trainers/TrainersView.vue'
import TrainersProfile from '~/components/trainers/TrainersProfile.vue'
import  NewTrainers from '~/components/trainers/NewTrainers.vue'
export default {
  components: {
    TrainersView,
    TrainersProfile,
    NewTrainers,
  },
  data() {
    return {
      currentComponent: 'TrainersView',
      currentTrainersData: null
    }
  },
  methods: {
      changeCurrentComponent(event){
      this.currentTrainersData = event.data;
      console.log(event.data)
      this.currentComponent = event.component;        
      }
  },
  
  
}
</script>
<style>

</style>