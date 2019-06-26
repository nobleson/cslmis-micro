<template>
 <div class="animated fadeIn">
          <notifications group="account" position="top right" classes="my-style"/>
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
<style scoped>
.my-style {
  width: 200px
}
 .my-style.notification-title {
   font-size: 23px;
   background: blue;
  }
  .my-style.notification-content {
   background:rgb(0, 255, 234);
  }

</style>


