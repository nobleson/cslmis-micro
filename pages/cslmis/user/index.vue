<template>
 <div class="animated fadeIn">
        <component @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import UserView from '~/components/user/UserView.vue';
  export default {
    components: {
      UserView
          },
    data(){
      return{
       currentComponent: 'UserView',
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
