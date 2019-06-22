<template>
 <div class="animated fadeIn">
        <component :assesorsData="currentAssessBodyData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import AssesorView from '~/components/assesors/AssesorView.vue';
import NewAssesor from '~/components/assesors/NewAssesor.vue';
import AssesorProfile from '~/components/assesors/AssesorProfile.vue';
  export default {
    components: {
      AssesorView,
      NewAssesor,
      AssesorProfile
          },
    data(){
      return{
       currentComponent: 'AssesorView',
       currentAssessBodyData: null
      }
    },
    methods: {
      changeCurrentComponent(event){
      this.currentAssessBodyData = event.data;
      console.log(event.data)
      this.currentComponent = event.component;        
      }
    }

  }
</script>
