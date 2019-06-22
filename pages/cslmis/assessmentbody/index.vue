<template>
 <div class="animated fadeIn">
        <component :assessBodyData="currentAssessBodyData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import AssessmentBodyView from '~/components/assessmentbody/AssessmentBodyView.vue';
import RegisterAssessmentBody from '~/components/assessmentbody/RegisterAssessmentBody.vue';
import AssessmentBodyProfile from '~/components/assessmentbody/AssessmentBodyProfile.vue';
  export default {
    components: {
      AssessmentBodyView,
      RegisterAssessmentBody,
      AssessmentBodyProfile
          },
    data(){
      return{
       currentComponent: 'AssessmentBodyView',
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
