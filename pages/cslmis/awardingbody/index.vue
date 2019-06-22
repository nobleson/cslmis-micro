<template>
 <div class="animated fadeIn">
        <component :awardingBodyData="currentAwardingBodyData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import AwardingBodyView from '~/components/awardingbody/AwardingBodyView.vue';
import NewAwardingBody from '~/components/awardingbody/NewAwardingBody.vue';
import AwardingBodyProfile from '~/components/awardingbody/AwardingBodyProfile.vue';
  export default {
    components: {
      AwardingBodyView,
      NewAwardingBody,
      AwardingBodyProfile
          },
    data(){
      return{
       currentComponent: 'AwardingBodyView',
       currentAwardingBodyData: null
      }
    },
    methods: {
      changeCurrentComponent(event){
      this.currentAwardingBodyData = event.data;
      console.log(event.data)
      this.currentComponent = event.component;        
      }
    }

  }
</script>
