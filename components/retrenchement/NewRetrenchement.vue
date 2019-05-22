<template>
<div>
  
    <div class="container">
      <b-button @click="$emit('changeComponent', 'Retrenchement')">Back</b-button>
     
    <div >
          <form>
              <p class="h4 text-center mb-4">Retrenchement</p>
              <div class="grey-text">
               <mdb-input label="Enter Artsans Total Trenched ." v-model="form.totalretrenched" size="lg" required/>
               <mdb-input label="Enter Total Certified" v-model="form.totalCertified" size="lg" required/>
               <mdb-input label="Enter Total Liecenced" v-model="form.totalLiecensed" size="lg" required/>
               <b-form-group id="input-group-2 " label="Date" label-for="inputs">
                  <date-picker v-model="form.date" :config="{format: 'DD/MM/YYYY'}"></date-picker>
              </b-form-group>
               <mdb-input label="Enter Total Liecenced" v-model="form.companyId" size="lg" required/>
                               
                <b-card class="mt-3" header="Form Data Result">
                        <pre class="m-0">{{ form }}</pre>
                 </b-card>
              </div>
              <div class="text-center">
                <mdb-btn>Submit</mdb-btn>
              </div>
            </form>
    </div> 
  </div>
  </div>
</template>
<script>

import { mdbInput, mdbCard, mdbCardbody, mdbBtn } from 'mdbvue';
  export default {
    name: "Input",
    components: {
      mdbInput,
      mdbCard,
      mdbBtn
    },
    data() {
      return {
        form:{
          totalretrenched:'',
          totalCertified:'',
          totalLiecenecd:'',
          date:'',
          companyId:'', 
        }
        
        

      };
    }
  }
</script>
<style>
.top{
  margin-top:20%;
   margin-top:10%;
}
</style>