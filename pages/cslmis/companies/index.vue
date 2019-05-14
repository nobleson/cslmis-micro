<template>
 <div class="animated fadeIn">
        <component @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import CompanyListView from '~/components/company/CompanyListView.vue';
import NewCompany from '~/components/company/NewCompany.vue';
import CompanyDetails from '~/components/company/CompanyDetails.vue';
  export default {
    components: {
      CompanyListView,
      NewCompany,
      CompanyDetails
    },
    data(){
      return{
       currentComponent: 'CompanyListView'
      }
    },
    methods: {
      changeCurrentComponent(newComponent){
        this.currentComponent = newComponent;
      }
    }

  }
</script>
