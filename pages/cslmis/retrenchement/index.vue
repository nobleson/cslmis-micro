<template>
  <div class="animated fadeIn">
       <component :retrenchementData="currentRetrenchementData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import RetrenchementView from '~/components/retrenchement/RetrenchementView.vue'
import RetrenchementDetail from '~/components/retrenchement/RetrenchementDetail.vue'
import NewRetrenchement from '~/components/retrenchement/NewRetrenchement.vue'
export default {
  components: {
    RetrenchementView,
    RetrenchementDetail,
    NewRetrenchement
  },
  data() {
    return {
      currentComponent: 'RetrenchementView',
      currentRetrenchementData: null
    }
  },
  methods: {
    changeCurrentComponent(event){
      this.currentRetrenchementData = event.data;
      console.log(event.data)
      this.currentComponent = event.component;  
    }
  }
}
</script>
<style>

</style>
