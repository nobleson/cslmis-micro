<template>
  <div class="animated fadeIn">
       <component :devprogramData="currentdevProgramData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
import DevProgramView from '~/components/devProgram/DevProgramView.vue'
import  NewDevProgram from '~/components/devProgram/NewDevProgram.vue'
export default {
  components: {
    DevProgramView,
    NewDevProgram,
  },
  data() {
    return {
      currentComponent: 'DevProgramView',
      currentdevProgramData: null
    }
  },
  methods: {
      changeCurrentComponent(event){
      this.currentdevProgramData = event.data;
      console.log(event.data)
      this.currentComponent = event.component;        
      }
  },
  
  
}
</script>
<style>

</style>