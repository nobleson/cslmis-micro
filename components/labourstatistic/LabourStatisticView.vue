<template>
<div class="">
  <b-row>
            <b-col align-self="end"  class="pb-3 pl-auto" cols="12">
                <b-button color=""  @click="$emit('changeComponent',{component: 'NewLabourStatistic', id: null})" class="">Create New</b-button>
             <hr>
            </b-col>
            <hr>
      </b-row>
  <mdb-card class="card-body">
    <div class="d-flex justify-content-end" style="background:lightgray">
      <h2><span class="badge badge-info">21,400</span></h2>
    </div>
    <h1>Artisans</h1>
    <h6>Total Number of Artisans</h6>
  <mdb-collapse :toggleClass="['btn btn-primary',]" :toggleText="['Edit',]">
  <div>
     <mdb-input label="Enter Number of Artisans" v-model="form.numberOfArtisans" required />
     </div>
     <mdb-btn class="btn btn-secondary float-right" >Save Changes</mdb-btn>
    </mdb-collapse>
    
  </mdb-card>
  
  </div>
</template>
<script>
 import { mdbIcon } from 'mdbvue';
import { mdbBtn } from 'mdbvue';
import { mdbInput } from 'mdbvue';
import { mdbCard, mdbCardBody, mdbCardTitle, mdbCardText, mdbMask, mdbCardHeader, mdbCardFooter } from 'mdbvue';
import { mdbCollapse, mdbContainer } from 'mdbvue';
  export default {
    name: 'Panels',
    components: {
      mdbCard,
      mdbCardTitle,
      mdbCardText,
      mdbCollapse,
      mdbMask,
      mdbContainer,
      mdbCardFooter,
      mdbInput,
      mdbBtn,
      mdbIcon
    },
    data (){
      return {
          form:{
        numberOfArtisans:'',
      }
      }
      
    }
    
  }
</script>
<style scoped>


</style>
