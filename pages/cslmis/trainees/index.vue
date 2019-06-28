<template>
  <div class="animated fadeIn">
       <component :traineesData="currentTraineesData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
import TraineesView from '~/components/trainees/TraineesView.vue'
import TraineesProfile from '~/components/trainees/TraineesProfile.vue'
import  NewTrainees from '~/components/trainees/NewTrainees.vue'
export default {
  components: {
    TraineesView,
    TraineesProfile,
    NewTrainees,
  },
  data() {
    return {
      currentComponent: 'TraineesView',
      currentTraineesData: null
    }
  },
  methods: {
      changeCurrentComponent(event){
      this.currentTraineesData = event.data;
      console.log(event.data)
      this.currentComponent = event.component;        
      }
  },
  
  
}
</script>
<style>

</style>