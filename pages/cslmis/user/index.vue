<template>
 <div class="animated fadeIn">
           <component :userData="currentUserData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import UserView from '~/components/user/UserView.vue';
import UserProfile from '~/components/user/UserProfile.vue';
  export default {
    components: {
      UserView,
      UserProfile
          },
    data(){
      return{
       currentComponent: 'UserView',
       currentUserData: null
      }
    },
    methods: {
      changeCurrentComponent(event){
      this.currentUserData = event.data;
      console.log(event.data)
      this.currentComponent = event.component;        
      }
    }

  }
</script>
