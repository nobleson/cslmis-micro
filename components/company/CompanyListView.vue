<template>
<div>
    <b-row>
            <b-col align-self="end"  class="pb-3 pl-auto" cols="12">
          
                <b-button @click="$emit('changeComponent','NewCompany')" class="">Create New</b-button>
             <hr>
            </b-col>
            <hr>
      </b-row>
      <b-row>

         <b-col v-for="company in processCompanies" :key="company.id" cols="2">
         <div>
        <b-card :title="company.companyAcronym" :sub-title="company.companyAcronym">
              <b-card-text>{{company.dateRegistered}}</b-card-text>
              <b-link href="#" :id="company._id" class="card-link" @click="$emit('changeComponent','CompanyDetails')">Manage</b-link>
            </b-card>
          </div>
         </b-col>
        </b-row>
        </div>
</template>
<script>
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
export default {
   data() {
      return {
        compayData: []
      }
    }, 
    mounted(){
      this.create();
    },
    computed: {
          ...mapGetters({companies: 'company/getCompanies'}),
          processCompanies: function(){
          let json = JSON.parse(JSON.stringify(this.companies));
          console.log("Json:"+json);
           return  json;
          }
    },
    methods: {
      ...mapActions({loadCompanies: 'company/loadCompanies'}),
        create() {
          this.loadCompanies().then((ev) => {
            //this.compayData = this.companies; 
          })
          .catch((e) => {
          })
        }
        
    }
  }
</script>

