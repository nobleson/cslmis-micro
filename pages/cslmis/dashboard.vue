<template>
  <div class="animated fadeIn">
    <b-card header-tag="header">
      <div slot="header">
        <i class="icon-drop"></i> Welcome to the dashboard
      </div>
      <b-card-body>
        <b-row>
          <div>something</div>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex'
  export default {
    name: 'dashboard',
    data(){
      return{
        _id: '',
      }
    },
    mounted(){
         
        this.loadDashboard()
      },
    computed: {


    }, 
    methods: {
      ...mapGetters({companyId: 'authentication/getCompanyId'}),
      loadDashboard(){
      this._id = localStorage.getItem('companyId')
      console.log('Company Id'+this._id)
       }
      
      }
  }
</script>
