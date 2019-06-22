<template>
 <div class="animated fadeIn">
        <component :assessBodyData="currentAssessBodyData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import UserView from '~/components/admin/UserView.vue';
  export default {
    components: {
      UserView
          },
    data(){
      return{
       currentComponent: 'UserView',
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
