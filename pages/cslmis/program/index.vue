<template>
 <div class="animated fadeIn">
        <component :programData="currentProgramData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import ProgramView from '~/components/program/ProgramView.vue';
import NewProgram from '~/components/program/NewProgram.vue';
  export default {
    components: {
      ProgramView,
      NewProgram
          },
    data(){
      return{
       currentComponent: 'ProgramView',
       currentProgramData: null
      }
    },
    methods: {
      changeCurrentComponent(event){
      this.currentProgramData = event.data;
      console.log(event.data)
      this.currentComponent = event.component;        
      }
    }

  }
</script>
