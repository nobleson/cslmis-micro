<template>
 <div class="animated fadeIn">
        <component @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import CenterListView from '~/components/center/CenterListView.vue';
import NewCenter from '~/components/center/NewCenter.vue';
import CenterDetails from '~/components/center/CenterDetails.vue';
  export default {
    components: {
      CenterListView,
      CenterDetails,
      NewCenter
    },
    data(){
      return{
       currentComponent: 'CenterListView'
      }
    },
    methods: {
      changeCurrentComponent(newComponent){
        this.currentComponent = newComponent;
      }
    }

  }
</script>
