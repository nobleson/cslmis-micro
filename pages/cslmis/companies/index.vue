<template>
 <div class="animated fadeIn">
        <component :companyData="currentCompanyData" @changeComponent="changeCurrentComponent" :is="currentComponent"></component>

  </div>
</template>

<script>
import CompanyListView from '~/components/company/CompanyListView.vue';
import CompanyDetails from '~/components/company/CompanyDetails.vue';
import NewCompany from '~/components/company/NewCompany.vue';
  export default {
    components: {
      CompanyListView,
      CompanyDetails,
      NewCompany
    },
    data(){
      return{
       currentComponent: 'CompanyListView',
       currentCompanyData: null
      }
    },
    methods: {
      changeCurrentComponent(event){
      this.currentCompanyData = event.data;
      this.currentComponent = event.component;        
      }
    }

  }
</script>
